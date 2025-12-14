import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  UserCheck, 
  FileText, 
  Heart, 
  Stethoscope, 
  Pill, 
  Building2, 
  Microscope, 
  CheckCircle2, 
  MessageCircle 
} from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/12232137013";

const WhatsAppIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.347 2.428-.691c.979.58 2.019.897 3.033.897h.004c3.181 0 5.767-2.586 5.768-5.766.001-3.18-2.585-5.766-5.768-5.766zm6.812 11.233c-1.637 1.638-3.923 2.652-6.425 2.655-2.203.003-4.332-.78-6.14-2.264l-4.28 1.218 1.261-4.062c-1.396-1.921-2.071-4.148-2.07-6.398.005-5.889 4.805-10.681 10.707-10.678 5.894.004 10.694 4.805 10.697 10.695.003 2.502-1.011 4.793-2.65 6.432zm-12.046-2.163c.184.329.544.516.92.516.273 0 .53-.102.736-.312l1.696-1.748c.171-.176.242-.426.195-.667-.047-.24-.207-.442-.424-.551-.625-.312-1.124-.764-1.464-1.334-.339-.57-.468-1.22-.381-1.905.047-.367.33-.666.697-.714.368-.048.718.156.887.493.169.336.31.687.426 1.045.109.337.422.566.776.566.079 0 .158-.011.235-.034.428-.124.675-.568.55-1.002-.129-.444-.296-.874-.499-1.285-.203-.41-.532-.716-.94-.888-1.354-.572-2.903-.186-3.837 1.056l-.506.702c-.75 1.043-.902 2.392-.416 3.655.485 1.262 1.558 2.219 2.916 2.618l.433.125z"/>
  </svg>
);

export default function Home() {
  return (
    <>
      <section className="relative text-slate-900">
        <div className="absolute inset-0 bg-[url('/hero-image.jpg')] bg-center bg-cover" aria-hidden="true"></div>
        <div className="absolute inset-0 bg-white/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">Trusted Medical Care for Foreigners in the Philippines—In Minutes, Not Hours.</h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">Living abroad shouldn’t mean navigating confusing systems, unfamiliar medications, or language barriers when you’re not feeling well.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-emerald-600 rounded-md hover:bg-emerald-700">
              <WhatsAppIcon className="w-5 h-5 mr-2 text-white" />
              Talk to a licensed Filipino doctor now
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="mx-auto w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck className="h-6 w-6 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">How Doctor Now Is Different</h2>
            <p className="text-lg text-slate-600 leading-relaxed">Living abroad shouldn't mean struggling to find care you trust. The first person you speak to is a certified doctor — fast, easy, and in clear English — so you can feel safe, supported, and cared for.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {[
              { icon: <Clock className="h-6 w-6 text-emerald-500" />, title: "Instant Consultations", desc: "No queues. No travel. No waiting rooms. Just fast access to a real doctor who listens." },
              { icon: <UserCheck className="h-6 w-6 text-emerald-500" />, title: "English-Speaking Physicians", desc: "Clear communication, no misunderstandings, and care that feels familiar — just like back home." },
              { icon: <FileText className="h-6 w-6 text-emerald-500" />, title: "Valid Documents", desc: "Receive the documents you need for medication, work, travel, or specialist care." },
              { icon: <Heart className="h-6 w-6 text-emerald-500" />, title: "Warm, Human Support", desc: "Compassionate, respectful, and patient-focused care that treats you like a person, not a number." }
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-6 p-6 rounded-2xl bg-white shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center">{feature.icon}</div>
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

      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-indigo-600 font-semibold tracking-wider uppercase text-sm">Comprehensive Care</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Our Medical Services</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Stethoscope className="w-8 h-8" />, title: "Medical Consultations", desc: "General health concerns, symptoms, medication questions, and follow-ups." },
              { icon: <Pill className="w-8 h-8" />, title: "Valid Prescriptions", desc: "Get prescriptions issued legally and securely by licensed Philippine doctors." },
              { icon: <Building2 className="w-8 h-8" />, title: "Specialist Referrals", desc: "Need imaging or a specialist? We guide you to the right facilities." },
              { icon: <FileText className="w-8 h-8" />, title: "Medical Certificates", desc: "Official documentation for work, school, travel, or insurance needs." },
              { icon: <Microscope className="w-8 h-8" />, title: "Lab Requests", desc: "We generate the specific lab requests you need to get tested quickly." },
              { icon: <MessageCircle className="w-8 h-8" />, title: "Follow-up Care", desc: "Ongoing support for chronic conditions and health monitoring." }
            ].map((service, idx) => (
              <div key={idx} className="group p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl border border-transparent hover:border-indigo-100 transition-all duration-300">
                <div className="w-14 h-14 bg-white group-hover:bg-indigo-600 rounded-xl shadow-sm flex items-center justify-center text-indigo-600 group-hover:text-white transition-colors mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">A Better Healthcare Experience for Foreigners</h2>
              <p className="text-indigo-100 text-lg mb-8 leading-relaxed">We understand how stressful it can be to navigate a system that feels unfamiliar. That’s why we made everything simple, fast, and worry-free.</p>
              <ul className="space-y-4">
                {["No bureaucracy or confusing forms", "No bouncing from clinic to clinic", "Clear, reliable care in English"].map((item, idx) => (
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
                    <p className="text-lg italic text-indigo-50 mb-4">"Finally, a service that understands the expat context. Fast, professional, and exactly what I needed when I fell ill in Manila."</p>
                    <p className="font-bold text-white">— Sarah Jenkins, UK Expat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">How It Works</h2>
          <div className="relative">
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-slate-100 z-0"></div>
            <div className="grid md:grid-cols-3 gap-12 relative z-10">
              {[
                { step: 1, title: "Message us on WhatsApp", desc: "Tell us what you’re feeling — no forms, no hassle.", icon: <MessageCircle className="w-6 h-6" /> },
                { step: 2, title: "Get Matched (5-10 mins)", desc: "A licensed, English-speaking physician joins the chat.", icon: <UserCheck className="w-6 h-6" /> },
                { step: 3, title: "Receive Care Instantly", desc: "Guidance, prescriptions, referrals, or certificates — right away.", icon: <Heart className="w-6 h-6" /> }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center bg-white">
                  <div className="w-24 h-24 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center mb-6 shadow-sm">
                    <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white">{item.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 max-w-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-16">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-emerald-500 rounded-full hover:bg-emerald-600 shadow-lg hover:shadow-xl hover:-translate-y-1">Start Consultation</a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">What We Believe</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <ul className="space-y-4 text-lg text-slate-800">
              <li className="p-5 rounded-xl bg-slate-50 border border-slate-100">Medical care should start with a doctor — not a system</li>
              <li className="p-5 rounded-xl bg-slate-50 border border-slate-100">Speed matters when accessing care, not when making clinical decisions</li>
              <li className="p-5 rounded-xl bg-slate-50 border border-slate-100">Trust is more important than growth</li>
              <li className="p-5 rounded-xl bg-slate-50 border border-slate-100">Doctors are professionals, not throughput</li>
              <li className="p-5 rounded-xl bg-slate-50 border border-slate-100">Healthcare should be clear, calm, and human</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Transparent Pricing</h2>
          <p className="text-lg text-slate-600 mb-10">We believe in clarity. No surprise fees.</p>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
            <div className="bg-indigo-600 p-4 text-white text-sm font-bold tracking-widest uppercase">Flat Rate</div>
            <div className="p-10">
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-5xl font-extrabold text-slate-900">₱2,000</span>
                <span className="text-slate-500">/ consultation</span>
              </div>
              <p className="text-slate-600 mb-8">Includes medical assessment, digital prescription, and medical certificate if applicable.</p>
              <div className="flex flex-col gap-3 max-w-xs mx-auto text-left text-sm text-slate-600 mb-8">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /><span>Licensed Physician Review</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /><span>Digital Prescription (Rx)</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /><span>Medical Certificate</span></div>
              </div>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="block w-full py-3 px-6 rounded-lg bg-indigo-50 text-indigo-700 font-bold hover:bg-indigo-100 transition-colors">Book Appointment</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Your Doctor Is Just a Message Away</h2>
          <p className="text-xl text-slate-400 mb-10 font-light">Skip the queues. Skip the stress. Get fast, reliable care from English-speaking doctors.</p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-4 text-lg font-bold text-slate-900 transition-all duration-200 bg-emerald-400 rounded-full hover:bg-emerald-300 shadow-lg hover:shadow-emerald-400/20">
            <WhatsAppIcon className="w-6 h-6 mr-2" />
            Connect Now
          </a>
        </div>
      </section>
    </>
  );
}
