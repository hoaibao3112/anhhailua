import { type FC } from 'react';
import Link from 'next/link';
import { Globe, MessageCircle } from 'lucide-react';

export const Footer: FC = () => {
  return (
    <footer className="py-12 bg-surface text-on-surface-variant border-t border-outline-variant/30">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <div className="font-headline-md text-headline-md font-bold text-tertiary mb-2">
            Gà Kiểng Premium
          </div>
          <p className="text-label-sm font-medium">
            © {new Date().getFullYear()} Gà Kiểng Premium. Đẳng cấp nghệ thuật chăn nuôi Việt Nam.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="#" className="hover:text-tertiary transition-colors text-label-sm font-semibold">
            Điều khoản
          </Link>
          <Link href="#" className="hover:text-tertiary transition-colors text-label-sm font-semibold">
            Bảo mật
          </Link>
          <Link href="#" className="hover:text-tertiary transition-colors text-label-sm font-semibold">
            Chăm sóc khách hàng
          </Link>
        </div>
        <div className="flex gap-4">
          <Link
            href="https://facebook.com/"
            className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-tertiary hover:text-white transition-all"
            aria-label="Facebook Website"
          >
            <Globe size={20} />
          </Link>
          <Link
            href="https://zalo.me/"
            className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-tertiary hover:text-white transition-all"
            aria-label="Zalo Chat"
          >
            <MessageCircle size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};
