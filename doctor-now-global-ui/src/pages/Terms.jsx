// doctor-now-global-ui/src/pages/Terms.jsx

import React from 'react';

const Terms = () => {
  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen">
      <header className="bg-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
          <p className="mt-4 text-indigo-100 max-w-2xl">Last updated: July 4, 2026</p>
        </div>
      </header>
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-slate-700 leading-relaxed">
          <p>By using Doctor Now Global, you agree to these terms.</p>
          <h2 className="text-xl font-semibold text-slate-900 pt-4">Medical services</h2>
          <p>
            Telehealth consultations are provided by licensed physicians. This platform does not replace
            emergency care — call local emergency services for urgent medical emergencies.
          </p>
          <h2 className="text-xl font-semibold text-slate-900 pt-4">No warranty</h2>
          <p>The website and booking flow are provided <em>as is</em> without warranty.</p>
          <h2 className="text-xl font-semibold text-slate-900 pt-4">Contact</h2>
          <p>Questions: reach us via the WhatsApp link on our homepage.</p>
        </div>
      </section>
    </div>
  );
};

export default Terms;
