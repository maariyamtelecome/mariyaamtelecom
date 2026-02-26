import { useState } from 'react';
import { Phone, Users, BarChart3, Shield, Cloud, Headphones, Video, MessageSquare, Settings, Globe } from 'lucide-react';

const VoIPFeatures = () => {
  const [activeTab, setActiveTab] = useState('communication');

  const tabs = [
    { id: 'communication', label: 'Communication', icon: Phone },
    { id: 'collaboration', label: 'Collaboration', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'security', label: 'Security', icon: Shield }
  ];

  const features = {
    communication: [
      { icon: Phone, title: 'HD Voice Calling', desc: 'Crystal clear voice quality with advanced codecs' },
      { icon: Video, title: 'Video Conferencing', desc: 'Multi-party video calls with screen sharing' },
      { icon: MessageSquare, title: 'Instant Messaging', desc: 'Real-time chat and file sharing' },
      { icon: Globe, title: 'International Calling', desc: 'Cost-effective global connectivity' }
    ],
    collaboration: [
      { icon: Users, title: 'Team Presence', desc: 'See availability status in real-time' },
      { icon: Video, title: 'Virtual Meetings', desc: 'Host unlimited team meetings' },
      { icon: MessageSquare, title: 'Group Chat', desc: 'Collaborative team messaging' },
      { icon: Cloud, title: 'Cloud Storage', desc: 'Secure file storage and sharing' }
    ],
    analytics: [
      { icon: BarChart3, title: 'Call Analytics', desc: 'Detailed call metrics and reports' },
      { icon: Settings, title: 'Performance Tracking', desc: 'Monitor system performance' },
      { icon: Users, title: 'User Statistics', desc: 'Track user engagement and activity' },
      { icon: Globe, title: 'Network Monitoring', desc: 'Real-time network health status' }
    ],
    security: [
      { icon: Shield, title: 'End-to-End Encryption', desc: 'Military-grade data protection' },
      { icon: Settings, title: 'Access Control', desc: 'Role-based permissions management' },
      { icon: Cloud, title: 'Backup & Recovery', desc: 'Automated data backup solutions' },
      { icon: Headphones, title: '24/7 Support', desc: 'Round-the-clock security monitoring' }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-indigo-900 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          
          <p className="text-blue-200 text-lg">Enterprise-grade communication features</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-yellow-400 text-blue-900 shadow-lg shadow-yellow-400/50'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-yellow-400/30'
                }`}
              >
                <Icon className="w-5 h-5" fill={activeTab === tab.id ? 'currentColor' : 'none'} />
                <span className="font-semibold">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features[activeTab].map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border-2 border-yellow-400 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/20 hover:-translate-y-1"
              >
                <div className="bg-yellow-400 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-blue-900" fill="currentColor" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/5 backdrop-blur-sm border-2 border-yellow-400 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">99.9%</div>
            <div className="text-blue-200">Uptime Guarantee</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border-2 border-yellow-400 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">50K+</div>
            <div className="text-blue-200">Active Users</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border-2 border-yellow-400 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">150+</div>
            <div className="text-blue-200">Countries Covered</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoIPFeatures;