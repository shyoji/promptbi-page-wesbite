import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, TrendingUp, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';

interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  authorName: string;
  authorRole: string;
  authorImage: string;
  category: string;
  tags: string[];
  backgroundColor: string;
  publishedAt: string;
  readTime: number;
  viewsCount: number;
}

const mockBlogs: Blog[] = [
  {
    id: '1',
    title: 'Mastering Data Analytics with Python',
    slug: 'mastering-data-analytics-python',
    excerpt: 'A comprehensive guide to mastering data analytics using Python, covering pandas, numpy, and visualization libraries for real-world applications.',
    authorName: 'Joan Tirop',
    authorRole: 'Data Analyst',
    authorImage: '/Tirop.png',
    category: 'Analytics',
    tags: ['Python', 'Data Science', 'Analytics'],
    backgroundColor: '#E8F4F8',
    publishedAt: '2025-10-12',
    readTime: 8,
    viewsCount: 2847
  },
  {
    id: '2',
    title: 'Building Real-Time Dashboards with Power BI',
    slug: 'realtime-dashboards-power-bi',
    excerpt: 'Learn how to create stunning, interactive dashboards that update in real-time using Power BI and connect to multiple data sources seamlessly.',
    authorName: 'Jackline Kibiwott',
    authorRole: 'BI Analyst',
    authorImage: '/Gemini_Generated_Image_r0kdv0r0kdv0r0kd.png',
    category: 'Business Intelligence',
    tags: ['Power BI', 'Dashboards', 'Visualization'],
    backgroundColor: '#FFF4E6',
    publishedAt: '2025-10-10',
    readTime: 10,
    viewsCount: 1923
  },
  {
    id: '3',
    title: 'SQL Best Practices for Data Analysts',
    slug: 'sql-best-practices',
    excerpt: 'Discover the essential SQL techniques and best practices that every data analyst should know to write efficient queries and optimize database performance.',
    authorName: 'Bertha Kasiera',
    authorRole: 'Junior Analyst',
    authorImage: '/Bertha Kasiera image.png',
    category: 'Database',
    tags: ['SQL', 'Database', 'Optimization'],
    backgroundColor: '#F0F9FF',
    publishedAt: '2025-10-08',
    readTime: 6,
    viewsCount: 3156
  },
  {
    id: '4',
    title: 'The Future of AI in Data Analytics',
    slug: 'future-ai-data-analytics',
    excerpt: 'Explore how artificial intelligence is revolutionizing data analytics and what it means for businesses and data professionals in the coming years.',
    authorName: 'Joan Tirop',
    authorRole: 'Data Analyst',
    authorImage: '/Tirop.png',
    category: 'AI & ML',
    tags: ['AI', 'Machine Learning', 'Future Trends'],
    backgroundColor: '#F3E8FF',
    publishedAt: '2025-10-05',
    readTime: 12,
    viewsCount: 4521
  },
  {
    id: '5',
    title: 'Data Visualization Principles That Work',
    slug: 'data-visualization-principles',
    excerpt: 'Master the fundamental principles of effective data visualization to create charts and graphs that clearly communicate insights to any audience.',
    authorName: 'Jackline Kibiwott',
    authorRole: 'BI Analyst',
    authorImage: '/Gemini_Generated_Image_r0kdv0r0kdv0r0kd.png',
    category: 'Visualization',
    tags: ['Visualization', 'Design', 'Communication'],
    backgroundColor: '#FEF3F2',
    publishedAt: '2025-10-03',
    readTime: 7,
    viewsCount: 2134
  },
  {
    id: '6',
    title: 'Getting Started with Tableau for Beginners',
    slug: 'tableau-beginners-guide',
    excerpt: 'A beginner-friendly introduction to Tableau, covering the basics of connecting data, creating visualizations, and building your first dashboard.',
    authorName: 'Bertha Kasiera',
    authorRole: 'Junior Analyst',
    authorImage: '/Bertha Kasiera image.png',
    category: 'Tools',
    tags: ['Tableau', 'Beginner', 'Tutorial'],
    backgroundColor: '#ECFDF5',
    publishedAt: '2025-09-28',
    readTime: 9,
    viewsCount: 1876
  }
];

const categories = ['All categories', 'Analytics', 'Business Intelligence', 'Database', 'AI & ML', 'Visualization', 'Tools'];
const sortOptions = ['Most recent', 'Most viewed', 'Trending'];

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All categories');
  const [selectedSort, setSelectedSort] = useState('Most recent');
  const [showFilters, setShowFilters] = useState(false);

  const filteredBlogs = useMemo(() => {
    let filtered = [...mockBlogs];

    if (searchQuery) {
      filtered = filtered.filter(blog =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    if (selectedCategory !== 'All categories') {
      filtered = filtered.filter(blog => blog.category === selectedCategory);
    }

    switch (selectedSort) {
      case 'Most viewed':
        filtered.sort((a, b) => b.viewsCount - a.viewsCount);
        break;
      case 'Trending':
        filtered.sort((a, b) => {
          const aScore = b.viewsCount * 0.7 + new Date(b.publishedAt).getTime() * 0.3;
          const bScore = a.viewsCount * 0.7 + new Date(a.publishedAt).getTime() * 0.3;
          return bScore - aScore;
        });
        break;
      default:
        filtered.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    }

    return filtered;
  }, [searchQuery, selectedCategory, selectedSort]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <Navigation />

      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.05),transparent_50%)]" />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-full mb-8 shadow-sm">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">Insights & Learning</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              Latest from Our
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Expert insights, tutorials, and industry trends to help you master data analytics
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-14 pr-6 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-all"
                />
              </div>

              <div className="flex gap-3">
                <select
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value)}
                  className="px-6 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm cursor-pointer appearance-none font-medium transition-all hover:border-gray-300"
                >
                  {sortOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>

                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-6 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm cursor-pointer appearance-none font-medium transition-all hover:border-gray-300"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>

                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`px-6 py-4 rounded-2xl font-medium transition-all shadow-sm ${
                    showFilters
                      ? 'bg-blue-600 text-white border border-blue-600'
                      : 'bg-white text-gray-900 border border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <SlidersHorizontal className="w-5 h-5" />
                </button>
              </div>
            </div>

            {searchQuery && (
              <div className="mt-4 text-sm text-gray-600">
                Found <span className="font-semibold text-gray-900">{filteredBlogs.length}</span> {filteredBlogs.length === 1 ? 'article' : 'articles'}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          {filteredBlogs.length > 0 ? (
            <>
              <div className="flex items-center gap-3 mb-8">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedCategory === 'All categories' ? 'All Articles' : selectedCategory}
                </h2>
                <span className="text-gray-500">({filteredBlogs.length})</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {filteredBlogs.map(blog => (
                  <BlogCard
                    key={blog.id}
                    title={blog.title}
                    excerpt={blog.excerpt}
                    authorName={blog.authorName}
                    authorRole={blog.authorRole}
                    authorImage={blog.authorImage}
                    category={blog.category}
                    backgroundColor={blog.backgroundColor}
                    publishedAt={blog.publishedAt}
                    readTime={blog.readTime}
                    slug={blog.slug}
                    viewsCount={blog.viewsCount}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
