
import { useState } from 'react';
import Logo from './Logo';
import BookingForm from './BookingForm';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const Header = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

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
                  className="text-white/90 hover:text-white data-[state=active]:bg-transparent data-[state=active]:border-b data-[state=active]:border-white data-[state=active]:rounded-none data-[state=active]:shadow-none px-2 py-1"
                >
                  About Me
                </TabsTrigger>
              </TabsList>
            </Tabs>
            
            <button
              onClick={() => setIsFormOpen(true)}
              className="font-helvetica font-normal text-white text-sm px-6 py-2 border border-white/20 hover:bg-white/10 transition-all duration-300"
            >
              Book a Talk
            </button>
          </div>
        </div>
      </header>

      {isFormOpen && <BookingForm onClose={() => setIsFormOpen(false)} />}
    </>
  );
};

export default Header;
