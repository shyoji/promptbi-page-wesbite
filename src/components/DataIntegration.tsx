import { useState } from 'react';
import { Users, User, GraduationCap, Heart } from 'lucide-react';

interface Tab {
  id: string;
  label: string;
  icon: typeof Users;
  title: string;
  subtitle: string;
  content: string;
  gradient: string;
  activeColor: string;
}

const tabs: Tab[] = [
  {
    id: 'teams',
    label: 'Data Teams',
    icon: Users,
    title: 'Drive Business Outcomes',
    subtitle: 'From insights to action.',
    content: 'Turn your data into decisions that move the business forward. PromptBI helps analysts not just report, but understand the "why" behind every number. Connect dashboards to revenue, optimize operations, and influence strategy—so your team delivers measurable impact, every time.',
    gradient: 'from-blue-600 to-cyan-500',
    activeColor: 'bg-blue-600'
  },
  {
    id: 'individuals',
    label: 'Individuals',
    icon: User,
    title: 'Upskill, Accelerate, Get Promoted',
    subtitle: 'Think strategically. Act confidently.',
    content: 'Level up your career with real-world problem-solving and business reasoning. Build skills that employers value, communicate insights like a leader, and position yourself for promotions or new roles. Learn the art of translating data into decisions—and make your career move faster.',
    gradient: 'from-teal-600 to-green-500',
    activeColor: 'bg-teal-600'
  },
  {
    id: 'education',
    label: 'Education',
    icon: GraduationCap,
    title: 'Prepare Students for the Future of Work',
    subtitle: 'Skills that get students hired, before graduation.',
    content: 'Train your students to think critically, analyze real-world problems, and communicate insights with confidence. PromptBI equips them with practical skills in data analysis, strategic reasoning, and business storytelling—so they graduate ready to step into jobs as data professionals, locally or globally.',
    gradient: 'from-orange-500 to-red-500',
    activeColor: 'bg-orange-500'
  },
  {
    id: 'foundations',
    label: 'Foundations & NGOs',
    icon: Heart,
    title: 'Upskill Youth, Drive Employment',
    subtitle: 'Invest in the future of work.',
    content: 'Empower youth with the skills to thrive in a data-driven world. Sponsor programs that train young people in analytics, critical thinking, and strategic communication. Drive employment outcomes, nurture local and international talent, and create measurable social impact.',
    gradient: 'from-pink-600 to-rose-500',
    activeColor: 'bg-pink-600'
  }
];

export default function DataIntegration() {
  const [activeTab, setActiveTab] = useState('teams');

  const currentTab = tabs.find(tab => tab.id === activeTab) || tabs[0];
  const Icon = currentTab.icon;

  return (
    <section className="py-32 md:py-40 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-2 leading-[1.1] tracking-tight">
            Empowering Data Teams, Individuals,
          </h2>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
            Educators, and Foundations
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="flex flex-wrap justify-center border-b border-gray-200 bg-gray-50">
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    relative px-8 py-6 font-semibold text-base
                    transition-all duration-300 flex items-center space-x-3
                    ${activeTab === tab.id
                      ? 'text-gray-900 bg-white'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                    }
                  `}
                >
                  <TabIcon className={`w-5 h-5 ${activeTab === tab.id ? 'text-gray-900' : ''}`} strokeWidth={2} />
                  <span>{tab.label}</span>
                  {activeTab === tab.id && (
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gray-900`} />
                  )}
                </button>
              );
            })}
          </div>

          <div className="p-12 lg:p-20">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-start space-x-8 mb-12">
                <div className={`
                  w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg
                  bg-gray-900
                `}>
                  <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-[1.15] tracking-tight">
                    {currentTab.title}
                  </h3>
                  <p className={`
                    text-2xl font-medium text-gray-600
                  `}>
                    {currentTab.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                {currentTab.content}
              </p>

              <div className="mt-12">
                <button className={`
                  px-10 py-5 rounded-full font-bold text-white text-lg
                  bg-gray-900
                  hover:shadow-2xl hover:scale-[1.02]
                  transition-all duration-300
                  flex items-center space-x-3 shadow-xl
                `}>
                  <span>Learn More</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
