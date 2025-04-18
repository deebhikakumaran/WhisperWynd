import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const ChatWindow = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! I\'m your storytelling companion from WhisperWynd. How can I help with your magical story today?',
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollArea = scrollAreaRef.current;
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages([...messages, userMessage]);
    setInput('');
    
    // Simulate AI response (this would be replaced with actual API call to backend)
    setIsTyping(true);
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm processing your request. In the actual implementation, this would communicate with the FastAPI backend to get a response from the AI model.",
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full border border-border rounded-md overflow-hidden bg-white shadow-sm">
      {/* Chat header */}
      <div className="p-4 border-b border-border bg-whisperwynd-light-purple">
        <h3 className="font-medium text-whisperwynd-dark-gray flex items-center">
          <Bot className="h-5 w-5 mr-2 text-whisperwynd-purple" />
          WhisperWynd AI Assistant
        </h3>
      </div>
      
      {/* Chat messages */}
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.sender === 'user'
                    ? 'bg-whisperwynd-purple text-white'
                    : 'bg-whisperwynd-light-purple text-whisperwynd-dark-gray'
                }`}
              >
                <div className="flex items-center mb-1">
                  {message.sender === 'ai' && <Bot className="h-4 w-4 mr-1 text-whisperwynd-purple" />}
                  {message.sender === 'user' && <User className="h-4 w-4 mr-1" />}
                  <span className="text-xs opacity-70">
                    {message.sender === 'ai' ? 'WhisperWynd' : 'You'}
                  </span>
                </div>
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                <div className="text-right mt-1">
                  <span className="text-xs opacity-70">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-whisperwynd-light-purple text-whisperwynd-dark-gray rounded-lg p-3 max-w-[80%]">
                <div className="flex items-center">
                  <Bot className="h-4 w-4 mr-1 text-whisperwynd-purple" />
                  <span className="text-xs opacity-70">WhisperWynd</span>
                </div>
                <div className="flex space-x-1 mt-2 justify-center items-center">
                  <div className="w-2 h-2 bg-whisperwynd-purple rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                  <div className="w-2 h-2 bg-whisperwynd-purple rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-whisperwynd-purple rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
      
      {/* Input area */}
      <div className="p-4 border-t border-border">
        <div className="flex gap-2">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about your story or characters..."
            className="resize-none min-h-[50px]"
            rows={1}
          />
          <Button 
            onClick={handleSendMessage} 
            className="bg-whisperwynd-purple hover:bg-whisperwynd-purple/90 text-white"
            disabled={!input.trim()}
          >
            <Send className="h-4 w-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </div>
        <p className="text-xs text-whisperwynd-medium-gray mt-2">
          Press Enter to send. Shift+Enter for new line.
        </p>
      </div>
    </div>
  );
};

export default ChatWindow;