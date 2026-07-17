import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ChevronRight,
  Star,
  ShieldCheck,
  Award,
  ShieldAlert,
  Calendar,
  ArrowRight,
  MessageCircle,
  Phone
} from 'lucide-react';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingActions } from '@/components/shared/FloatingActions';
import { InfoTabs } from '@/components/features/chickens/InfoTabs';
import { getChickenById, getChickens } from '@/app/actions/chicken';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = await getChickenById(id);

  if (!product) {
    notFound();
  }

  // Get related products (exclude current product, limit to 3 items)
  const allChickens = await getChickens();
  const relatedProducts = allChickens
    .filter((item) => item.id !== id)
    .slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      {/* Top Navbar */}
      <Navbar />

      <main className="pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full flex-1">
        {/* Breadcrumbs */}
        <nav className="mb-12 flex items-center gap-2 text-on-surface-variant font-medium">
          <Link href="/" className="font-label-sm text-label-sm hover:text-tertiary transition-colors">
            Trang chủ
          </Link>
          <ChevronRight size={16} />
          <Link href="/#featured" className="font-label-sm text-label-sm hover:text-tertiary transition-colors">
            Sản phẩm
          </Link>
          <ChevronRight size={16} />
          <span className="font-label-sm text-label-sm text-tertiary font-bold">{product.name}</span>
        </nav>

        {/* Product Hero */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image Side */}
          <div className="relative group">
            <div className="rounded-custom overflow-hidden ambient-shadow bg-surface-container aspect-square relative border border-outline-variant/10">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute top-6 left-6 flex flex-col gap-2">
              <span className="bg-tertiary text-white px-4 py-1.5 rounded-full font-label-sm text-label-sm flex items-center gap-2 shadow-md">
                <Star size={14} fill="currentColor" />
                Grand Champion
              </span>
              <span className="bg-secondary text-white px-4 py-1.5 rounded-full font-label-sm text-label-sm flex items-center gap-2 shadow-md">
                <ShieldCheck size={14} />
                Thuần chủng
              </span>
            </div>
          </div>

          {/* Content Side */}
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="font-display-lg text-display-lg text-on-surface leading-tight mb-2">
                {product.name} - {product.subTitle}
              </h1>
              <div className="flex items-center gap-4 mt-4">
                <span className="font-headline-md text-headline-md text-tertiary font-bold">
                  {product.price}
                </span>
                <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold border border-outline-variant/10">
                  {product.status}
                </span>
              </div>
            </div>

            <p className="font-body-lg text-body-lg text-on-surface-variant border-l-4 border-tertiary-fixed pl-6 leading-relaxed">
              {product.description}
            </p>

            <div className="flex flex-col gap-4 mt-4">
              <Link
                href="https://zalo.me/0373747395"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-tertiary text-on-tertiary w-full py-4 rounded-custom font-headline-md text-headline-md flex items-center justify-center gap-3 hover:shadow-lg hover:-translate-y-0.5 active:scale-98 transition-all cursor-pointer shadow-md"
              >
                <MessageCircle size={20} />
                Liên hệ tư vấn (Zalo)
              </Link>
              <Link
                href="tel:0373747395"
                className="border-2 border-secondary text-secondary w-full py-4 rounded-custom font-headline-md text-headline-md flex items-center justify-center gap-3 hover:bg-secondary/5 transition-all cursor-pointer"
              >
                <Phone size={20} />
                Gọi ngay: 0373.747.395
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 border-t border-outline-variant/30 pt-10 mt-4">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-secondary shadow-sm">
                  <Award size={24} />
                </div>
                <span className="font-label-sm text-label-sm font-bold text-on-surface">Giống thuần chủng</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-secondary shadow-sm">
                  <Calendar size={24} />
                </div>
                <span className="font-label-sm text-label-sm font-bold text-on-surface">Đã tiêm phòng</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-secondary shadow-sm">
                  <ShieldAlert size={24} />
                </div>
                <span className="font-label-sm text-label-sm font-bold text-on-surface">Bảo hành sức khỏe</span>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Info Tabs */}
        <section className="mt-24">
          <InfoTabs
            specs={{
              age: product.age,
              weight: product.weight,
              vaccine: product.vaccine,
            }}
            careInstructions={{
              nutrition: product.nutrition,
              hygiene: product.hygiene,
            }}
            longDescription={product.longDescription}
          />
        </section>

        {/* Gallery */}
        <section className="mt-32">
          <div className="flex justify-between items-end mb-12">
            <div className="flex flex-col gap-2">
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Bộ Sưu Tập Hình Ảnh</h2>
              <p className="text-on-surface-variant">Chiêm ngưỡng chi tiết vẻ đẹp của dòng {product.name} thuần chủng</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {product.gallery.map((imgUrl, index) => {
              // Custom spanning logic to keep the masonry feel from the mockup
              const isLarge = index === 1;
              return (
                <div
                  key={index}
                  className={`rounded-custom overflow-hidden ambient-shadow bg-surface-variant relative aspect-square ${
                    isLarge ? 'md:row-span-2 md:aspect-[3/4]' : ''
                  } border border-outline-variant/10`}
                >
                  <Image
                    src={imgUrl}
                    alt={`Chi tiết ${product.name} - ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover hover:scale-110 transition-all duration-500"
                  />
                </div>
              );
            })}
          </div>
        </section>

        {/* Related Products */}
        <section className="mt-32">
          <h2 className="font-headline-lg text-headline-lg mb-12 text-on-surface">Sản Phẩm Tương Tự</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {relatedProducts.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-custom ambient-shadow overflow-hidden group hover:-translate-y-2 transition-all duration-300 border border-outline-variant/20 flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden bg-surface-container relative">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-tertiary font-label-sm text-label-sm font-semibold border border-outline-variant/10">
                    {item.name}
                  </span>
                </div>
                <div className="p-8 flex flex-col justify-between flex-1 gap-4">
                  <div>
                    <h4 className="font-headline-md text-headline-md text-on-surface mb-2">{item.name}</h4>
                    <p className="text-tertiary font-bold font-headline-md">{item.price}</p>
                  </div>
                  <Link
                    href={`/products/${item.id}`}
                    className="inline-flex items-center gap-2 text-secondary font-label-md text-label-md font-semibold group-hover:gap-4 transition-all"
                  >
                    Xem chi tiết <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingActions />
    </div>
  );
}
