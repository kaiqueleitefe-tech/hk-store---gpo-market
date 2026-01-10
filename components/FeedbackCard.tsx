
import React from 'react';
import { Feedback } from '../types';

interface FeedbackCardProps {
  feedback: Feedback;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({ feedback }) => {
  return (
    <div className="bg-[#111] border border-white/5 p-6 rounded-3xl hover:border-white/10 transition-all flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center border border-white/10 text-white font-bold text-sm">
            {feedback.user.charAt(0)}
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">{feedback.user}</h4>
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-3 h-3 ${i < feedback.rating ? 'fill-current' : 'text-gray-600'}`} viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
        {feedback.verified && (
          <span className="flex items-center text-[10px] text-green-500 bg-green-500/10 px-2 py-1 rounded-full border border-green-500/20 font-bold uppercase tracking-widest">
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
            Verificado
          </span>
        )}
      </div>

      <p className="text-gray-400 text-sm leading-relaxed mb-4 italic flex-grow">
        "{feedback.comment}"
      </p>

      <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
        <span className="text-[10px] text-gray-500 font-medium">Comprado: {feedback.purchasedItem}</span>
        <span className="text-[10px] text-gray-600">{feedback.date}</span>
      </div>
    </div>
  );
};

export default FeedbackCard;
