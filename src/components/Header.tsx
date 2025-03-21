
import { useState } from 'react';
import Logo from './Logo';
import BookingForm from './BookingForm';

const Header = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Logo />
          <button
            onClick={() => setIsFormOpen(true)}
            className="font-helvetica font-normal text-white text-sm px-6 py-2 border border-white/20 hover:bg-white/10 transition-all duration-300"
          >
            Book a Talk
          </button>
        </div>
      </header>

      {isFormOpen && <BookingForm onClose={() => setIsFormOpen(false)} />}
    </>
  );
};

export default Header;
