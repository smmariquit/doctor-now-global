import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { 
  Globe, 
  Menu, 
  X, 
  ShieldCheck, 
  Clock, 
  UserCheck, 
  FileText, 
  Heart, 
  Stethoscope, 
  Pill, 
  Building2, 
  Microscope, 
  CreditCard, 
  CheckCircle2, 
  MessageCircle, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/12232137013";

const BrandLogo = ({ className }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    
    <circle cx="50" cy="50" r="48" fill="#2563EB" />
    
    <path d="M50 2C50 2 25 25 25 50C25 75 50 98 50 98" stroke="white" strokeWidth="1.5" strokeOpacity="0.3" fill="none"/>
    <path d="M50 2C50 2 75 25 75 50C75 75 50 98 50 98" stroke="white" strokeWidth="1.5" strokeOpacity="0.3" fill="none"/>
    <line x1="2" y1="50" x2="98" y2="50" stroke="white" strokeWidth="1.5" strokeOpacity="0.3" />
    <line x1="15" y1="30" x2="85" y2="30" stroke="white" strokeWidth="1.5" strokeOpacity="0.3" />
    <line x1="15" y1="70" x2="85" y2="70" stroke="white" strokeWidth="1.5" strokeOpacity="0.3" />
    
    <path 
      d="M38 25H62V41H78V65H62V81H38V65H22V41H38V25Z" 
      fill="white" 
      stroke="#2563EB" 
      strokeWidth="2"
    />
  </svg>
);

const WhatsAppIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.347 2.428-.691c.979.58 2.019.897 3.033.897h.004c3.181 0 5.767-2.586 5.768-5.766.001-3.18-2.585-5.766-5.768-5.766zm6.812 11.233c-1.637 1.638-3.923 2.652-6.425 2.655-2.203.003-4.332-.78-6.14-2.264l-4.28 1.218 1.261-4.062c-1.396-1.921-2.071-4.148-2.07-6.398.005-5.889 4.805-10.681 10.707-10.678 5.894.004 10.694 4.805 10.697 10.695.003 2.502-1.011 4.793-2.65 6.432zm-12.046-2.163c.184.329.544.516.92.516.273 0 .53-.102.736-.312l1.696-1.748c.171-.176.242-.426.195-.667-.047-.24-.207-.442-.424-.551-.625-.312-1.124-.764-1.464-1.334-.339-.57-.468-1.22-.381-1.905.047-.367.33-.666.697-.714.368-.048.718.156.887.493.169.336.31.687.426 1.045.109.337.422.566.776.566.079 0 .158-.011.235-.034.428-.124.675-.568.55-1.002-.129-.444-.296-.874-.499-1.285-.203-.41-.532-.716-.94-.888-1.354-.572-2.903-.186-3.837 1.056l-.506.702c-.75 1.043-.902 2.392-.416 3.655.485 1.262 1.558 2.219 2.916 2.618l.433.125z"/>
  </svg>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  

  return (
    <div className="font-sans text-slate-800 bg-white min-h-screen">
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-full">
                <BrandLogo className="h-10 w-10" />
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">DOCTOR NOW GLOBAL</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Services</a>
              <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">How It Works</a>
              <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">FAQ</a>
              <a href="/about" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">About Us</a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-emerald-500 hover:bg-emerald-600 transition-all shadow-sm hover:shadow-md"
              >
                Get Care Now
              </a>
            </div>

            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-slate-600 hover:text-slate-900 focus:outline-none">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100">
            <div className="px-4 pt-2 pb-4 space-y-1">
              <a href="#services" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50">Services</a>
              <a href="#how-it-works" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50">How It Works</a>
              <a href="#faq" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50">FAQ</a>
              <a href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50">About Us</a>
              <div className="pt-4">
                 <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-5 py-3 rounded-lg text-white bg-emerald-500 hover:bg-emerald-600 font-medium"
                >
                  Connect on WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      <main>
        <Outlet />
      </main>
      
          <footer className="border-t border-slate-100 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                  <div className="bg-white rounded-full">
                    <BrandLogo className="h-8 w-8" />
                  </div>
                  <span className="text-sm font-semibold text-slate-900 tracking-tight">DOCTOR NOW GLOBAL</span>
                </div>
                <div className="text-sm text-slate-600">
                  © {new Date().getFullYear()} Doctor Now Global. All rights reserved.
                </div>
              </div>
            </div>
          </footer>
            
      </div>);}