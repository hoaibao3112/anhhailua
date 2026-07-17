import { type FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Globe, MessageCircle } from 'lucide-react';

export const Footer: FC = () => {
  return (
    <footer className="py-12 bg-surface text-on-surface-variant border-t border-outline-variant/30">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 font-headline-md text-headline-md font-bold text-tertiary mb-2">
            <div className="relative size-8">
              <Image
                src="/logo.png"
                alt="Gà Kiểng Miền Tây"
                fill
                className="object-contain"
              />
            </div>
            <span>Gà Kiểng Miền Tây</span>
          </div>
          <p className="text-label-sm font-medium">
            © {new Date().getFullYear()} Gà Kiểng Miền Tây. Đẳng cấp nghệ thuật chăn nuôi Việt Nam.
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
            href="https://www.facebook.com/hoaiphonglongbong"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-tertiary hover:text-white transition-all"
            aria-label="Facebook Website"
          >
            <Globe size={20} />
          </Link>
          <Link
            href="https://zalo.me/0373747395"
            target="_blank"
            rel="noopener noreferrer"
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
