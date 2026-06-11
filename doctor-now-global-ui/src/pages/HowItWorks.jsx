// doctor-now-global-ui/src/pages/HowItWorks.jsx

import React from 'react';
import { 
  MessageCircle, 
  UserCheck, 
  Heart,
  CheckCircle2,
  Clock,
  Shield,
  Smartphone
} from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/639696031992";

const WhatsAppIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.347 2.428-.691c.979.58 2.019.897 3.033.897h.004c3.181 0 5.767-2.586 5.768-5.766.001-3.18-2.585-5.766-5.768-5.766zm6.812 11.233c-1.637 1.638-3.923 2.652-6.425 2.655-2.203.003-4.332-.78-6.14-2.264l-4.28 1.218 1.261-4.062c-1.396-1.921-2.071-4.148-2.07-6.398.005-5.889 4.805-10.681 10.707-10.678 5.894.004 10.694 4.805 10.697 10.695.003 2.502-1.011 4.793-2.65 6.432z"/>
  </svg>
);

export default function HowItWorks() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-indigo-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">How It Works</h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
            Getting quality healthcare shouldn't be complicated. We've made it simple — 
            just three easy steps to connect with a licensed doctor.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-slate-100 z-0"></div>
            
            <div className="grid md:grid-cols-3 gap-12 relative z-10">
              {[
                { 
                  step: 1, 
                  title: "Message us on WhatsApp", 
                  desc: "Tell us what you're feeling — no forms, no hassle. Just send a message describing your symptoms or concerns.", 
                  icon: <MessageCircle className="w-8 h-8" />,
                  details: [
                    "Available 24/7",
                    "No account needed",
                    "Describe symptoms in your own words"
                  ]
                },
                { 
                  step: 2, 
                  title: "Get Matched in 5-10 mins", 
                  desc: "A licensed, English-speaking Filipino physician joins the chat and begins your consultation.", 
                  icon: <UserCheck className="w-8 h-8" />,
                  details: [
                    "Verified licensed doctors",
                    "Fluent English speakers",
                    "Immediate response"
                  ]
                },
                { 
                  step: 3, 
                  title: "Receive Care Instantly", 
                  desc: "Get medical guidance, prescriptions, referrals, or certificates — delivered right to your chat.", 
                  icon: <Heart className="w-8 h-8" />,
                  details: [
                    "Digital prescriptions",
                    "Medical certificates",
                    "Specialist referrals if needed"
                  ]
                }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center bg-white">
                  <div className="w-24 h-24 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center mb-6 shadow-lg">
                    <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white">
                      {item.icon}
                    </div>
                  </div>
                  <div className="bg-indigo-600 text-white text-sm font-bold px-4 py-1 rounded-full mb-4">
                    Step {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">{item.title}</h3>
                  <p className="text-slate-600 text-center mb-6 max-w-xs">{item.desc}</p>
                  <ul className="space-y-2">
                    {item.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why WhatsApp Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why WhatsApp?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We chose WhatsApp because it's the easiest, most accessible way to connect — no apps to download, no accounts to create.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Smartphone className="w-6 h-6" />, 
                title: "Already on Your Phone", 
                desc: "No new apps to download. Use the messaging app you already know and trust." 
              },
              { 
                icon: <Shield className="w-6 h-6" />, 
                title: "End-to-End Encrypted", 
                desc: "Your medical conversations stay private and secure with WhatsApp's encryption." 
              },
              { 
                icon: <Clock className="w-6 h-6" />, 
                title: "Instant & Convenient", 
                desc: "Message us anytime, anywhere. Get responses within minutes, not hours." 
              }
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-900 py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-indigo-200 mb-10">
            It only takes a minute to connect with a licensed doctor.
          </p>
          <a 
            href={WHATSAPP_LINK} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-8 py-4 text-lg font-bold text-slate-900 transition-all duration-200 bg-emerald-400 rounded-full hover:bg-emerald-300 shadow-lg hover:shadow-emerald-400/20"
          >
            <WhatsAppIcon className="w-6 h-6 mr-2" />
            Start Your Consultation
          </a>
        </div>
      </section>
    </>
  );
}
