
import { useState } from 'react';
import Logo from './Logo';
import BookingForm from './BookingForm';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { AspectRatio } from './ui/aspect-ratio';
import { Mail } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleAboutClick = () => {
    setIsAboutOpen(true);
    setActiveTab('about');
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Logo />
          
          <div className="flex items-center gap-6">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="border-none"
            >
              <TabsList className="bg-transparent p-0 h-auto">
                <TabsTrigger 
                  value="about" 
                  onClick={handleAboutClick}
                  className="text-white hover:text-white data-[state=active]:text-white data-[state=active]:bg-transparent data-[state=active]:shadow-none px-2 py-1 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white after:bottom-0 after:left-0 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  About Me
                </TabsTrigger>
              </TabsList>
            </Tabs>
            
            {isMobile ? (
              <button
                onClick={() => setIsFormOpen(true)}
                className="text-white p-2 hover:bg-white/10 transition-all duration-300 rounded-full"
                aria-label="Book a Talk"
              >
                <Mail size={24} />
              </button>
            ) : (
              <button
                onClick={() => setIsFormOpen(true)}
                className="font-helvetica font-normal text-white text-sm px-6 py-2 border border-white/20 hover:bg-white/10 transition-all duration-300"
              >
                Book a Talk
              </button>
            )}
          </div>
        </div>
      </header>

      {/* About Me Dialog */}
      <Dialog open={isAboutOpen} onOpenChange={setIsAboutOpen}>
        <DialogContent className="max-w-3xl p-0 overflow-auto max-h-[90vh]">
          <div className="p-6 md:p-8">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-2xl md:text-3xl font-helvetica font-bold tracking-wide">
                ABOUT ME
              </DialogTitle>
            </DialogHeader>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center md:items-start">
                <div className="w-full md:w-48 h-auto overflow-hidden rounded-md">
                  <AspectRatio ratio={4/3} className="bg-muted">
                    <img 
                      src="/lovable-uploads/29d21dc0-c6c4-4c46-aad0-ec6942d83dc8.png" 
                      alt="Hervé Larren"
                      className="object-cover w-full h-full" 
                    />
                  </AspectRatio>
                </div>
              </div>
              
              <div className="col-span-1 md:col-span-2 space-y-6 font-helvetica">
                <p className="text-base leading-relaxed">
                  <strong>Hervé Larren</strong> is the Founder and CEO of Airvey.io, an enterprise that builds, supports, and advises Web 3.0 companies. A Bitcoin and blockchain adopter since 2013, Mr. Larren became one of the first crypto miners in the US before listing the proceeds in public vehicles with Grayscale. He has advised over a dozen projects, including Horizen Labs and the creation of Yuga Labs' ApeCoin (valued at $8 billion at launch), Decentraland and the creation of the largest commercial zone in the Metaverse, and the Horizen ZEN token (ATH: $1.3 billion).
                </p>
                
                <p className="text-base leading-relaxed">
                  Mr. Larren has been profiled in publications such as CoinTelegraph, Forbes, Bloomberg Magazine, American Express Spotlight Series, and The Huffington Post, as well as making TV appearances on Bloomberg, KTLA, and E! News. He is a renowned figure on the international speaker circuit, having spoken at over 30 conferences in 10 countries.
                </p>
                
                <p className="text-base leading-relaxed">
                  Before founding his companies, Mr. Larren worked at LVMH and Pernod Ricard. Mr. Larren is an alumnus of the Harvard Business School Presidents' Program and holds an MBA from Columbia Business School. He is a member of the Young Presidents' Organization (YPO).
                </p>
              </div>
            </div>
            
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setIsAboutOpen(false)}
                className="font-helvetica px-6 py-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {isFormOpen && <BookingForm onClose={() => setIsFormOpen(false)} />}
    </>
  );
};

export default Header;
