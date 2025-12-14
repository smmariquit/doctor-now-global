import React from 'react';

const AboutUs = () => {
  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen">
      {/* Header */}
      <header className="bg-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
          <p className="mt-4 text-indigo-100 max-w-2xl">
            We exist to make safe, compassionate healthcare accessible to expats, retirees, and travelers—fast and in clear English.
          </p>
        </div>
      </header>

      {/* What We Believe */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">What We Believe</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Healthcare should be simple, human, and trustworthy—especially when youre far from home. We believe in meeting people where they are, listening first, and offering clear guidance that reduces stress and uncertainty.
            </p>
            <p>
              Our doctors are licensed in the Philippines and experienced in working with international patients. We prioritize clarity, empathy, and medical integrity in every interaction.
            </p>
            <p>
              Whether you need a quick consult, a valid prescription, or a referral, were here to make the process smooth, respectful, and reliable.
            </p>
          </div>
        </div>
      </section>

        {/* Footer moved to App layout to avoid duplicates */}
    </div>
  );
};

export default AboutUs;
