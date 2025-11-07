import { X, ExternalLink, FileText } from 'lucide-react';

interface HackathonRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  hackathonTitle: string;
  onSuccess: () => void;
}

export default function HackathonRegistrationModal({
  isOpen,
  onClose,
  hackathonTitle,
  onSuccess,
}: HackathonRegistrationModalProps) {
  if (!isOpen) return null;

  const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfTVFafxTzxav-WJcWndD63LIW5eViyftJnHbo2wPWsPGqtow/viewform';

  const handleOpenForm = () => {
    window.open(formUrl, '_blank', 'noopener,noreferrer');
  };

  const handleFormComplete = () => {
    onSuccess();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col">
        <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between bg-gradient-to-r from-blue-50 to-white">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Register for Hackathon
            </h2>
            <p className="text-sm text-gray-600 mt-1">{hackathonTitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="p-8 md:p-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
            <FileText className="w-10 h-10 text-blue-600" />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Complete Your Registration
          </h3>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Click the button below to open the registration form in a new tab to confirm your registration.
          </p>

          <button
            onClick={handleOpenForm}
            className="w-full mb-4 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
          >
            <span>Open Registration Form</span>
            <ExternalLink className="w-5 h-5" />
          </button>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">After completing the form</span>
            </div>
          </div>

          <button
            onClick={handleFormComplete}
            className="w-full px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all shadow-md hover:shadow-lg"
          >
            I've Completed the Form
          </button>

          <p className="text-xs text-gray-500 mt-4">
            The form will open in a new tab. Please complete all required fields.
          </p>
        </div>
      </div>
    </div>
  );
}
