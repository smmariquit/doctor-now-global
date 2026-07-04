// doctor-now-global-ui/src/pages/Privacy.jsx

import React from 'react';

const Privacy = () => {
  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen">
      <header className="bg-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          <p className="mt-4 text-indigo-100 max-w-2xl">Last updated: July 4, 2026</p>
        </div>
      </header>
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-slate-700 leading-relaxed">
          <p>
            Doctor Now Global connects patients with licensed physicians for telehealth consultations.
            This policy describes how we handle information when you use our website and services.
          </p>
          <h2 className="text-xl font-semibold text-slate-900 pt-4">What we collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Contact details you provide (name, email, phone, WhatsApp).</li>
 <li>Health information shared during consultations: handled under applicable medical privacy rules.</li>
            <li>Payment and appointment metadata processed by our payment and scheduling providers.</li>
          </ul>
          <h2 className="text-xl font-semibold text-slate-900 pt-4">What we do not do</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>We do <strong>not</strong> sell your personal or health data.</li>
            <li>We do <strong>not</strong> use your data for third-party advertising.</li>
          </ul>
          <h2 className="text-xl font-semibold text-slate-900 pt-4">Contact</h2>
          <p>Questions: reach us via the WhatsApp link on our homepage.</p>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
