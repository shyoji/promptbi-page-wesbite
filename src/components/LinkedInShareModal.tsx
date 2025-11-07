import { X, Copy, Check, Download, ExternalLink } from 'lucide-react';
import { useState } from 'react';

interface LinkedInShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  postText: string;
  rank: number;
}

export default function LinkedInShareModal({ isOpen, onClose, imageUrl, postText, rank }: LinkedInShareModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(postText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `promptbi-hackathon-rank-${rank}.png`;
    link.click();
  };

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/feed/', '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-3xl bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl border border-white/10 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 z-10"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <div className="p-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 mb-4">
              <ExternalLink className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Share Your Achievement!</h2>
            <p className="text-white/70">Follow these simple steps to share on LinkedIn</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Download Your Rank Card</h3>
                  <div className="mb-4">
                    <img
                      src={imageUrl}
                      alt="Rank card"
                      className="w-full rounded-lg border border-white/20 shadow-xl"
                    />
                  </div>
                  <button
                    onClick={downloadImage}
                    className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Image</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-lg">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Copy Your Post</h3>
                  <div className="relative">
                    <div className="bg-gray-800/50 border border-white/10 rounded-lg p-4 mb-3 max-h-48 overflow-y-auto">
                      <p className="text-white/90 text-sm whitespace-pre-wrap">{postText}</p>
                    </div>
                    <button
                      onClick={copyToClipboard}
                      className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      {copied ? (
                        <>
                          <Check className="w-5 h-5" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-5 h-5" />
                          <span>Copy Post Text</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold text-lg">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Post on LinkedIn</h3>
                  <p className="text-white/70 mb-4 text-sm">
                    Click below to open LinkedIn, then paste your text and attach the downloaded image to create your post.
                  </p>
                  <button
                    onClick={openLinkedIn}
                    className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-[#0077B5] to-[#00A0DC] hover:from-[#006399] hover:to-[#0088B8] text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span>Open LinkedIn</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-center text-white/60 text-sm">
              💡 Tip: Add your personal experience or tag PromptBI in your post for maximum engagement!
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}
