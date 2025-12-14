import React, { useState } from 'react';
import {
    Activity,
    Shield,
    TrendingUp,
    Users,
    FileText,
    CheckCircle,
    Target,
    DollarSign,
    Briefcase,
    Stethoscope,
    LayoutGrid,
} from 'lucide-react';

const pillars = [
    {
        id: 1,
        title: 'Product Excellence',
        subtitle: 'Most Reliable Platform',
        icon: <CheckCircle className="w-8 h-8 text-emerald-500" />,
        metrics: ['bookedToConsulted > 90%', '< 1 hr bookingToPaid', '99% Uptime'],
        color: 'border-emerald-500 bg-emerald-50',
    },
    {
        id: 2,
        title: 'Hyper-focused Growth',
        subtitle: 'Scaling Profitably',
        icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
        metrics: ['>= 350 revenue/patient', '10% MoM growth', 'pNPS, dNPS > 95%'],
        color: 'border-blue-500 bg-blue-50',
    },
    {
        id: 3,
        title: 'Internal Stability',
        subtitle: 'Strong & Aligned Team',
        icon: <Shield className="w-8 h-8 text-indigo-500" />,
        metrics: ['mNPS, sNPS > 95%', '90% capability matrix done', '100% legal/financial readiness'],
        color: 'border-indigo-500 bg-indigo-50',
    },
];

const okrData = [
    { group: "Patient's Journey", objective: 'Ads / Lead Generation', pace: { P: 'Paula', A: 'Paula', C: 'Bianca', E: 'Marketing' }, krs: ['MQL Volume > 150 / shift', 'Cost per MQL'], pillar: 'Hyper-focused Growth' },
    { group: "Patient's Journey", objective: 'Brand', pace: { P: 'Elle', A: 'Paula', C: 'Paula', E: 'Elle' }, krs: ['Organic Growth / Month > 2%'], pillar: 'Product Excellence' },
    { group: "Patient's Journey", objective: 'Booking', pace: { P: 'Paula', A: 'Paula', C: '-', E: 'PCO' }, krs: ['Booked / Inquiry > 10%', 'timeToBook'], pillar: 'Product Excellence' },
    { group: "Patient's Journey", objective: 'Triage', pace: { P: 'Paula', A: 'Paula', C: '-', E: 'PCO' }, krs: ['Triage / Booked > 95%', 'timeToTriage'], pillar: 'Product Excellence' },
    { group: "Patient's Journey", objective: 'Endorsement', pace: { P: 'Rona', A: 'Rona', C: '-', E: 'PCO' }, krs: ['Endorsed / Triaged > 95%', 'timeToEndorsed', '0 unavailable doctor'], pillar: 'Product Excellence' },
    { group: "Patient's Journey", objective: 'Consultation', pace: { P: 'Rona', A: 'Rona', C: 'Doctors', E: 'PCO' }, krs: ['Consulted / Endorsed > 95%', 'timeToConsult'], pillar: 'Product Excellence' },
    { group: "Patient's Journey", objective: 'Payment', pace: { P: 'Joy', A: 'Jared', C: '-', E: 'PCO' }, krs: ['Payment Rate > 98%', 'timeToPaid'], pillar: 'Product Excellence' },
    { group: "Patient's Journey", objective: 'Document Release', pace: { P: 'Rona', A: 'Rona', C: '', E: 'PCO' }, krs: ['< 1 missing documents / month'], pillar: 'Product Excellence' },
    { group: "Patient's Journey", objective: 'Retention (Existing Sickness)', pace: { P: 'Rona', A: 'Rona', C: '-', E: 'PCO' }, krs: ['Endorsed / Docs_sent (rebookable) > x'], pillar: 'Hyper-focused Growth' },
    { group: "Patient's Journey", objective: 'Retention (Healed)', pace: { P: 'Paula', A: 'Paula', C: '-', E: 'PCO' }, krs: ['New CC count', 'Cost per newCC'], pillar: 'Product Excellence' },
    { group: "Doctor's Journey", objective: "Doctor's Onboarding", pace: { P: 'Jiro', A: 'Jiro', C: '-', E: 'Jiro' }, krs: ['timeToOnboard < 5 days'], pillar: 'Product Excellence' },
    { group: "Doctor's Journey", objective: 'Doctor NPS', pace: { P: 'Rona', A: 'Rona', C: 'Rona', E: 'Jiro' }, krs: ['dNPS > 9.5'], pillar: 'Product Excellence' },
    { group: "Doctor's Journey", objective: 'Doctor Shares', pace: { P: 'Joy', A: 'Jared', C: 'Rona', E: 'Finance' }, krs: ['onTime', '< 1 doctor escalation / cutoff'], pillar: 'Internal Stability' },
    { group: 'Internals', objective: 'Management NPS', pace: { P: 'Jasper', A: 'Jasper', C: '-', E: 'Jiro' }, krs: ['mNPS > 9.5'], pillar: 'Internal Stability' },
    { group: 'Internals', objective: 'Management Shares/Salary', pace: { P: 'Joy', A: 'Jiro', C: '-', E: 'Finance' }, krs: ['onTime', '< 1 management escalation / cutoff'], pillar: 'Internal Stability' },
    { group: 'Internals', objective: 'Staff NPS (Medical)', pace: { P: 'Rona', A: 'Rona', C: '-', E: 'Rona' }, krs: ['sNPS > 9.5'], pillar: 'Internal Stability' },
    { group: 'Internals', objective: 'Staff NPS (Sales)', pace: { P: 'Paula', A: 'Paula', C: '-', E: 'Paula' }, krs: ['sNPS > 9.5'], pillar: 'Internal Stability' },
    { group: 'Internals', objective: 'Blockers', pace: { P: 'Jasper', A: 'Jasper', C: '-', E: 'Jasper' }, krs: ['blockerResoluton <= 2 days'], pillar: 'Internal Stability' },
    { group: 'Internals', objective: 'Capability Building', pace: { P: 'Jiro', A: 'Jiro', C: 'Jiro', E: '' }, krs: ['90% Capability Matrix (Staff + mgmt)'], pillar: 'Product Excellence' },
    { group: 'Platform', objective: '% of Process Automated', pace: { P: 'Cesar', A: 'Cesar', C: 'Rona/Paula', E: 'Tech' }, krs: ['x% per week'], pillar: 'Product Excellence' },
    { group: 'Platform', objective: 'Deployment Frequency', pace: { P: 'Cesar', A: 'Cesar', C: '-', E: 'Tech' }, krs: ['twice a week'], pillar: 'Product Excellence' },
    { group: 'Platform', objective: 'Lead Time For Changes', pace: { P: 'Cesar', A: 'Cesar', C: '-', E: 'Tech' }, krs: ['< 7 days'], pillar: 'Hyper-focused Growth' },
    { group: 'Platform', objective: 'Backlog Prioritization', pace: { P: 'Cesar', A: 'Cesar', C: '-', E: 'Tech' }, krs: ['Standard Metric for Prioritization (ICE, etc.)'], pillar: 'Hyper-focused Growth' },
    { group: 'Finance', objective: 'Revenue per patient', pace: { P: 'Jared', A: '-', C: '-', E: 'Jared' }, krs: ['350 -> y'], pillar: 'Hyper-focused Growth' },
    { group: 'Finance', objective: 'Expense Control', pace: { P: 'Jared', A: 'Jared', C: '-', E: 'Joy' }, krs: ['250 -> x'], pillar: 'Hyper-focused Growth' },
    { group: 'Finance', objective: 'Budget Forecast', pace: { P: 'Jared', A: '-', C: '-', E: 'Joy' }, krs: ['> 5%'], pillar: 'Internal Stability' },
    { group: 'Finance', objective: 'Due Diligence Readiness', pace: { P: 'Jared', A: 'Joy', C: '', E: '' }, krs: ['minimal regulatory risks'], pillar: 'Internal Stability' },
    { group: 'Legal', objective: 'Contracts', pace: { P: 'Abe', A: 'Abe', C: '-', E: 'Dane' }, krs: ['100% engagement with reviewed contracts', 'timeToApprovedContract < 7 days'], pillar: 'Internal Stability' },
    { group: 'Legal', objective: 'Board Resolution', pace: { P: 'Abe', A: 'Abe', C: '-', E: 'Dane' }, krs: ['100% board agenda with resolution'], pillar: 'Internal Stability' },
    { group: 'Legal', objective: 'Safekeeping', pace: { P: 'Abe', A: 'Abe', C: '-', E: 'Dane' }, krs: ['100% contracts stored securely'], pillar: 'Internal Stability' },
    { group: 'Legal', objective: 'Legal risk exposure audit raised', pace: { P: 'Abe', A: 'Abe', C: '-', E: 'Abe' }, krs: ['Ensure legal risks are in board agenda'], pillar: 'Hyper-focused Growth' },
    { group: 'Strategic Partnerships', objective: 'Lab Partnerships', pace: { P: 'Jasper', A: 'Jasper', C: '-', E: 'Ops' }, krs: ['Lab NPS > 9.5', '100 more revenue per patient'], pillar: 'Hyper-focused Growth' },
    { group: 'Strategic Partnerships', objective: 'Pharmacy Partnerships', pace: { P: 'Jasper', A: 'Jasper', C: '-', E: 'Ops' }, krs: ['Pharmacy NPS > 9.5', '100 more revenue per patient'], pillar: 'Internal Stability' },
    { group: 'Strategic Partnerships', objective: 'PFSC Partnership', pace: { P: 'Jasper', A: 'Jasper', C: '-', E: 'Jasper' }, krs: ['Due Diligence Readiness', 'PFSC NPS > 9.5'], pillar: 'Hyper-focused Growth' },
    { group: 'Strategic Partnerships', objective: 'Sustansya x Kumpiyansa', pace: { P: 'Jasper', A: 'Jasper', C: '-', E: 'Jasper' }, krs: ['Partnership NPS > 9.5'], pillar: 'Hyper-focused Growth' },
    { group: 'Strategic Partnerships', objective: 'Fundraising', pace: { P: 'Jasper', A: 'Jasper', C: 'Jared', E: 'Jasper' }, krs: ['>500,000 pesos raised'], pillar: 'Hyper-focused Growth' },
];

const groups = [...new Set(okrData.map((item) => item.group))];

const Hero = () => (
    <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white pb-20 pt-32 px-6 rounded-b-[3rem] shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
            <div className="flex items-center justify-center gap-2 mb-6">
                <Activity className="w-8 h-8 text-teal-400" />
                <span className="text-xl font-bold tracking-widest uppercase text-teal-400">E-Konsulta®</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Fast, Reliable & <br />
                <span className="text-teal-400">Affordable Teleconsultation</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light">
                "E-Konsulta® will win by being the <span className="font-semibold text-white">most reliable platform</span>, powered by a{' '}
                <span className="font-semibold text-white">strong and aligned team</span>, scaling profitably through{' '}
                <span className="font-semibold text-white">disciplined growth</span>."
            </p>
        </div>
    </div>
);

const StrategicPillars = () => (
    <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
                <div key={pillar.id} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${pillar.color} border-2`}>{pillar.icon}</div>
                    <h3 className="text-xl font-bold text-slate-800 mb-1">{pillar.title}</h3>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">{pillar.subtitle}</p>

                    <div className="space-y-3">
                        {pillar.metrics.map((metric, idx) => (
                            <div key={idx} className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg">
                                <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                                <span className="text-sm font-medium text-slate-700">{metric}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const Legend = () => (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mt-8">
        <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4 border-b pb-2">PACE Matrix Legend</h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">P</div>
                    <span className="font-bold text-slate-800">Process Owner</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">Designs & improves the process. Creates SOPs and quality standards.</p>
            </div>
            <div>
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded bg-red-100 text-red-700 flex items-center justify-center font-bold text-sm">A</div>
                    <span className="font-bold text-slate-800">Accountable</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">Ultimately responsible for the result. The number is theirs to hit.</p>
            </div>
            <div>
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm">C</div>
                    <span className="font-bold text-slate-800">Consulted</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">Provides expertise/input but does not own result.</p>
            </div>
            <div>
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm">E</div>
                    <span className="font-bold text-slate-800">Execute</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">Carries out the tasks required by the process.</p>
            </div>
        </div>
    </div>
);

const OKRRow = ({ data }) => {
    const getPillarColor = (p) => {
        if (p.includes('Product Excellence')) return 'bg-emerald-100 text-emerald-800 border-emerald-200';
        if (p.includes('Hyper-focused')) return 'bg-blue-100 text-blue-800 border-blue-200';
        if (p.includes('Internal Stability')) return 'bg-indigo-100 text-indigo-800 border-indigo-200';
        return 'bg-slate-100 text-slate-800';
    };

    return (
        <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-300 transition-colors duration-200">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full border ${getPillarColor(data.pillar)}`}>{data.pillar}</span>
                    </div>
                    <h4 className="text-lg font-bold text-slate-800">{data.objective}</h4>
                </div>

                <div className="flex gap-1 shrink-0">
                    <div className="flex flex-col items-center">
                        <span className="text-[10px] font-bold text-slate-400 mb-1">P</span>
                        <div className="w-16 h-8 rounded bg-slate-50 border border-slate-200 flex items-center justify-center text-xs font-medium text-slate-700" title="Process Owner">
                            {data.pace.P}
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-[10px] font-bold text-red-400 mb-1">A</span>
                        <div className="w-16 h-8 rounded bg-red-50 border border-red-100 flex items-center justify-center text-xs font-bold text-red-700" title="Accountable">
                            {data.pace.A}
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-[10px] font-bold text-slate-400 mb-1">C</span>
                        <div className="w-16 h-8 rounded bg-slate-50 border border-slate-200 flex items-center justify-center text-xs font-medium text-slate-500" title="Consulted">
                            {data.pace.C}
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-[10px] font-bold text-slate-400 mb-1">E</span>
                        <div className="w-16 h-8 rounded bg-slate-50 border border-slate-200 flex items-center justify-center text-xs font-medium text-slate-500" title="Execute">
                            {data.pace.E}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-3">
                <h5 className="text-xs font-bold text-slate-400 uppercase mb-2">Key Results (KRs)</h5>
                <ul className="space-y-1">
                    {data.krs.map((kr, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                            <Target className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                            <span>{kr}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState(groups[0]);

    const getIconForGroup = (grp) => {
        switch (grp) {
            case "Patient's Journey":
                return <Users className="w-4 h-4" />;
            case "Doctor's Journey":
                return <Stethoscope className="w-4 h-4" />;
            case 'Internals':
                return <LayoutGrid className="w-4 h-4" />;
            case 'Platform':
                return <Activity className="w-4 h-4" />;
            case 'Finance':
                return <DollarSign className="w-4 h-4" />;
            case 'Legal':
                return <FileText className="w-4 h-4" />;
            case 'Strategic Partnerships':
                return <Briefcase className="w-4 h-4" />;
            default:
                return <Target className="w-4 h-4" />;
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900">Company Objectives</h2>
                    <p className="text-slate-500">Track key results and accountability assignments across departments.</p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-64 flex-shrink-0">
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden sticky top-8">
                        <div className="p-4 bg-slate-50 border-b border-slate-200">
                            <h3 className="font-bold text-slate-700 text-sm uppercase tracking-wider">Focus Areas</h3>
                        </div>
                        <div className="flex flex-col">
                            {groups.map((grp) => (
                                <button
                                    key={grp}
                                    onClick={() => setActiveTab(grp)}
                                    className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all text-left border-l-4 ${
                                        activeTab === grp ? 'bg-blue-50 text-blue-700 border-blue-500' : 'text-slate-600 hover:bg-slate-50 border-transparent hover:border-slate-300'
                                    }`}
                                >
                                    {getIconForGroup(grp)}
                                    {grp}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex-1">
                    <div className="grid grid-cols-1 gap-4">
                        {okrData.filter((item) => item.group === activeTab).map((item, index) => (
                            <OKRRow key={index} data={item} />
                        ))}
                    </div>
                    <Legend />
                </div>
            </div>
        </div>
    );
};

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-slate-50 pb-20 font-sans text-slate-900">
            <Hero />
            <StrategicPillars />
            <Dashboard />

            {/* Footer moved to App layout to avoid duplicates */}
        </div>
    );
}

