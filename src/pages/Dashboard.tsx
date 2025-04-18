import { useState } from 'react';
import { Menu, Plus, BookOpen, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ChatWindow from '@/components/ChatWindow';
import CharacterCard from '@/components/CharacterCard';

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Mock data for characters
  const mockCharacters = [
    {
      id: '1',
      name: 'Elara Moonwhisper',
      description: 'A young sorceress with silver hair and the ability to speak with the wind. She\'s on a quest to find her missing mentor in the Enchanted Forest.',
      createdAt: new Date('2023-05-15'),
    },
    {
      id: '2',
      name: 'Thorne Blackwood',
      description: 'A gruff warrior with a mysterious past. His arms are covered in ancient runes that glow when danger is near.',
      createdAt: new Date('2023-06-22'),
    },
    {
      id: '3',
      name: 'Luna Starfall',
      description: 'A celestial being who fell to earth and lost her memories. She can create beautiful illusions with her hands.',
      createdAt: new Date('2023-08-03'),
    },
    {
      id: '4',
      name: 'Felix Whiskerworth',
      description: 'A talking cat with an extensive knowledge of potion making. He wears tiny spectacles and a blue bowtie.',
      createdAt: new Date('2023-09-10'),
    },
  ];

  // Mock data for stories
  const mockStories = [
    {
      id: '1',
      name: 'The Crystal Cavern',
      description: 'An adventure deep into the glowing crystal caves where ancient magic still thrives.',
      createdAt: new Date('2023-04-12'),
    },
    {
      id: '2',
      name: 'Whispers of the Old Forest',
      description: 'The trees of the Old Forest have secrets to tell for those who know how to listen.',
      createdAt: new Date('2023-07-25'),
    },
  ];

  const handleLogout = () => {
    // In a real app, you would call FastAPI to log out
    // Then navigate to the home page
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-whisperwynd-gray/30 flex flex-col">


      {/* <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-storywise-purple" />
              <span className="text-xl font-bold font-serif text-storywise-purple">StoryWise</span>
            </Link>
            
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-600 hover:text-storywise-purple"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header> */}

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="flex items-center justify-between h-16 px-4 md:px-6">
          <div className="flex items-center">
            <button
              className="md:hidden p-2 rounded-md text-whisperwynd-dark-gray hover:bg-whisperwynd-gray"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </button>
            <div className="flex items-center ml-2 md:ml-0">
              <BookOpen className="h-6 w-auto text-whisperwynd-purple" />
              <span className="ml-2 text-lg font-serif font-medium text-whisperwynd-dark-gray">WhisperWynd</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="lg"
                className="text-gray-600 hover:text-whisperwynd"
                onClick={handleLogout}
              >
              <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
          </div>
        </div>
        
      </header>
      
      <div className="flex flex-1 overflow-hidden">
        {/* Mobile sidebar */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 md:hidden" onClick={() => setIsMenuOpen(false)}>
            <div className="fixed top-0 left-0 bottom-0 w-64 bg-white" onClick={(e) => e.stopPropagation()}>
              <div className="p-4 border-b border-whisperwynd-gray">
                <div className="flex items-center">
                  <BookOpen className="h-6 w-auto text-whisperwynd-purple" />
                  <span className="ml-2 text-lg font-serif font-medium text-whisperwynd-dark-gray">WhisperWynd</span>
                </div>
              </div>
              <nav className="p-4 space-y-1">
                <a href="#" className="flex items-center px-3 py-2 rounded-md bg-whisperwynd-light-purple text-whisperwynd-purple">
                  <BookOpen className="h-5 w-5 mr-3" />
                  <span>Stories & Characters</span>
                </a>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-600 hover:text-storywise-purple"
                  onClick={handleLogout}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </nav>
            </div>
          </div>
        )}
        
        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h1 className="text-2xl font-serif font-bold text-whisperwynd-dark-gray">My Creative Space</h1>
                <p className="text-whisperwynd-medium-gray">Develop your characters and stories</p>
              </div>
              <Button className="mt-4 md:mt-0 bg-whisperwynd-purple hover:bg-whisperwynd-purple/90">
                <Plus className="h-4 w-4 mr-2" />
                Create New
              </Button>
            </div>
            
            <Tabs defaultValue="characters" className="space-y-4">
              <TabsList>
                <TabsTrigger value="characters">Characters</TabsTrigger>
                <TabsTrigger value="stories">Stories</TabsTrigger>
              </TabsList>
              
              <TabsContent value="characters" className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {mockCharacters.map((character) => (
                    <CharacterCard
                      key={character.id}
                      id={character.id}
                      name={character.name}
                      description={character.description}
                      createdAt={character.createdAt}
                      onView={(id) => console.log('View character', id)}
                      onEdit={(id) => console.log('Edit character', id)}
                      onDelete={(id) => console.log('Delete character', id)}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="stories" className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {mockStories.map((story) => (
                    <CharacterCard
                      key={story.id}
                      id={story.id}
                      name={story.name}
                      description={story.description}
                      createdAt={story.createdAt}
                      onView={(id) => console.log('View story', id)}
                      onEdit={(id) => console.log('Edit story', id)}
                      onDelete={(id) => console.log('Delete story', id)}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
        
        {/* Chat sidebar */}
        <aside className="hidden lg:block w-96 border-l border-whisperwynd-gray bg-white overflow-hidden">
          <ChatWindow />
        </aside>
      </div>
      
      {/* Mobile chat button */}
      <div className="lg:hidden fixed bottom-4 right-4">
        <Button
          className="h-12 w-12 rounded-full bg-whisperwynd-purple hover:bg-whisperwynd-purple/90 shadow-lg"
          onClick={() => document.getElementById('chat-modal')?.classList.remove('hidden')}
        >
          <BookOpen className="h-6 w-6" />
        </Button>
      </div>
      
      {/* Mobile chat modal */}
      <div id="chat-modal" className="lg:hidden hidden fixed inset-0 z-50 bg-black/50">
        <div className="fixed inset-4 bg-white rounded-lg flex flex-col overflow-hidden">
          <div className="flex justify-between items-center p-4 border-b border-whisperwynd-gray">
            <h3 className="font-medium">WhisperWynd AI Assistant</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => document.getElementById('chat-modal')?.classList.add('hidden')}
            >
              Close
            </Button>
          </div>
          <div className="flex-1 overflow-hidden">
            <ChatWindow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
