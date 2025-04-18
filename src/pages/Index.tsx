import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { BookOpen, Sparkles, MessagesSquare, PenLine } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-whisperwynd-purple" />,
      title: 'Interactive Stories',
      description: 'Explore magical tales that respond and adapt to your input, creating a truly personalized adventure.',
    },
    {
      icon: <Sparkles className="h-8 w-8 text-whisperwynd-purple" />,
      title: 'AI-Powered Creativity',
      description: 'Our advanced AI assists in character development and story creation, enhancing your creative experience.',
    },
    {
      icon: <MessagesSquare className="h-8 w-8 text-whisperwynd-purple" />,
      title: 'Conversational Interface',
      description: 'Chat naturally with our AI to develop characters, explore story possibilities, or get creative assistance.',
    },
    {
      icon: <PenLine className="h-8 w-8 text-whisperwynd-purple" />,
      title: 'Character Development',
      description: 'Create and evolve unique characters with detailed backgrounds, personalities, and journeys.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <HeroSection
          title="Unlock Your Imagination"
          description="Discover WhisperWynd, where AI-powered storytelling brings your characters and narratives to life. Chat with our AI assistant to develop characters, explore magical realms, and create enchanting stories."
          ctaText="Start Creating"
          ctaLink="/register"
          secondaryText="Learn More"
          secondaryLink="/about"
        />
        
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-whisperwynd-dark-gray font-serif">
                Enhance Your Storytelling Experience
              </h2>
              <p className="mt-4 text-lg text-whisperwynd-medium-gray max-w-3xl mx-auto">
                WhisperWynd combines advanced AI with creative tools to help you craft immersive stories and develop compelling characters.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-whisperwynd-gray hover:border-whisperwynd-purple/50 transition-colors duration-300">
                  <CardHeader className="pb-2">
                    <div className="mb-4">{feature.icon}</div>
                    <CardTitle className="text-xl font-serif">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-whisperwynd-medium-gray">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonial Section */}
        <section className="py-16 bg-whisperwynd-light-purple">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-whisperwynd-dark-gray font-serif">
                What Our Users Say
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <Card key={item} className="bg-white border-none shadow-sm">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-whisperwynd-medium-gray text-center mb-6">
                      "WhisperWynd has transformed my creative writing process. The AI assistant feels like a collaborative partner, helping me develop characters I never would have imagined on my own."
                    </p>
                    <div className="text-center">
                      <p className="font-medium text-whisperwynd-dark-gray">Creative Writer</p>
                      <p className="text-sm text-whisperwynd-medium-gray">WhisperWynd User</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-whisperwynd-purple/90 to-whisperwynd-purple">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white font-serif">
              Begin Your Magical Journey Today
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Join our community of storytellers and bring your characters to life with the help of our AI assistant.
            </p>
            <div className="mt-8">
              <a 
                href="/register" 
                className="inline-block bg-white text-whisperwynd-purple px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors"
              >
                Create Your Account
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;