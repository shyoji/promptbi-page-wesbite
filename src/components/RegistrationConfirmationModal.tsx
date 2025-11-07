import { CheckCircle, Mail, X } from 'lucide-react';

interface RegistrationConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  hackathonTitle: string;
}

export default function RegistrationConfirmationModal({
  isOpen,
  onClose,
  hackathonTitle,
}: RegistrationConfirmationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-fade-in">
        <div className="relative px-6 py-8 text-center">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>

          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Registration Successful!
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Thank you for registering for <span className="font-semibold text-gray-900">{hackathonTitle}</span>.
          </p>

          <div className="bg-blue-50 rounded-xl p-5 mb-6">
            <div className="flex items-start gap-3">
              <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div className="text-left">
                <h3 className="font-semibold text-gray-900 mb-1">
                  Check Your Email
                </h3>
                <p className="text-sm text-gray-600">
                  You will receive a confirmation email soon with more details about the hackathon, including:
                </p>
                <ul className="text-sm text-gray-600 mt-2 space-y-1 list-disc list-inside">
                  <li>Event schedule and timings</li>
                  <li>Important guidelines and rules</li>
                  <li>Resources and preparation materials</li>
                  <li>Communication channels</li>
                </ul>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
          >
            Got it, thanks!
          </button>

          <p className="text-xs text-gray-500 mt-4">
            If you don't receive an email within 24 hours, please check your spam folder or contact support.
          </p>
        </div>
      </div>
    </div>
  );
}
