import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BookOpen, Sparkles, MessagesSquare, PenLine } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-white to-whisperwynd-gray py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-whisperwynd-dark-gray font-serif mb-6">
                About WhisperWynd
              </h1>
              <p className="text-lg md:text-xl text-whisperwynd-medium-gray max-w-3xl mx-auto">
                Discover the magic behind our AI-powered storytelling platform and how it's transforming creative writing.
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-whisperwynd-dark-gray font-serif mb-6">
                  Our Mission
                </h2>
                <p className="text-whisperwynd-medium-gray mb-4">
                  WhisperWynd was born from a passion for storytelling and a belief that technology can enhance human creativity, not replace it.
                </p>
                <p className="text-whisperwynd-medium-gray mb-4">
                  We've created an AI companion that understands narrative structure, character development, and the nuances of compelling storytelling.
                </p>
                <p className="text-whisperwynd-medium-gray">
                  Our mission is to empower writers, educators, and storytellers of all kinds to bring their imaginative worlds to life with the help of advanced AI.
                </p>
              </div>
              <div className="bg-whisperwynd-light-purple rounded-lg p-8 relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-whisperwynd-purple rounded-lg"></div>
                <blockquote className="text-whisperwynd-dark-gray italic font-serif text-lg relative z-10">
                  "Stories have the power to change how we see the world. Our goal is to help more people find their voice and tell stories that matter."
                  <footer className="mt-4 font-normal text-base text-whisperwynd-medium-gray not-italic">
                    — WhisperWynd Founding Team
                  </footer>
                </blockquote>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-whisperwynd-blue rounded-full"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-16 bg-whisperwynd-gray/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-whisperwynd-dark-gray font-serif">
                How WhisperWynd Works
              </h2>
              <p className="mt-4 text-lg text-whisperwynd-medium-gray max-w-3xl mx-auto">
                Our AI understands the elements of good storytelling and helps you develop rich characters and engaging narratives.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-whisperwynd-light-purple text-whisperwynd-purple mb-5">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-whisperwynd-dark-gray mb-3 font-serif">1. Inspiration</h3>
                <p className="text-whisperwynd-medium-gray">
                  Begin with a seed of an idea, a character trait, or a setting. WhisperWynd helps expand these initial concepts into fully developed elements.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-whisperwynd-light-purple text-whisperwynd-purple mb-5">
                  <MessagesSquare className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-whisperwynd-dark-gray mb-3 font-serif">2. Conversation</h3>
                <p className="text-whisperwynd-medium-gray">
                  Chat naturally with our AI about your creative ideas. The intuitive interface makes developing your story feel like a conversation with a writing partner.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-whisperwynd-light-purple text-whisperwynd-purple mb-5">
                  <PenLine className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-whisperwynd-dark-gray mb-3 font-serif">3. Creation</h3>
                <p className="text-whisperwynd-medium-gray">
                  Turn your discussions into detailed character profiles, setting descriptions, plot outlines, and more with our AI-assisted creative tools.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team/Technology Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-whisperwynd-dark-gray font-serif mb-6">
                  Our Technology
                </h2>
                <p className="text-whisperwynd-medium-gray mb-4">
                  WhisperWynd is powered by cutting-edge natural language AI that's been specially trained on a diverse corpus of literature, storytelling guides, and creative writing.
                </p>
                <p className="text-whisperwynd-medium-gray mb-4">
                  We've fine-tuned our models to understand narrative structure, character development, world-building, and the emotional resonance that makes stories compelling.
                </p>
                <p className="text-whisperwynd-medium-gray">
                  Our system continuously learns and improves based on user interactions, becoming an ever more helpful creative partner.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-whisperwynd-dark-gray font-serif mb-6">
                  Built With
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-whisperwynd-purple">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <p className="ml-3 text-whisperwynd-medium-gray">
                      <span className="font-medium text-whisperwynd-dark-gray">React</span> - 
                      For building responsive and interactive user interfaces
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-whisperwynd-purple">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <p className="ml-3 text-whisperwynd-medium-gray">
                      <span className="font-medium text-whisperwynd-dark-gray">FastAPI</span> - 
                      High-performance web framework for building APIs
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-whisperwynd-purple">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <p className="ml-3 text-whisperwynd-medium-gray">
                      <span className="font-medium text-whisperwynd-dark-gray">PostgreSQL</span> - 
                      Advanced open source database for reliable data storage
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-whisperwynd-purple">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <p className="ml-3 text-whisperwynd-medium-gray">
                      <span className="font-medium text-whisperwynd-dark-gray">AI Models</span> - 
                      Custom-trained language models for creative storytelling assistance
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;