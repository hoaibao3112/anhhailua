'use client';

import { type FC } from 'react';
import Link from 'next/link';
import { MessageCircle, Phone } from 'lucide-react';

const FacebookIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export const FloatingActions: FC = () => {
  return (
    <div className="fixed bottom-margin-mobile right-margin-mobile flex flex-col items-end gap-4 z-[100]">
      {/* Facebook Button */}
      <Link
        href="https://facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#1877F2] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-90 transition-all relative group"
        aria-label="Liên hệ qua Facebook"
      >
        <FacebookIcon size={24} />
        <span className="absolute right-16 bg-white text-[#1877F2] px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md pointer-events-none">
          Facebook
        </span>
      </Link>

      {/* Zalo Button */}
      <Link
        href="https://zalo.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#0068FF] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-90 transition-all relative group"
        aria-label="Liên hệ qua Zalo"
      >
        <MessageCircle size={24} fill="currentColor" />
        <span className="absolute right-16 bg-white text-[#0068FF] px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md pointer-events-none">
          Zalo Chat
        </span>
      </Link>

      {/* Call Button */}
      <Link
        href="tel:0900000000"
        className="w-16 h-16 bg-tertiary text-on-tertiary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-90 transition-all animate-bounce"
        aria-label="Gọi điện trực tiếp"
      >
        <Phone size={28} fill="currentColor" />
      </Link>
    </div>
  );
};
