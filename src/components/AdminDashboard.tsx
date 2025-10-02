import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import { Users, TrendingUp, Calendar, Target, Download, Search, ArrowLeft, LogOut } from 'lucide-react';

interface Lead {
  id: string;
  email: string;
  name: string | null;
  source: string;
  user_type: string | null;
  utm_source: string | null;
  utm_campaign: string | null;
  device_type: string | null;
  created_at: string;
}

interface BetaTester {
  id: string;
  email: string;
  full_name: string;
  role_status: string | null;
  primary_goal: string | null;
  experience_level: string | null;
  qualification_score: number;
  engagement_level: string;
  sales_stage: string;
  utm_source: string | null;
  created_at: string;
}

interface MasterclassReg {
  id: string;
  name: string;
  email: string;
  event_date: string;
  attended: boolean;
  utm_source: string | null;
  created_at: string;
}

export default function AdminDashboard() {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'overview' | 'leads' | 'beta' | 'masterclass'>('overview');
  const [leads, setLeads] = useState<Lead[]>([]);
  const [betaTesters, setBetaTesters] = useState<BetaTester[]>([]);
  const [masterclassRegs, setMasterclassRegs] = useState<MasterclassReg[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const [leadsRes, betaRes, masterclassRes] = await Promise.all([
        supabase.from('leads').select('*').order('created_at', { ascending: false }),
        supabase.from('beta_testers').select('*').order('created_at', { ascending: false }),
        supabase.from('masterclass_registrations').select('*').order('created_at', { ascending: false })
      ]);

      if (leadsRes.data) setLeads(leadsRes.data);
      if (betaRes.data) setBetaTesters(betaRes.data);
      if (masterclassRes.data) setMasterclassRegs(masterclassRes.data);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const exportToCSV = (data: any[], filename: string) => {
    if (data.length === 0) return;

    const headers = Object.keys(data[0]);
    const csv = [
      headers.join(','),
      ...data.map(row => headers.map(header => JSON.stringify(row[header] || '')).join(','))
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const stats = [
    { label: 'Total Leads', value: leads.length, icon: Users, color: 'bg-blue-500' },
    { label: 'Beta Testers', value: betaTesters.length, icon: TrendingUp, color: 'bg-purple-500' },
    { label: 'Masterclass Signups', value: masterclassRegs.length, icon: Calendar, color: 'bg-pink-500' },
    { label: 'Conversion Rate', value: `${betaTesters.length > 0 ? ((betaTesters.length / leads.length) * 100).toFixed(1) : 0}%`, icon: Target, color: 'bg-green-500' }
  ];

  const filteredLeads = leads.filter(lead =>
    lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (lead.name && lead.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const filteredBeta = betaTesters.filter(beta =>
    beta.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    beta.full_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredMasterclass = masterclassRegs.filter(reg =>
    reg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reg.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm font-medium">Back to Home</span>
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-sm text-gray-600">Marketing & Lead Analytics</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={loadData}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
              >
                Refresh Data
              </button>
              <button
                onClick={async () => {
                  await signOut();
                  navigate('/admin/login');
                }}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium flex items-center space-x-2"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="border-b border-gray-200">
            <div className="flex items-center space-x-1 p-1">
              {(['overview', 'leads', 'beta', 'masterclass'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? 'bg-purple-50 text-purple-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {tab === 'overview' && 'Overview'}
                  {tab === 'leads' && `Leads (${leads.length})`}
                  {tab === 'beta' && `Beta Testers (${betaTesters.length})`}
                  {tab === 'masterclass' && `Masterclass (${masterclassRegs.length})`}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">
            {activeTab !== 'overview' && (
              <div className="flex items-center justify-between mb-6">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by email or name..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-100 focus:border-purple-500 outline-none"
                  />
                </div>
                <button
                  onClick={() => {
                    if (activeTab === 'leads') exportToCSV(filteredLeads, 'leads');
                    if (activeTab === 'beta') exportToCSV(filteredBeta, 'beta-testers');
                    if (activeTab === 'masterclass') exportToCSV(filteredMasterclass, 'masterclass');
                  }}
                  className="ml-4 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium flex items-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Export CSV</span>
                </button>
              </div>
            )}

            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Traffic Sources</h3>
                    <div className="space-y-3">
                      {Object.entries(
                        leads.reduce((acc, lead) => {
                          const source = lead.utm_source || lead.source || 'Direct';
                          acc[source] = (acc[source] || 0) + 1;
                          return acc;
                        }, {} as Record<string, number>)
                      ).map(([source, count]) => (
                        <div key={source} className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">{source}</span>
                          <span className="text-sm font-semibold text-gray-900">{count}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">User Types</h3>
                    <div className="space-y-3">
                      {Object.entries(
                        leads.reduce((acc, lead) => {
                          const type = lead.user_type || 'Not specified';
                          acc[type] = (acc[type] || 0) + 1;
                          return acc;
                        }, {} as Record<string, number>)
                      ).map(([type, count]) => (
                        <div key={type} className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">{type}</span>
                          <span className="text-sm font-semibold text-gray-900">{count}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'leads' && (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left text-xs font-semibold text-gray-600 uppercase tracking-wider pb-3">Email</th>
                      <th className="text-left text-xs font-semibold text-gray-600 uppercase tracking-wider pb-3">Name</th>
                      <th className="text-left text-xs font-semibold text-gray-600 uppercase tracking-wider pb-3">Type</th>
                      <th className="text-left text-xs font-semibold text-gray-600 uppercase tracking-wider pb-3">Source</th>
                      <th className="text-left text-xs font-semibold text-gray-600 uppercase tracking-wider pb-3">UTM Source</th>
                      <th className="text-left text-xs font-semibold text-gray-600 uppercase tracking-wider pb-3">Device</th>
                      <th className="text-left text-xs font-semibold text-gray-600 uppercase tracking-wider pb-3">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredLeads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-gray-50">
                        <td className="py-4 text-sm text-gray-900">{lead.email}</td>
                        <td className="py-4 text-sm text-gray-600">{lead.name || '-'}</td>
                        <td className="py-4 text-sm text-gray-600">{lead.user_type || '-'}</td>
                        <td className="py-4 text-sm text-gray-600">{lead.source}</td>
                        <td className="py-4 text-sm text-gray-600">{lead.utm_source || '-'}</td>
                        <td className="py-4 text-sm text-gray-600">{lead.device_type || '-'}</td>
                        <td className="py-4 text-sm text-gray-600">{new Date(lead.created_at).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'beta' && (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left text-xs font-semibold text-gray-600 uppercase tracking-wider pb-3">Name</th>
                      <th className="text-left text-xs font-semibold text-gray-600 uppercase tracking-wider pb-3">Email</th>
                      <th className="text-left text-xs font-semibold text-gray-600 uppercase tracking-wider pb-3">Status</th>
                      <th className="text-left text-xs font-semibold text-gray-600 uppercase tracking-wider pb-3">Goal</th>
                      <th className="text-left text-xs font-semibold text-gray-600 uppercase tracking-wider pb-3">Experience</th>
                      <th className="text-left text-xs font-semibold text-gray-600 uppercase tracking-wider pb-3">Score</th>
                      <th className="text-left text-xs font-semibold text-gray-600 uppercase tracking-wider pb-3">Stage</th>
                      <th className="text-left text-xs font-semibold text-gray-600 uppercase tracking-wider pb-3">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredBeta.map((beta) => (
                      <tr key={beta.id} className="hover:bg-gray-50">
                        <td className="py-4 text-sm text-gray-900">{beta.full_name}</td>
                        <td className="py-4 text-sm text-gray-600">{beta.email}</td>
                        <td className="py-4 text-sm text-gray-600">{beta.role_status || '-'}</td>
                        <td className="py-4 text-sm text-gray-600">{beta.primary_goal || '-'}</td>
                        <td className="py-4 text-sm text-gray-600">{beta.experience_level || '-'}</td>
                        <td className="py-4">
                          <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                            beta.qualification_score >= 70 ? 'bg-green-100 text-green-800' :
                            beta.qualification_score >= 40 ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {beta.qualification_score}
                          </span>
                        </td>
                        <td className="py-4 text-sm text-gray-600">{beta.sales_stage}</td>
                        <td className="py-4 text-sm text-gray-600">{new Date(beta.created_at).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'masterclass' && (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left text-xs font-semibold text-gray-600 uppercase tracking-wider pb-3">Name</th>
                      <th className="text-left text-xs font-semibold text-gray-600 uppercase tracking-wider pb-3">Email</th>
                      <th className="text-left text-xs font-semibold text-gray-600 uppercase tracking-wider pb-3">Event Date</th>
                      <th className="text-left text-xs font-semibold text-gray-600 uppercase tracking-wider pb-3">Attended</th>
                      <th className="text-left text-xs font-semibold text-gray-600 uppercase tracking-wider pb-3">UTM Source</th>
                      <th className="text-left text-xs font-semibold text-gray-600 uppercase tracking-wider pb-3">Registered</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredMasterclass.map((reg) => (
                      <tr key={reg.id} className="hover:bg-gray-50">
                        <td className="py-4 text-sm text-gray-900">{reg.name}</td>
                        <td className="py-4 text-sm text-gray-600">{reg.email}</td>
                        <td className="py-4 text-sm text-gray-600">{new Date(reg.event_date).toLocaleDateString()}</td>
                        <td className="py-4">
                          <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                            reg.attended ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {reg.attended ? 'Yes' : 'No'}
                          </span>
                        </td>
                        <td className="py-4 text-sm text-gray-600">{reg.utm_source || '-'}</td>
                        <td className="py-4 text-sm text-gray-600">{new Date(reg.created_at).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
