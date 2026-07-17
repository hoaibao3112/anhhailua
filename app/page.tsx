import Image from 'next/image';
import Link from 'next/link';
import {
  Activity,
  Sparkles,
  Headphones,
  Truck,
  ShieldCheck,
  Coins,
  MessageCircle,
  Star,
  MapPin,
  Phone,
  Clock,
  Globe
} from 'lucide-react';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ChickenList } from '@/components/features/chickens/ChickenList';
import { ScrollReveal } from '@/components/features/chickens/ScrollReveal';
import { FaqAccordion } from '@/components/features/chickens/FaqAccordion';
import { FloatingActions } from '@/components/shared/FloatingActions';
import { getChickens } from '@/app/actions/chicken';

export default async function Home() {
  const chickens = await getChickens();
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9pGgqdoq-LBCVu4Xa326v3XhZ8runpAIm_Lnl-9T0Fp3_9HKW5J1G82BCntH4rfuBMQQEtyWoRnEtJ_K09leLfLwmCsGCLHqMwLY0UYcB32LiNSd3wSYE0DbZZS6fvKUFvOoaY8L86fV_cuo2F2hwZy6C60NoStiGDVskELcJwgW_7v_WP1_kGPRu4SWGbsCptbJ8qI5zcuAMHtm0u1Z6DAD21Y52MxLnqrvnyuB3QXzCWO1LZ2bSZQ"
            alt="Cinematic countryside courtyard with exotic chickens roaming freely"
            fill
            priority
            className="object-cover scale-105 animate-[pulse_10s_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollReveal className="flex flex-col gap-8">
            <h1 className="font-display-lg text-display-lg md:text-[64px] leading-tight text-on-surface">
              Gà Kiểng Đẹp <br />
              <span className="text-tertiary">Uy Tín - Chất Lượng</span>
            </h1>
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-lg">
              Cung cấp các giống gà kiểng khỏe mạnh, thuần chủng. Chúng tôi tự hào mang đến những tác phẩm nghệ thuật sống động cho không gian của bạn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#1877F2] text-white px-8 py-4 rounded-xl font-label-md shadow-lg hover:translate-y-[-4px] transition-all cursor-pointer"
              >
                <Globe size={20} />
                Liên hệ Facebook
              </Link>
              <Link
                href="https://zalo.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-secondary text-on-secondary px-8 py-4 rounded-xl font-label-md shadow-lg hover:translate-y-[-4px] transition-all cursor-pointer"
              >
                <MessageCircle size={20} />
                Chat Zalo
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16 flex flex-col gap-4">
            <ScrollReveal>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Về Chúng Tôi</h2>
              <div className="w-24 h-1 bg-tertiary mx-auto rounded-full mt-4" />
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Card 1 */}
            <ScrollReveal delayMs={0} className="h-full">
              <div className="p-8 glass-card rounded-xl text-center flex flex-col gap-4 hover:shadow-xl transition-all h-full border border-outline-variant/20">
                <div className="w-16 h-16 bg-secondary-container rounded-full flex items-center justify-center mx-auto text-secondary">
                  <Activity size={32} />
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">Gà khỏe mạnh</h3>
                <p className="text-on-surface-variant font-body-md leading-relaxed">
                  Được tiêm phòng và chăm sóc định kỳ với chế độ dinh dưỡng cao cấp.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 2 */}
            <ScrollReveal delayMs={100} className="h-full">
              <div className="p-8 glass-card rounded-xl text-center flex flex-col gap-4 hover:shadow-xl transition-all h-full border border-outline-variant/20">
                <div className="w-16 h-16 bg-tertiary-fixed rounded-full flex items-center justify-center mx-auto text-tertiary">
                  <Sparkles size={32} />
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">Giống đẹp</h3>
                <p className="text-on-surface-variant font-body-md leading-relaxed">
                  Lựa chọn từ những dòng gà thuần chủng, chuẩn dáng, lông mượt.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 3 */}
            <ScrollReveal delayMs={200} className="h-full">
              <div className="p-8 glass-card rounded-xl text-center flex flex-col gap-4 hover:shadow-xl transition-all h-full border border-outline-variant/20">
                <div className="w-16 h-16 bg-secondary-container rounded-full flex items-center justify-center mx-auto text-secondary">
                  <Headphones size={32} />
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">Tư vấn miễn phí</h3>
                <p className="text-on-surface-variant font-body-md leading-relaxed">
                  Hỗ trợ kỹ thuật chăn nuôi và làm chuồng trại 24/7 nhiệt tình.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 4 */}
            <ScrollReveal delayMs={300} className="h-full">
              <div className="p-8 glass-card rounded-xl text-center flex flex-col gap-4 hover:shadow-xl transition-all h-full border border-outline-variant/20">
                <div className="w-16 h-16 bg-tertiary-fixed rounded-full flex items-center justify-center mx-auto text-tertiary">
                  <Truck size={32} />
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">Giao hàng toàn quốc</h3>
                <p className="text-on-surface-variant font-body-md leading-relaxed">
                  Vận chuyển chuyên nghiệp, đảm bảo an toàn cho gà đến tận tay.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Chickens */}
      <section id="featured" className="py-24">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col sm:flex-row justify-between items-end mb-16 gap-4">
            <ScrollReveal className="flex flex-col gap-4">
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Sản Phẩm Nổi Bật</h2>
              <p className="text-on-surface-variant font-body-lg">Những giống gà quý hiếm và đẳng cấp nhất hiện nay.</p>
            </ScrollReveal>
            <ScrollReveal>
              <Link href="#" className="text-tertiary font-label-md flex items-center gap-2 group font-semibold">
                Xem tất cả{' '}
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </ScrollReveal>
          </div>
          <ChickenList chickens={chickens} />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-secondary-container/30">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal className="flex flex-col gap-8">
              <h2 className="font-display-lg text-display-lg text-on-surface">
                Tại Sao Nên Chọn
                <br />
                <span className="text-tertiary">Gà Kiểng Miền Tây?</span>
              </h2>
              <p className="text-on-surface-variant font-body-lg leading-relaxed">
                Chúng tôi không chỉ bán gà, chúng tôi cung cấp trải nghiệm sở hữu những &quot;tác phẩm nghệ thuật sống&quot; hoàn hảo nhất.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 size-12 bg-white rounded-lg flex items-center justify-center text-tertiary shadow-sm border border-outline-variant/10">
                    <ShieldCheck size={24} />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-label-md font-bold text-on-surface">Giống thuần chủng</h4>
                    <p className="text-label-sm text-on-surface-variant">Nguồn gốc rõ ràng.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 size-12 bg-white rounded-lg flex items-center justify-center text-tertiary shadow-sm border border-outline-variant/10">
                    <Activity size={24} />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-label-md font-bold text-on-surface">Chăm sóc kỹ</h4>
                    <p className="text-label-sm text-on-surface-variant">Quy trình khoa học.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 size-12 bg-white rounded-lg flex items-center justify-center text-tertiary shadow-sm border border-outline-variant/10">
                    <Coins size={24} />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-label-md font-bold text-on-surface">Giá hợp lý</h4>
                    <p className="text-label-sm text-on-surface-variant">Tương xứng chất lượng.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 size-12 bg-white rounded-lg flex items-center justify-center text-tertiary shadow-sm border border-outline-variant/10">
                    <MessageCircle size={24} />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-label-md font-bold text-on-surface">Hỗ trợ sau bán</h4>
                    <p className="text-label-sm text-on-surface-variant">Tư vấn trọn đời.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                <div className="rounded-xl overflow-hidden h-64 shadow-lg transform translate-y-8 relative border border-outline-variant/15">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo0bfa5fq3Mx3Eef25daHUuKFj9CiwyRo99WgnxeTlEoQD-tF9Km8ypRRvMlfStsP5APbmFkTU9Zk50gQfnFqbXC66I4jmZaEWe8ag-ZWOzsMmYFtAmcd-laNr94Bjd4BYLuQoNGZ8t9Wc98tkADtgE2o0FLAY8n26_4fx-81WF42ocliq0m1jY76s5uRjKD7IIB29zBaal9r4_UChx1AovtdR0eA_Pxbl6A-btYuLrTZeR63CHfNuDg"
                    alt="Professional chicken breeder holding a breed"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden h-48 shadow-lg relative border border-outline-variant/15">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKVDsYtSAr4rowr91E0KWzxvV_46Fk_FfVTvQpRYhEiLjvkiHr7ZfVCyNO-wlaf7sHT9fgoXl_XYKILJbH7tRCzeRuQgx-6AyjGjanTkPegCBKMPNikctjrSfZvG7fQSuQYINt-h-nHoIe6hapIMAhgLVhBJNqDltjh8tE9uVxjP3kJKGTPeWgIUXh6F4ln7j07AhxVyAxYeUvlT4pOU_bZwajQ4aK1Vb9lux-p2c0DE-qz3Vtz1a-sA"
                    alt="Organic chicken feed products"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="rounded-xl overflow-hidden h-48 shadow-lg relative border border-outline-variant/15">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMrAsfwdoBwHjU_hvWEN-ZCWgFxfOVct6soPotE111VCqkHTw5r4SwtpNW20cglsIAl-ZC7EIbMVjnk5tOaFVdklOq8u9kUIpYnl5bY3-b60hNl-ho5i5Tu7jH6i6LvMBlvK-dpdngWAv19TkrwQ40po2hBOllM9dl2kntG2E1J0YRz5zqses79_pKdR9SPGjVT19C94YjwtJq8TaB82hx0QiGGvK43uZGG0gwi3jPCG8LHyDEk4aBQ"
                    alt="Safe transport vehicle concept"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden h-64 shadow-lg transform -translate-y-8 relative border border-outline-variant/15">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV4sHXYrDkSFUAhDCOhePYijIs7EZP5-BbeTAn1SgN_dzzz3MhjAWpUb6Z7Pf7xn5aF24DeiGQ0RA-OcoCxUqwHP73U_buEgHxDeaAUM42FSZxCT3-LVdCcFQPv1_iIqwDE-AAvYU6gPu1eEeioyzO6qQuOdZvnL6qYpQZwN_F7RLDEOsitNae5p4F255XM4_8TyapzXzqSJUSEOyLzuAZdUyTTZWrJQHHLwTgHo5wASrfiqcq0mqcPg"
                    alt="Grand Champion lineage award"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Customer Gallery */}
      <section className="py-24">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16 flex flex-col gap-4">
            <ScrollReveal>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Khoảnh Khắc Khách Hàng</h2>
              <p className="text-on-surface-variant font-body-lg mt-4">Hình ảnh thực tế từ các khách hàng đã tin tưởng chúng tôi.</p>
            </ScrollReveal>
          </div>

          <ScrollReveal className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {[
              {
                src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaoi3UPiGIkKLwrgS3MPRL03vcg5YPdkodCT_peEsKzvca24gmpuQxQ8_Ur57WyNn0JAojyNTKx-sqVNMrKDEr4X3T8LpCLVotbNYsMZpziE5a-MI6ZfwjU10oQmZm7uHqfDjcjNBOQvrG1uxuHIOHIN4q6t-umKB14LW2Hkj5D6fFnWQ2ZAAAXMGEsr80VWf0nqYaANI6LcgDWIc38orwBLP3oJU0xXO_Gi-m3lDdanOofR6dybVzMQ',
                alt: 'Customer in backyard holding Serama chicken',
              },
              {
                src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMeBQSqQ_4lDZnAvuetX00hWros-kfzEwRHh-19fsfRuCEMcg5z8FSgccKzyIeLLbbx56sBuRs7pCo-5DvfRojdl0l9q_v6MAcT0HOTP7dMtmCqK55-1LT-qWhiJMB3sj_8EliETzburB3q8VJCO722fnyYXdX6__mMewOE4TNeryVkSMbE4Lg-9LexQaaRP_GNYuj58Xt-KPhWw01k5JfSOtGCOJTf6Ww-6ZjEHqdst8txlSWRnuIww',
                alt: 'Exotic chickens in luxury glass aviary',
              },
              {
                src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAz3OkffhseHF08IgLBMNB_TuV1AaS3z2k0tDR23bFwCfwoQj2W77hgfmoYxzZ8IiKoSeMR-Rn3BoukYTQEJ-O8CjXklwnrW6fM_jZns8Bx_l5Zi9ZjChuHo70Sgf749y3XdyQd7D78FISqLnLzr0MV-op7zLTZvNQ3e8HHwjWZF-vZc79rzxC8444MoqC2f8LXGXX9yyOdURAtMw-hCZCPC5RzC1A4cn2wL9abiMIvFWWzAC5hwUkHQA',
                alt: 'Happy child with fluffy Silkie chicken on lap',
              },
              {
                src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASgWohOtuWGgcaM7ogNDqgPFVS2XTcFup6FPQltwSiNIYw3dZzwYl_FFajM1tTbNOSrXbNk1_E2mXnOtt7TrbGLhj8ScauzUdZ3ijmsHKpVM3jeRaQ4Q2HfVegKhhsfInf8ziQqliyhkuQKAPM58SMulxLjumtNqyXNLVbE1SzA_Y883yb2AXhizsmC40hT3vujwAUrnP2qNE2mhG6N9qr9GieIcrBlbjL3tI6vVKopZsuy65Lb1sXVw',
                alt: 'Elegant home interior with designer bird cage',
              },
              {
                src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnKOVASpyjSJVZFvxBm-2oyymcpTxQjb4gW-tpQ0jcByyyf3SrjRRdZ1BLR439pvOSHGnnSn1vQz6U_eAjsfsVWKhh2sXe2CLFLQHFmIhCBGzHYupX93zHZ9tluirzTuPW-PNSAgHSGKXac2z1RE7Tin4dscylVXKqcuYQ7sj0cXGVLMapIIWWWQbq74az8ocQP8TlP1zsLAkWW-Oc3H7kjLFqMKtUGzTveDX1otXZQCZBWJU0TBsjMQ',
                alt: 'Champion grade roosters at luxury show',
              },
              {
                src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5Ky9l6t7oZoO6-fEyw9Yt5Miysg_knylben-i-o7_-3JJg5g1R9XTw5sprlWyPaonsiBKzX0_1tPKzul1tDxyP7ZOUT2TJKIztLSwhgx4WyNEN8sxwNA5kNC6CLQpZ0q5fXAXxrENytcrlEsKt21df3n9IiLa3uPp2BVTTEu7idtvOnXWxwto_93lF2N5bLUCMEJQXu9hDLmNchML4ooaVRf6bOtgrXaTY6MDuocxxQisRmnjFwe_XA',
                alt: 'Aerial view of partitioned luxury farm estate',
              },
            ].map((img, idx) => (
              <div key={idx} className="break-inside-avoid rounded-xl overflow-hidden shadow-md relative group border border-outline-variant/10 mb-4">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={320}
                  height={400}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16 flex flex-col gap-4">
            <ScrollReveal>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Đánh Giá Từ Khách Hàng</h2>
              <div className="flex justify-center gap-1 text-tertiary mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} fill="currentColor" />
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <ScrollReveal delayMs={0} className="h-full">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-outline-variant/30 flex flex-col justify-between gap-6 h-full">
                <p className="text-on-surface-variant font-body-md italic leading-relaxed">
                  &quot;Gà rất đẹp và khỏe mạnh. Chủ shop tư vấn cực kỳ nhiệt tình về cách làm chuồng và thức ăn. Rất hài lòng!&quot;
                </p>
                <div className="flex items-center gap-4 border-t border-outline-variant/10 pt-4">
                  <div className="size-12 rounded-full bg-secondary-fixed flex items-center justify-center font-bold text-secondary text-sm">
                    AM
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-label-md font-bold text-on-surface">Anh Minh (TP.HCM)</h4>
                    <p className="text-label-sm text-tertiary font-medium">Đã mua Gà Serama</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Testimonial 2 */}
            <ScrollReveal delayMs={100} className="h-full">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-outline-variant/30 flex flex-col justify-between gap-6 h-full">
                <p className="text-on-surface-variant font-body-md italic leading-relaxed">
                  &quot;Vận chuyển từ miền Tây ra Hà Nội mà gà vẫn rất tỉnh táo. Đóng gói lồng vận chuyển rất chuyên nghiệp và an toàn.&quot;
                </p>
                <div className="flex items-center gap-4 border-t border-outline-variant/10 pt-4">
                  <div className="size-12 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-tertiary text-sm">
                    CL
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-label-md font-bold text-on-surface">Chị Lan (Hà Nội)</h4>
                    <p className="text-label-sm text-tertiary font-medium">Đã mua Gà Silkie</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Testimonial 3 */}
            <ScrollReveal delayMs={200} className="h-full">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-outline-variant/30 flex flex-col justify-between gap-6 h-full">
                <p className="text-on-surface-variant font-body-md italic leading-relaxed">
                  &quot;Giống gà ở đây thực sự đẳng cấp. Lông bóng mượt, dáng chuẩn. Tôi đã mua 3 cặp và đều rất ưng ý.&quot;
                </p>
                <div className="flex items-center gap-4 border-t border-outline-variant/10 pt-4">
                  <div className="size-12 rounded-full bg-secondary-fixed flex items-center justify-center font-bold text-secondary text-sm">
                    BH
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-label-md font-bold text-on-surface">Bác Hùng (Đà Nẵng)</h4>
                    <p className="text-label-sm text-tertiary font-medium">Đã mua Gà Phoenix</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-margin-mobile">
          <ScrollReveal>
            <h2 className="font-headline-lg text-headline-lg text-center mb-12 text-on-surface">Câu Hỏi Thường Gặp</h2>
          </ScrollReveal>
          <FaqAccordion />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-tertiary text-on-tertiary">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-3 gap-12">
          <ScrollReveal className="flex flex-col gap-6">
            <h2 className="font-headline-lg text-headline-lg text-white">Thông Tin Liên Hệ</h2>
            <div className="flex flex-col gap-4 opacity-90">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 flex-shrink-0" />
                <p className="font-body-md leading-relaxed">123 Đường Nghệ Thuật, Phường Đẳng Cấp, Quận Gà Kiểng, TP.HCM</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="flex-shrink-0" />
                <p className="font-body-md">0900.000.000</p>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="flex-shrink-0" />
                <p className="font-body-md">Thứ 2 - Chủ Nhật: 08:00 - 20:00</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="md:col-span-2 h-full">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl h-full flex flex-col justify-center border border-white/20 gap-6">
              <h3 className="font-headline-md text-headline-md text-white">Bạn cần tư vấn giống gà phù hợp?</h3>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="tel:0900000000"
                  className="flex-1 min-w-[200px] bg-white text-tertiary py-4 rounded-xl text-center font-bold hover:bg-tertiary-fixed transition-all cursor-pointer shadow-lg"
                >
                  Gọi Ngay: 0900.000.000
                </Link>
                <Link
                  href="https://zalo.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[200px] bg-[#0068FF] text-white py-4 rounded-xl text-center font-bold hover:brightness-110 transition-all cursor-pointer shadow-lg"
                >
                  Chat Zalo Ngay
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingActions />
    </div>
  );
}
