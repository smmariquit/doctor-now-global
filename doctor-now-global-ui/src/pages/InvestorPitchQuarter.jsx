import React from 'react';
import {
    Stethoscope,
    TrendingUp,
    Zap,
    Users,
    Star,
    ArrowRight,
    Target,
    Smartphone,
    MessageCircle,
    Globe,
    Briefcase,
    CreditCard,
    CheckCircle,
    DollarSign,
    PieChart,
    Rocket,
} from 'lucide-react';

const PitchSection = () => (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
            <div className="flex items-center gap-2 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center text-white">
                    <Stethoscope size={24} />
                </div>
                <span className="text-2xl font-bold tracking-tight text-slate-900">E-Konsulta®</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
                        Fast, Reliable, & <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-emerald-500">Human-Centric.</span>
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed mb-8">
                        Delivering <strong>&lt;1-hour medical care</strong> nationwide across <strong>30+ specialties</strong>. Trusted by 50,000+ patients with over 1,000 5-star reviews.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full text-sm font-semibold text-slate-700">
                            <Users size={16} className="text-blue-500" /> 50,000+ Patients
                        </div>
                        <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full text-sm font-semibold text-slate-700">
                            <Star size={16} className="text-yellow-500" /> 1,000+ 5-Star Reviews
                        </div>
                        <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full text-sm font-semibold text-slate-700">
                            <Globe size={16} className="text-teal-500" /> Nationwide Coverage
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-3xl shadow-2xl shadow-blue-900/10 p-8 border border-slate-100">
                    <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                        <CreditCard size={20} className="text-blue-600" />
                        Unit Economics & Monetization
                    </h3>

                    <div className="mb-8">
                        <div className="flex justify-between text-sm text-slate-500 mb-2">
                            <span>Base Revenue</span>
                            <span>Target Revenue</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="text-3xl font-bold text-slate-400">₱350</div>
                            <ArrowRight className="text-slate-300" />
                            <div className="text-4xl font-extrabold text-blue-600">₱650</div>
                        </div>
                        <div className="flex gap-2 mt-3">
                            <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full">+₱100 Labs</span>
                            <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full">+₱100 Pharmacy</span>
                            <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full">+₱100 Pricing</span>
                        </div>
                    </div>

                    <hr className="border-slate-100 my-6" />

                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-slate-600 font-medium">Customer Acquisition Cost (CAC)</span>
                            <span className="text-lg font-bold text-slate-900">₱100</span>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-xl">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Consultation Pricing Mix</p>
                            <div className="grid grid-cols-3 gap-2 text-center">
                                <div className="bg-white p-2 rounded-lg shadow-sm">
                                    <div className="text-blue-600 font-bold">₱2.5k</div>
                                    <div className="text-[10px] text-slate-500">Psych</div>
                                </div>
                                <div className="bg-white p-2 rounded-lg shadow-sm">
                                    <div className="text-blue-600 font-bold">₱1.5k</div>
                                    <div className="text-[10px] text-slate-500">Specialist</div>
                                </div>
                                <div className="bg-white p-2 rounded-lg shadow-sm">
                                    <div className="text-blue-600 font-bold">₱500</div>
                                    <div className="text-[10px] text-slate-500">GP</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const GrowthSection = () => {
    const projections = [
        { month: 'Q1 2026', patients: 600, arpu: 583, rev: 350, exp: 120, profit: 230 },
        { month: 'Q2 2026', patients: 780, arpu: 683, rev: 533, exp: 195, profit: 338 },
        { month: 'Q3 2026', patients: 1014, arpu: 783, rev: 794, exp: 304, profit: 490 },
        { month: 'Q4 2026', patients: 1318, arpu: 883, rev: 1164, exp: 461, profit: 703 },
        { month: 'Q1 2027', patients: 1713, arpu: 983, rev: 1684, exp: 685, profit: 999 },
        { month: 'Q2 2027', patients: 2227, arpu: 1083, rev: 2413, exp: 1002, profit: 1411 },
    ];

    return (
        <section className="min-h-screen bg-slate-900 text-white py-20 px-6 flex flex-col justify-center">
            <div className="max-w-7xl mx-auto w-full">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
                            <TrendingUp className="text-green-400" /> Growth Trajectory
                        </h2>
                        <p className="text-slate-400">Path to Profitability & Scale</p>
                    </div>
                    <div className="text-right mt-6 md:mt-0">
                        <div className="text-4xl font-bold text-green-400">30% per Quarter</div>
                        <div className="text-sm text-slate-400">Compounding Growth Rate</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                        <div className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">Monthly Patients</div>
                        <div className="text-3xl font-bold text-white">2,227</div>
                        <div className="text-green-400 text-xs mt-2 font-bold">Q2 2027 Projection</div>
                    </div>
                    <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                        <div className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">Monthly Revenue</div>
                        <div className="text-3xl font-bold text-white">₱2,413k</div>
                        <div className="text-green-400 text-xs mt-2 font-bold">ARPU ₱583 → ₱1,083</div>
                    </div>
                    <div className="bg-slate-800 p-6 rounded-2xl border border-green-900/50 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-green-500 blur-3xl opacity-20"></div>
                        <div className="text-green-400 text-sm font-medium uppercase tracking-wider mb-1">Projected Profit (CM3)</div>
                        <div className="text-3xl font-bold text-white">₱1,411k</div>
                        <div className="text-slate-400 text-xs mt-2">58% Margin</div>
                    </div>
                </div>

                <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-700/50 text-slate-300 text-sm">
                                    <th className="p-4 font-semibold">Quarter</th>
                                    <th className="p-4 font-semibold">Patients</th>
                                    <th className="p-4 font-semibold">ARPU</th>
                                    <th className="p-4 font-semibold text-right">Revenue (k)</th>
                                    <th className="p-4 font-semibold text-right">Expense (k)</th>
                                    <th className="p-4 font-bold text-green-400 text-right">Profit (k)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                {projections.map((row) => (
                                    <tr key={row.month} className="hover:bg-slate-700/30 transition-colors">
                                        <td className="p-4 font-medium text-white">{row.month}</td>
                                        <td className="p-4 text-slate-300">{row.patients}</td>
                                        <td className="p-4 text-slate-300">₱{row.arpu}</td>
                                        <td className="p-4 text-right text-slate-300">₱{row.rev}</td>
                                        <td className="p-4 text-right text-slate-400">₱{row.exp}</td>
                                        <td className="p-4 text-right font-bold text-green-400 bg-green-900/10">₱{row.profit}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

const TacticsSection = () => (
    <section className="min-h-screen bg-slate-50 py-20 px-6 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full">
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4">Strategic Roadmap</div>
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Go-to-Market & Expansion</h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">From stabilizing our core channels to unlocking exponential growth through B2B and recurring revenue models.</p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8">
                <div className="lg:col-span-4 space-y-6">
                    <h3 className="text-lg font-bold text-slate-800 border-b border-slate-200 pb-2">Current Channels</h3>

                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                        <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                            <Globe size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900">Paid Acquisition</h4>
                            <p className="text-sm text-slate-500 mt-1">Meta & Google Ads optimization yielding consistent MQLs.</p>
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                        <div className="bg-pink-100 p-2 rounded-lg text-pink-600">
                            <Smartphone size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900">Organic Content</h4>
                            <p className="text-sm text-slate-500 mt-1">Patient testimonials & Doctor-led educational content driving trust.</p>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-8">
                    <h3 className="text-lg font-bold text-slate-800 border-b border-slate-200 pb-2 mb-6">Expansion Tactics</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="group bg-gradient-to-b from-white to-slate-50 hover:to-blue-50 p-6 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-lg">
                            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Briefcase size={24} />
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 mb-2">B2B2C</h4>
                            <p className="text-sm text-slate-600 leading-relaxed">Bulk recurring demand via ecosystem partners at <strong>near-zero CAC</strong></p>
                        </div>

                        <div className="group bg-gradient-to-b from-white to-slate-50 hover:to-teal-50 p-6 rounded-2xl border border-slate-200 hover:border-teal-300 transition-all duration-300 shadow-sm hover:shadow-lg">
                            <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Zap size={24} />
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Health Load</h4>
                            <p className="text-sm text-slate-600 leading-relaxed">Prepaid stored-value model. Improves <strong>retention</strong> and creates friction-less repeat booking experiences.</p>
                        </div>

                        <div className="group bg-gradient-to-b from-white to-slate-50 hover:to-purple-50 p-6 rounded-2xl border border-slate-200 hover:border-purple-300 transition-all duration-300 shadow-sm hover:shadow-lg">
                            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <MessageCircle size={24} />
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Unlimited Text</h4>
                            <p className="text-sm text-slate-600 leading-relaxed">Subscription model for chronic care. Delivers <strong>recurring stable revenue</strong> and higher LTV.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const FundingSection = () => (
    <section className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 py-20 px-6 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full">
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4">Investment Opportunity</div>
                <h2 className="text-4xl font-bold text-white mb-4">Funding & Valuation</h2>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto">Strategic capital allocation to accelerate growth and achieve 10x valuation in 18 months.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-2xl p-8 shadow-2xl border border-slate-200">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
                            <DollarSign size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">Funding Round</h3>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-slate-50 p-4 rounded-xl">
                            <div className="text-sm text-slate-500 mb-1">Investment Amount</div>
                            <div className="text-3xl font-bold text-slate-900">₱5M</div>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-xl">
                            <div className="text-sm text-slate-500 mb-1">Equity Stake</div>
                            <div className="text-3xl font-bold text-slate-900">10%</div>
                        </div>
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200">
                            <div className="text-sm text-green-700 mb-1">Pre-Money Valuation</div>
                            <div className="text-3xl font-bold text-green-700">₱50M</div>
                            <div className="text-xs text-green-600 mt-1">5M ARR × 10x Multiple</div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-2xl border border-slate-200">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                            <Rocket size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">Valuation Target</h3>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                            <div className="text-sm text-blue-700 mb-2">18-Month Projection</div>
                            <div className="text-4xl font-bold text-blue-700 mb-2">10x Growth</div>
                            <div className="text-2xl font-semibold text-blue-600">₱500M Valuation</div>
                            <div className="text-xs text-blue-600 mt-2">From ₱50M to ₱500M</div>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-xl">
                            <div className="text-sm text-slate-500 mb-1">Timeline</div>
                            <div className="text-xl font-bold text-slate-900">18 Months</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl border border-slate-200">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
                        <PieChart size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Capital Allocation</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                        <div className="flex items-center justify-between mb-4">
                            <div className="text-sm font-semibold text-blue-700 uppercase tracking-wider">Marketing</div>
                            <div className="text-2xl font-bold text-blue-700">40%</div>
                        </div>
                        <div className="text-2xl font-bold text-blue-900 mb-2">₱2.0M</div>
                        <div className="w-full bg-blue-200 rounded-full h-3">
                            <div className="bg-blue-600 h-3 rounded-full" style={{ width: '40%' }}></div>
                        </div>
                        <p className="text-sm text-blue-700 mt-3">Paid acquisition, content marketing, and brand building</p>
                    </div>

                    <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl border border-indigo-200">
                        <div className="flex items-center justify-between mb-4">
                            <div className="text-sm font-semibold text-indigo-700 uppercase tracking-wider">Technology</div>
                            <div className="text-2xl font-bold text-indigo-700">40%</div>
                        </div>
                        <div className="text-2xl font-bold text-indigo-900 mb-2">₱2.0M</div>
                        <div className="w-full bg-indigo-200 rounded-full h-3">
                            <div className="bg-indigo-600 h-3 rounded-full" style={{ width: '40%' }}></div>
                        </div>
                        <p className="text-sm text-indigo-700 mt-3">Platform development, infrastructure, and automation</p>
                    </div>

                    <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl border border-teal-200">
                        <div className="flex items-center justify-between mb-4">
                            <div className="text-sm font-semibold text-teal-700 uppercase tracking-wider">Customer Support</div>
                            <div className="text-2xl font-bold text-teal-700">20%</div>
                        </div>
                        <div className="text-2xl font-bold text-teal-900 mb-2">₱1.0M</div>
                        <div className="w-full bg-teal-200 rounded-full h-3">
                            <div className="bg-teal-600 h-3 rounded-full" style={{ width: '20%' }}></div>
                        </div>
                        <p className="text-sm text-teal-700 mt-3">Support team expansion and service excellence</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default function InvestorPitchPage() {
    return (
        <div className="antialiased font-sans bg-slate-50">
            <PitchSection />
            <GrowthSection />
            <TacticsSection />
            <FundingSection />
            <footer className="bg-slate-900 text-slate-500 py-8 text-center text-sm border-t border-slate-800">
                &copy; 2025 E-Konsulta Strategic Planning. Confidential.
            </footer>
        </div>
    );
}

