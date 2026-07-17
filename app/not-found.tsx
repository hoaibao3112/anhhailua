'use client';

import Link from 'next/link';
import { HelpCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center bg-surface">
      <div className="w-16 h-16 bg-tertiary-fixed rounded-full flex items-center justify-center mb-4 text-tertiary">
        <HelpCircle className="w-8 h-8 animate-pulse" />
      </div>
      <h2 className="text-xl font-bold mb-2 text-on-surface">Không tìm thấy trang yêu cầu</h2>
      <p className="text-on-surface-variant text-sm max-w-md mb-6 leading-relaxed">
        Trang bạn đang truy cập không tồn tại hoặc đã bị thay đổi địa chỉ. Vui lòng kiểm tra lại liên kết hoặc quay về trang chủ.
      </p>
      <Link
        href="/"
        className="bg-tertiary hover:scale-105 active:scale-95 text-on-tertiary rounded-full px-6 py-2.5 font-semibold transition-all cursor-pointer inline-block"
      >
        Về trang chủ
      </Link>
    </div>
  );
}
