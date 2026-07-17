'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 transition-all duration-300 ${
        isScrolled ? 'py-3 shadow-lg' : 'py-5'
      }`}
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 font-headline-md text-headline-md font-bold text-tertiary">
          <div className="relative size-10">
            <Image
              src="/logo.png"
              alt="Gà Kiểng Miền Tây"
              fill
              priority
              className="object-contain"
            />
          </div>
          <span>Gà Kiểng Miền Tây</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#home" className="font-label-md text-label-md text-tertiary font-bold border-b-2 border-tertiary">
            Trang chủ
          </Link>
          <Link href="#about" className="font-label-md text-label-md text-on-surface-variant hover:text-tertiary transition-colors">
            Giới thiệu
          </Link>
          <Link href="#featured" className="font-label-md text-label-md text-on-surface-variant hover:text-tertiary transition-colors">
            Sản phẩm
          </Link>
          <Link href="#contact" className="font-label-md text-label-md text-on-surface-variant hover:text-tertiary transition-colors">
            Liên hệ
          </Link>
          <Link
            href="tel:0373747395"
            className="bg-tertiary text-on-tertiary px-6 py-2.5 rounded-full font-label-md hover:scale-105 active:scale-95 transition-all"
          >
            Liên hệ ngay
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-on-surface p-1 hover:bg-surface-container rounded-lg transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-outline-variant/30 py-6 px-margin-mobile flex flex-col gap-4 shadow-xl animate-in fade-in slide-in-from-top-5 duration-200">
          <Link
            href="#home"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-label-md text-label-md text-tertiary font-bold py-2 border-b border-surface-container"
          >
            Trang chủ
          </Link>
          <Link
            href="#about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-label-md text-label-md text-on-surface-variant hover:text-tertiary py-2 border-b border-surface-container transition-colors"
          >
            Giới thiệu
          </Link>
          <Link
            href="#featured"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-label-md text-label-md text-on-surface-variant hover:text-tertiary py-2 border-b border-surface-container transition-colors"
          >
            Sản phẩm
          </Link>
          <Link
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-label-md text-label-md text-on-surface-variant hover:text-tertiary py-2 transition-colors"
          >
            Liên hệ
          </Link>
          <Link
            href="tel:0373747395"
            className="bg-tertiary text-on-tertiary px-6 py-3 rounded-xl font-label-md hover:brightness-110 text-center transition-all mt-2"
          >
            Liên hệ ngay
          </Link>
        </div>
      )}
    </nav>
  );
};
