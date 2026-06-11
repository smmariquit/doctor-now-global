// doctor-now-global-ui/src/pages/FAQ.jsx

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/639696031992";

const WhatsAppIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.347 2.428-.691c.979.58 2.019.897 3.033.897h.004c3.181 0 5.767-2.586 5.768-5.766.001-3.18-2.585-5.766-5.768-5.766zm6.812 11.233c-1.637 1.638-3.923 2.652-6.425 2.655-2.203.003-4.332-.78-6.14-2.264l-4.28 1.218 1.261-4.062c-1.396-1.921-2.071-4.148-2.07-6.398.005-5.889 4.805-10.681 10.707-10.678 5.894.004 10.694 4.805 10.697 10.695.003 2.502-1.011 4.793-2.65 6.432z"/>
  </svg>
);

const faqs = [
  {
    question: "Who are the doctors?",
    answer: "All our physicians are licensed by the Philippine Professional Regulation Commission (PRC) and have been verified for their credentials. They are experienced in telehealth consultations and fluent in English."
  },
  {
    question: "Is this service legal in the Philippines?",
    answer: "Yes. Telemedicine is legal and regulated in the Philippines under the Department of Health guidelines. Our doctors are authorized to conduct remote consultations and issue valid prescriptions and medical certificates."
  },
  {
    question: "What conditions can you treat?",
    answer: "We can help with a wide range of non-emergency conditions including cold and flu symptoms, allergies, skin conditions, digestive issues, urinary tract infections, minor injuries, mental health concerns, and chronic condition management. For emergencies, please go to the nearest hospital."
  },
  {
    question: "How do I pay?",
    answer: "We accept GCash, bank transfer, and major credit cards. Payment details will be provided during your consultation. The consultation fee is ₱2,000 and includes your medical assessment, digital prescription (if needed), and medical certificate (if applicable)."
  },
  {
    question: "Are prescriptions valid at pharmacies?",
    answer: "Yes. Our digital prescriptions are legally valid at any pharmacy in the Philippines. Simply show the prescription we send you via WhatsApp to your pharmacist."
  },
  {
    question: "Can I get a medical certificate for work?",
    answer: "Absolutely. If medically appropriate, our doctors can issue official medical certificates for work, school, or travel purposes. This is included in the consultation fee."
  },
  {
    question: "How quickly will I get a response?",
    answer: "Most patients are connected with a doctor within 5-10 minutes during operating hours. We aim to respond to all messages as quickly as possible."
  },
  {
    question: "What if I need lab tests or imaging?",
    answer: "Our doctors can generate lab requests and referrals to diagnostic centers and specialists. We'll guide you on where to go and what tests you need."
  },
  {
    question: "Is my information kept private?",
    answer: "Yes. All consultations are conducted via WhatsApp's end-to-end encrypted messaging. We adhere to strict confidentiality standards and never share your medical information without your consent."
  },
  {
    question: "What languages do you support?",
    answer: "Our doctors are fluent in English and Filipino. We specialize in serving the foreign community in the Philippines, so clear English communication is our priority."
  },
  {
    question: "Can I get a follow-up consultation?",
    answer: "Yes. We encourage follow-up consultations for ongoing conditions. Each follow-up is charged at the same rate, but we offer package deals for patients requiring multiple consultations."
  },
  {
    question: "What if it's an emergency?",
    answer: "For medical emergencies, please call 911 or go to the nearest emergency room immediately. Our service is designed for non-emergency consultations only."
  }
];

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-slate-100 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors px-2 rounded-lg"
      >
        <span className="text-lg font-semibold text-slate-900 pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-indigo-600 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="pb-6 px-2">
          <p className="text-slate-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-indigo-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
            Got questions? We've got answers. If you don't find what you're looking for, 
            feel free to reach out to us directly.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
            {faqs.map((faq, idx) => (
              <FAQItem
                key={idx}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === idx}
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Still Have Questions?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Our team is here to help. Send us a message and we'll get back to you as soon as possible.
          </p>
          <a 
            href={WHATSAPP_LINK} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-emerald-500 rounded-full hover:bg-emerald-600 transition-all shadow-sm"
          >
            <WhatsAppIcon className="w-5 h-5 mr-2" />
            Message Us on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
