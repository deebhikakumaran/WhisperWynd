import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  secondaryText?: string;
  secondaryLink?: string;
  imageSrc?: string;
}

const HeroSection = ({
  title,
  description,
  ctaText,
  ctaLink,
  secondaryText,
  secondaryLink,
  imageSrc,
}: HeroSectionProps) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white to-whisperwynd-gray">
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-whisperwynd-light-purple rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-whisperwynd-blue rounded-full opacity-50 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <div className="text-center lg:text-left md:max-w-2xl md:mx-auto lg:mx-0">
              <h1 className="text-4xl tracking-tight font-bold text-whisperwynd-dark-gray sm:text-5xl md:text-6xl font-serif">
                {title}
              </h1>
              <p className="mt-6 text-base text-whisperwynd-medium-gray sm:text-lg md:text-xl">
                {description}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Button asChild className="bg-whisperwynd-purple hover:bg-whisperwynd-purple/90 text-white px-8 py-6">
                  <Link to={ctaLink} className="flex items-center">
                    {ctaText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                {secondaryText && secondaryLink && (
                  <Button asChild variant="outline" className="border-whisperwynd-purple text-whisperwynd-purple hover:bg-whisperwynd-light-purple px-8 py-6">
                    <Link to={secondaryLink}>
                      {secondaryText}
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {imageSrc ? (
                <img
                  className="w-full rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
                  src={imageSrc}
                  alt="WhisperWynd storytelling illustration"
                />
              ) : (
                <div className="w-full aspect-[4/3] rounded-lg bg-gradient-to-r from-whisperwynd-light-purple to-whisperwynd-blue flex items-center justify-center shadow-xl">
                  <div className="text-6xl text-white opacity-75 font-serif">W</div>
                </div>
              )}
              
              {/* Floating decorative elements */}
              <div className="absolute top-8 -left-8 w-20 h-20 bg-whisperwynd-purple rounded-lg shadow-lg transform -rotate-6 opacity-75"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-whisperwynd-blue rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;