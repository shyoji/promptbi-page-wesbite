import { Calendar, Clock, ArrowRight, Eye } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  authorName: string;
  authorRole: string;
  authorImage: string;
  category: string;
  backgroundColor: string;
  publishedAt: string;
  readTime: number;
  slug: string;
  viewsCount?: number;
}

export default function BlogCard({
  title,
  excerpt,
  authorName,
  authorRole,
  authorImage,
  category,
  backgroundColor,
  publishedAt,
  readTime,
  slug,
  viewsCount = 0
}: BlogCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <article className="group relative">
      <div className="relative h-full rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-200/50">
        <div
          className="relative h-64 overflow-hidden"
          style={{ backgroundColor }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />

          <div className="absolute top-6 left-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold bg-white/95 backdrop-blur-sm text-gray-900 border border-gray-200/50 shadow-lg">
              #{category}
            </span>
          </div>

          <div className="absolute bottom-6 right-6 flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
              <img
                src={authorImage}
                alt={authorName}
                className="relative w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg"
              />
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-gray-900">{authorName}</p>
              <p className="text-xs text-gray-700">{authorRole}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8">
          <div className="flex items-center gap-3 mb-4 text-xs text-gray-500">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{formatDate(publishedAt)}</span>
            </div>
            <div className="w-1 h-1 bg-gray-300 rounded-full" />
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{readTime} min read</span>
            </div>
            {viewsCount > 0 && (
              <>
                <div className="w-1 h-1 bg-gray-300 rounded-full" />
                <div className="flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5" />
                  <span>{viewsCount.toLocaleString()} views</span>
                </div>
              </>
            )}
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>

          <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
            {excerpt}
          </p>

          <button className="group/btn inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">
            <span>Read more</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </button>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/0 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </article>
  );
}
