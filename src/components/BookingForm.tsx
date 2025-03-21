
import { useState } from 'react';
import { X } from 'lucide-react';
import { toast } from 'sonner';

interface BookingFormProps {
  onClose: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast.success('Your request has been submitted');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="absolute inset-0 bg-black/70" onClick={onClose}></div>
      <div className="relative form-overlay w-full max-w-md p-8 rounded animate-reveal">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-black hover:text-gray-700 transition-colors"
        >
          <X size={24} />
        </button>
        
        <h2 className="text-2xl font-helvetica mb-6">Book a Talk</h2>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border-b border-black/20 focus:border-black outline-none transition-colors"
            />
          </div>
          
          <div>
            <input
              type="text"
              name="company"
              placeholder="Company"
              required
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border-b border-black/20 focus:border-black outline-none transition-colors"
            />
          </div>
          
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border-b border-black/20 focus:border-black outline-none transition-colors"
            />
          </div>
          
          <div>
            <textarea
              name="message"
              placeholder="Message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border-b border-black/20 focus:border-black outline-none transition-colors resize-none"
            />
          </div>
          
          <button
            type="submit"
            className="w-full py-3 bg-black text-white font-helvetica text-sm hover:bg-black/90 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
