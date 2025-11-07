import { Calendar, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HackathonCardProps {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnailUrl?: string;
  startDate: string;
  endDate: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  registeredParticipants: number;
  maxParticipants?: number;
  partnerName?: string;
}

export default function HackathonCard({
  title,
  slug,
  description,
  thumbnailUrl,
  startDate,
  endDate,
  status,
  registeredParticipants,
  maxParticipants,
  partnerName,
}: HackathonCardProps) {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getStatusColor = () => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'ongoing':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Link
      to={`/hackathons/${slug}`}
      className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
        {thumbnailUrl ? (
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Award className="w-20 h-20 text-blue-400" />
          </div>
        )}
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor()}`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>

        {partnerName && (
          <p className="text-sm text-gray-500 mb-3">
            In partnership with {partnerName}
          </p>
        )}

        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>

        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="w-4 h-4 mr-2 text-blue-500" />
            <span>
              {formatDate(startDate)} - {formatDate(endDate)}
            </span>
          </div>

          <div className="flex items-center text-sm text-gray-600">
            <Users className="w-4 h-4 mr-2 text-blue-500" />
            <span>
              {registeredParticipants} participant
              {registeredParticipants !== 1 ? 's' : ''}
              {maxParticipants && ` / ${maxParticipants} max`}
            </span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100">
          <span className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
            View Details →
          </span>
        </div>
      </div>
    </Link>
  );
}
