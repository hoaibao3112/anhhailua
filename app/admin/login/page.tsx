'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Lock, User, Loader2, CheckCircle2, XCircle } from 'lucide-react';
import { loginAdmin } from '@/app/actions/auth';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Vui lòng nhập tên đăng nhập và mật khẩu.');
      return;
    }

    setSubmitting(true);
    setError(null);

    const res = await loginAdmin(username, password);

    if (res.success) {
      // Force refresh redirect to reload cookie validation
      window.location.href = '/admin';
    } else {
      setError(res.error || 'Đăng nhập thất bại.');
      setSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-surface px-margin-mobile relative overflow-hidden">
      {/* Background ambient blur */}
      <div className="absolute top-1/4 left-1/4 size-96 bg-tertiary-fixed-dim/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-1/4 right-1/4 size-96 bg-secondary-fixed/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="w-full max-w-md relative z-10 bg-white/70 backdrop-blur-md p-8 md:p-10 rounded-custom border border-outline-variant/30 shadow-2xl animate-in fade-in zoom-in-95 duration-500">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="size-16 bg-tertiary/10 rounded-2xl flex items-center justify-center text-tertiary shadow-sm mb-4">
            <Lock size={32} />
          </div>
          <h1 className="font-headline-lg text-headline-lg text-on-surface">Đăng Nhập Quản Trị</h1>
          <p className="text-on-surface-variant text-sm mt-1.5 leading-relaxed">
            Vui lòng nhập tài khoản quản trị viên để truy cập trang quản lý Gà Kiểng Miền Tây.
          </p>
        </div>

        {error && (
          <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 flex items-start gap-2.5 mb-6 animate-in shake duration-300">
            <XCircle className="flex-shrink-0 mt-0.5" size={18} />
            <p className="text-xs font-semibold">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-on-surface uppercase tracking-wider">Tên đăng nhập</label>
            <div className="relative flex items-center">
              <User className="absolute left-4 text-on-surface-variant" size={18} />
              <input
                type="text"
                placeholder="Nhập tên đăng nhập..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border border-outline-variant/60 focus:border-tertiary rounded-xl pl-11 pr-4 py-3 bg-surface-container-low text-on-surface focus:outline-none transition-all text-sm"
                required
                disabled={submitting}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-on-surface uppercase tracking-wider">Mật khẩu</label>
            <div className="relative flex items-center">
              <Lock className="absolute left-4 text-on-surface-variant" size={18} />
              <input
                type="password"
                placeholder="Nhập mật khẩu..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-outline-variant/60 focus:border-tertiary rounded-xl pl-11 pr-4 py-3 bg-surface-container-low text-on-surface focus:outline-none transition-all text-sm"
                required
                disabled={submitting}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-tertiary text-on-tertiary py-3.5 rounded-xl font-bold flex items-center justify-center gap-2.5 hover:shadow-lg active:scale-98 transition-all cursor-pointer shadow-md mt-2 disabled:opacity-75"
          >
            {submitting ? (
              <>
                <Loader2 className="animate-spin" size={18} />
                Đang đăng nhập...
              </>
            ) : (
              'Đăng nhập ngay'
            )}
          </button>
        </form>

        <div className="text-center mt-8 pt-6 border-t border-outline-variant/30">
          <Link href="/" className="text-xs font-bold text-secondary hover:text-tertiary transition-colors">
            ← Quay lại trang chủ khách hàng
          </Link>
        </div>
      </div>
    </div>
  );
}
