import React, { useState } from 'react';
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

// Custom Logo Component based on the user's uploaded image (Blue Globe with White Cross)
const BrandLogo = ({ className }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Globe Base */}
    <circle cx="50" cy="50" r="48" fill="#2563EB" />
    
    {/* Globe Grid Lines (Subtle) */}
    <path d="M50 2C50 2 25 25 25 50C25 75 50 98 50 98" stroke="white" strokeWidth="1.5" strokeOpacity="0.3" fill="none"/>
    <path d="M50 2C50 2 75 25 75 50C75 75 50 98 50 98" stroke="white" strokeWidth="1.5" strokeOpacity="0.3" fill="none"/>
    <line x1="2" y1="50" x2="98" y2="50" stroke="white" strokeWidth="1.5" strokeOpacity="0.3" />
    <line x1="15" y1="30" x2="85" y2="30" stroke="white" strokeWidth="1.5" strokeOpacity="0.3" />
    <line x1="15" y1="70" x2="85" y2="70" stroke="white" strokeWidth="1.5" strokeOpacity="0.3" />
    
    {/* Medical Cross (White) */}
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

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
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
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100">
            <div className="px-4 pt-2 pb-4 space-y-1">
              <a href="#services" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50">Services</a>
              <a href="#how-it-works" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50">How It Works</a>
              <a href="#faq" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50">FAQ</a>
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

      {/* Hero Section */}
      <section className="relative bg-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-indigo-800 to-blue-900 opacity-95"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 text-center">
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Connecting You to Care, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Instantly.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-indigo-100 mb-10 leading-relaxed font-light">
            Warm, reliable medical care designed for expats, retirees, and travelers who want fast, English-speaking support without the long queues or confusing processes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-emerald-500 rounded-full hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 focus:ring-offset-indigo-900 shadow-lg hover:shadow-emerald-500/30"
            >
              <WhatsAppIcon className="w-6 h-6 mr-2 text-white" />
              Talk to a doctor now.
              <span className="absolute -right-1 -top-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
            </a>
          </div>
        </div>
        
        {/* Curved bottom edge */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
            <svg className="relative block w-full h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-slate-50"></path>
            </svg>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="mx-auto w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck className="h-6 w-6 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Your Health, Without the Stress</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Living abroad shouldn't mean struggling to find care you trust. We help you speak directly with a certified doctor — fast, easy, and in clear English — so you can feel safe, supported, and cared for.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                icon: <Clock className="h-6 w-6 text-emerald-500" />,
                title: "Instant Consultations",
                desc: "No queues. No travel. No waiting rooms. Just fast access to a real doctor who listens."
              },
              {
                icon: <UserCheck className="h-6 w-6 text-emerald-500" />,
                title: "English-Speaking Physicians",
                desc: "Clear communication, no misunderstandings, and care that feels familiar — just like back home."
              },
              {
                icon: <FileText className="h-6 w-6 text-emerald-500" />,
                title: "Valid Documents",
                desc: "Receive the documents you need for medication, work, travel, or specialist care."
              },
              {
                icon: <Heart className="h-6 w-6 text-emerald-500" />,
                title: "Warm, Human Support",
                desc: "Compassionate, respectful, and patient-focused care that treats you like a person, not a number."
              }
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-6 p-6 rounded-2xl bg-white shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-indigo-600 font-semibold tracking-wider uppercase text-sm">Comprehensive Care</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Our Medical Services</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Stethoscope className="w-8 h-8" />, 
                title: "Medical Consultations", 
                desc: "General health concerns, symptoms, medication questions, and follow-ups." 
              },
              { 
                icon: <Pill className="w-8 h-8" />, 
                title: "Valid Prescriptions", 
                desc: "Get prescriptions issued legally and securely by licensed Philippine doctors." 
              },
              { 
                icon: <Building2 className="w-8 h-8" />, 
                title: "Specialist Referrals", 
                desc: "Need imaging or a specialist? We guide you to the right facilities." 
              },
              { 
                icon: <FileText className="w-8 h-8" />, 
                title: "Medical Certificates", 
                desc: "Official documentation for work, school, travel, or insurance needs." 
              },
              { 
                icon: <Microscope className="w-8 h-8" />, 
                title: "Lab Requests", 
                desc: "We generate the specific lab requests you need to get tested quickly." 
              },
              { 
                icon: <MessageCircle className="w-8 h-8" />, 
                title: "Follow-up Care", 
                desc: "Ongoing support for chronic conditions and health monitoring." 
              }
            ].map((service, idx) => (
              <div key={idx} className="group p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl border border-transparent hover:border-indigo-100 transition-all duration-300">
                <div className="w-14 h-14 bg-white group-hover:bg-indigo-600 rounded-xl shadow-sm flex items-center justify-center text-indigo-600 group-hover:text-white transition-colors mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points / Solution */}
      <section className="py-24 bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">A Better Healthcare Experience for Foreigners</h2>
              <p className="text-indigo-100 text-lg mb-8 leading-relaxed">
                We understand how stressful it can be to navigate a system that feels unfamiliar. That’s why we made everything simple, fast, and worry-free.
              </p>
              
              <ul className="space-y-4">
                {[
                  "No bureaucracy or confusing forms",
                  "No bouncing from clinic to clinic",
                  "Clear, reliable care in English"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-lg font-medium">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-600 rounded-2xl transform rotate-3 opacity-20"></div>
              <div className="relative bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-2xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-white">"</span>
                  </div>
                  <div>
                    <p className="text-lg italic text-indigo-50 mb-4">
                      "Finally, a service that understands the expat context. Fast, professional, and exactly what I needed when I fell ill in Manila."
                    </p>
                    <p className="font-bold text-white">— Sarah Jenkins, UK Expat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-16">How It Works</h2>
          
          <div className="relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-slate-100 z-0"></div>
            
            <div className="grid md:grid-cols-3 gap-12 relative z-10">
              {[
                { 
                  step: 1, 
                  title: "Message us on WhatsApp", 
                  desc: "Tell us what you’re feeling — no forms, no hassle.",
                  icon: <MessageCircle className="w-6 h-6" />
                },
                { 
                  step: 2, 
                  title: "Get Matched (5-10 mins)", 
                  desc: "A licensed, English-speaking physician joins the chat.",
                  icon: <UserCheck className="w-6 h-6" />
                },
                { 
                  step: 3, 
                  title: "Receive Care Instantly", 
                  desc: "Guidance, prescriptions, referrals, or certificates — right away.",
                  icon: <Heart className="w-6 h-6" />
                }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center bg-white">
                  <div className="w-24 h-24 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center mb-6 shadow-sm">
                    <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 max-w-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-emerald-500 rounded-full hover:bg-emerald-600 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Start Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Transparent Pricing</h2>
          <p className="text-lg text-slate-600 mb-10">We believe in clarity. No surprise fees.</p>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
            <div className="bg-indigo-600 p-4 text-white text-sm font-bold tracking-widest uppercase">
              Flat Rate
            </div>
            <div className="p-10">
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-5xl font-extrabold text-slate-900">₱2,000</span>
                <span className="text-slate-500">/ consultation</span>
              </div>
              <p className="text-slate-600 mb-8">Includes medical assessment, digital prescription, and medical certificate if applicable.</p>
              
              <div className="flex flex-col gap-3 max-w-xs mx-auto text-left text-sm text-slate-600 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Licensed Physician Review</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Digital Prescription (Rx)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Medical Certificate</span>
                </div>
              </div>

              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 px-6 rounded-lg bg-indigo-50 text-indigo-700 font-bold hover:bg-indigo-100 transition-colors"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "How fast can I talk to a doctor?", a: "Most patients are connected in 5–10 minutes during operating hours." },
              { q: "Are your doctors licensed?", a: "Yes — all doctors are certified, fully licensed in the Philippines, and specifically skilled in working with international patients." },
              { q: "Can you issue prescriptions and medical certificates?", a: "Absolutely. We provide Philippine-valid prescriptions, medical certificates, and referrals when medically appropriate." },
              { q: "Do you support foreigners long-term?", a: "Yes. Many expats use us as their go-to doctor for follow-ups, chronic care, medication refills, and ongoing health support." }
            ].map((faq, idx) => (
              <FaqItem key={idx} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-900 py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Your Doctor Is Just a Message Away</h2>
          <p className="text-xl text-slate-400 mb-10 font-light">
            Skip the queues. Skip the stress. Get fast, reliable care from English-speaking doctors.
          </p>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 text-lg font-bold text-slate-900 transition-all duration-200 bg-emerald-400 rounded-full hover:bg-emerald-300 shadow-lg hover:shadow-emerald-400/20"
          >
            <WhatsAppIcon className="w-6 h-6 mr-2" />
            Connect Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-12 text-center text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-6 text-slate-400 font-semibold">
            <BrandLogo className="w-6 h-6" />
            DOCTOR NOW GLOBAL
          </div>
          <p className="mb-4">&copy; {new Date().getFullYear()} Doctor Now Global. All rights reserved.</p>
          <p className="max-w-2xl mx-auto text-xs text-slate-600">
            Disclaimer: This service provides online consultations for non-emergency medical concerns. In case of a medical emergency, please contact local emergency services immediately.
          </p>
        </div>
      </footer>
    </div>
  );
};

// Simple FAQ Component helper
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-lg bg-white overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-5 text-left focus:outline-none hover:bg-slate-50"
      >
        <span className="font-semibold text-slate-900">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
      </button>
      {isOpen && (
        <div className="px-5 pb-5 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
          {answer}
        </div>
      )}
    </div>
  );
};

export default App;