'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Plus, Trash2, Loader2, CheckCircle2, XCircle, Image as ImageIcon, ExternalLink } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingActions } from '@/components/shared/FloatingActions';
import { getChickens, createChicken, deleteChicken } from '@/app/actions/chicken';

export default function AdminPage() {
  const [chickens, setChickens] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Form states
  const [name, setName] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [price, setPrice] = useState('');
  const [status, setStatus] = useState('Còn hàng');
  const [description, setDescription] = useState('');
  const [longDescription, setLongDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [tag, setTag] = useState('');
  const [badgesInput, setBadgesInput] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [vaccine, setVaccine] = useState('Đầy đủ 3 mũi');
  const [nutrition, setNutrition] = useState('');
  const [hygiene, setHygiene] = useState('');

  const fetchChickens = async () => {
    setLoading(true);
    const data = await getChickens();
    setChickens(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchChickens();
  }, []);

  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 8 * 1024 * 1024) {
        setMessage({ type: 'error', text: 'Kích thước ảnh không vượt quá 8MB.' });
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa chú gà này không?')) {
      const res = await deleteChicken(id);
      if (res.success) {
        setMessage({ type: 'success', text: 'Đã xóa sản phẩm thành công!' });
        fetchChickens();
      } else {
        setMessage({ type: 'error', text: 'Có lỗi xảy ra khi xóa sản phẩm.' });
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !price || !description || !imageUrl) {
      setMessage({ type: 'error', text: 'Vui lòng điền đầy đủ các thông tin bắt buộc (Tên, Giá, Mô tả, Ảnh).' });
      return;
    }

    setSubmitting(true);
    setMessage(null);

    const badges = badgesInput
      .split(',')
      .map((b) => b.trim())
      .filter((b) => b !== '');

    const gallery = [imageUrl]; // Set default gallery with main photo

    const res = await createChicken({
      name,
      subTitle: subTitle || 'Giống gà kiểng đẹp',
      price,
      status,
      description,
      longDescription: longDescription || description,
      imageUrl,
      tag: tag || undefined,
      badges: badges.length > 0 ? badges : ['Thuần chủng'],
      age: age || '6 tháng tuổi',
      weight: weight || '500g',
      vaccine,
      nutrition: nutrition || 'Ăn ngũ cốc hạt nhỏ, cám chuyên dụng.',
      hygiene: hygiene || 'Chuồng trại thoáng khí, dọn dẹp hàng ngày.',
      gallery,
    });

    setSubmitting(false);

    if (res.success) {
      setMessage({ type: 'success', text: 'Đã thêm gà kiểng mới thành công!' });
      // Reset form
      setName('');
      setSubTitle('');
      setPrice('');
      setStatus('Còn hàng');
      setDescription('');
      setLongDescription('');
      setImageUrl('');
      setTag('');
      setBadgesInput('');
      setAge('');
      setWeight('');
      setVaccine('Đầy đủ 3 mũi');
      setNutrition('');
      setHygiene('');
      setIsOpenForm(false);
      fetchChickens();
    } else {
      setMessage({ type: 'error', text: res.error || 'Có lỗi xảy ra, vui lòng thử lại.' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Navbar />

      <main className="pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full flex-1">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="font-headline-lg text-headline-lg text-on-surface">Quản Trị Gà Kiểng</h1>
            <p className="text-on-surface-variant font-body-md mt-1">
              Thêm mới, sửa đổi hoặc xóa các giống gà hiển thị trên trang khách hàng.
            </p>
          </div>
          <button
            onClick={() => setIsOpenForm(!isOpenForm)}
            className="flex items-center gap-2 bg-tertiary text-on-tertiary px-6 py-3 rounded-xl font-label-md font-bold hover:scale-105 active:scale-95 transition-all shadow-md cursor-pointer"
          >
            <Plus size={20} />
            {isOpenForm ? 'Đóng form' : 'Thêm gà kiểng mới'}
          </button>
        </div>

        {/* Message Banner */}
        {message && (
          <div
            className={`p-4 rounded-xl flex items-start gap-3 mb-6 animate-in fade-in slide-in-from-top-2 duration-300 border ${
              message.type === 'success'
                ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                : 'bg-rose-50 border-rose-200 text-rose-800'
            }`}
          >
            {message.type === 'success' ? (
              <CheckCircle2 className="flex-shrink-0 mt-0.5" size={20} />
            ) : (
              <XCircle className="flex-shrink-0 mt-0.5" size={20} />
            )}
            <p className="font-medium text-sm">{message.text}</p>
          </div>
        )}

        {/* Add Form Container */}
        {isOpenForm && (
          <div className="bg-white p-8 rounded-custom border border-outline-variant/20 shadow-lg mb-12 animate-in slide-in-from-top-6 duration-300">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-6">Thông Tin Gà Kiểng Mới</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Fields */}
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-bold text-on-surface">Tên giống gà <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      placeholder="VD: Gà Serama"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="border border-outline-variant/60 rounded-xl px-4 py-2.5 bg-surface-container-low text-on-surface focus:outline-none focus:border-tertiary text-sm"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-bold text-on-surface">Tiêu đề phụ / Đặc trưng</label>
                    <input
                      type="text"
                      placeholder="VD: Đẳng Cấp Hoàng Gia"
                      value={subTitle}
                      onChange={(e) => setSubTitle(e.target.value)}
                      className="border border-outline-variant/60 rounded-xl px-4 py-2.5 bg-surface-container-low text-on-surface focus:outline-none focus:border-tertiary text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-bold text-on-surface">Giá hiển thị <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        placeholder="VD: 2.500.000đ hoặc Liên hệ"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="border border-outline-variant/60 rounded-xl px-4 py-2.5 bg-surface-container-low text-on-surface focus:outline-none focus:border-tertiary text-sm"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-bold text-on-surface">Trạng thái kho <span className="text-red-500">*</span></label>
                      <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="border border-outline-variant/60 rounded-xl px-4 py-2.5 bg-surface-container-low text-on-surface focus:outline-none focus:border-tertiary text-sm"
                      >
                        <option value="Còn hàng">Còn hàng</option>
                        <option value="Hết hàng">Hết hàng</option>
                        <option value="Liên hệ">Liên hệ</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-bold text-on-surface">Nhãn đặc biệt (Tag)</label>
                      <input
                        type="text"
                        placeholder="VD: Bán chạy"
                        value={tag}
                        onChange={(e) => setTag(e.target.value)}
                        className="border border-outline-variant/60 rounded-xl px-4 py-2.5 bg-surface-container-low text-on-surface focus:outline-none focus:border-tertiary text-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-bold text-on-surface">Nhãn phụ (badges, cách nhau bằng dấu phẩy)</label>
                      <input
                        type="text"
                        placeholder="VD: Grand Champion, Thuần chủng"
                        value={badgesInput}
                        onChange={(e) => setBadgesInput(e.target.value)}
                        className="border border-outline-variant/60 rounded-xl px-4 py-2.5 bg-surface-container-low text-on-surface focus:outline-none focus:border-tertiary text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-bold text-on-surface">Độ tuổi</label>
                      <input
                        type="text"
                        placeholder="VD: 6 tháng"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="border border-outline-variant/60 rounded-xl px-4 py-2.5 bg-surface-container-low text-on-surface focus:outline-none focus:border-tertiary text-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-bold text-on-surface">Trọng lượng</label>
                      <input
                        type="text"
                        placeholder="VD: 400g"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className="border border-outline-variant/60 rounded-xl px-4 py-2.5 bg-surface-container-low text-on-surface focus:outline-none focus:border-tertiary text-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-bold text-on-surface">Vắc xin</label>
                      <input
                        type="text"
                        placeholder="VD: Đầy đủ 3 mũi"
                        value={vaccine}
                        onChange={(e) => setVaccine(e.target.value)}
                        className="border border-outline-variant/60 rounded-xl px-4 py-2.5 bg-surface-container-low text-on-surface focus:outline-none focus:border-tertiary text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Fields & Photo Upload */}
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-bold text-on-surface">Mô tả ngắn <span className="text-red-500">*</span></label>
                    <textarea
                      placeholder="Mô tả tóm tắt hiển thị ở thẻ danh sách..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={2}
                      className="border border-outline-variant/60 rounded-xl px-4 py-2.5 bg-surface-container-low text-on-surface focus:outline-none focus:border-tertiary text-sm resize-none"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-bold text-on-surface">Mô tả chi tiết</label>
                    <textarea
                      placeholder="Mô tả phong thái, nguồn gốc giống ở trang chi tiết sản phẩm..."
                      value={longDescription}
                      onChange={(e) => setLongDescription(e.target.value)}
                      rows={3}
                      className="border border-outline-variant/60 rounded-xl px-4 py-2.5 bg-surface-container-low text-on-surface focus:outline-none focus:border-tertiary text-sm resize-none"
                    />
                  </div>

                  {/* Photo Uploader */}
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-bold text-on-surface">Hình ảnh gà <span className="text-red-500">*</span></span>
                    <div className="grid grid-cols-3 gap-4 items-center">
                      <div className="col-span-2 flex flex-col gap-2">
                        <label className="flex items-center gap-2 border border-dashed border-outline-variant rounded-xl p-3 bg-surface hover:bg-surface-container-low transition-colors cursor-pointer justify-center text-sm font-semibold text-secondary">
                          <ImageIcon size={18} />
                          Tải ảnh từ máy tính
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageFileChange}
                            className="hidden"
                          />
                        </label>
                        <input
                          type="text"
                          placeholder="Hoặc dán URL ảnh trực tiếp..."
                          value={imageUrl}
                          onChange={(e) => setImageUrl(e.target.value)}
                          className="border border-outline-variant/60 rounded-xl px-4 py-2 bg-surface-container-low text-on-surface focus:outline-none focus:border-tertiary text-xs"
                        />
                      </div>
                      {/* Photo Preview */}
                      <div className="aspect-square bg-surface-container-low border border-outline-variant/30 rounded-xl overflow-hidden flex items-center justify-center relative shadow-sm">
                        {imageUrl ? (
                          <Image src={imageUrl} alt="Preview" fill className="object-cover" />
                        ) : (
                          <span className="text-xs text-on-surface-variant text-center p-2 leading-tight">Chưa có ảnh</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Extra Details fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-outline-variant/20 pt-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-on-surface">Chế độ dinh dưỡng đặc biệt</label>
                  <input
                    type="text"
                    placeholder="VD: Sử dụng ngũ cốc phối trộn tỷ lệ vàng, vitamin..."
                    value={nutrition}
                    onChange={(e) => setNutrition(e.target.value)}
                    className="border border-outline-variant/60 rounded-xl px-4 py-2.5 bg-surface-container-low text-on-surface focus:outline-none focus:border-tertiary text-sm"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-on-surface">Yêu cầu vệ sinh & chuồng trại</label>
                  <input
                    type="text"
                    placeholder="VD: Chuồng nuôi cần giữ khô ráo, thoáng mát..."
                    value={hygiene}
                    onChange={(e) => setHygiene(e.target.value)}
                    className="border border-outline-variant/60 rounded-xl px-4 py-2.5 bg-surface-container-low text-on-surface focus:outline-none focus:border-tertiary text-sm"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-4 mt-4 border-t border-outline-variant/20 pt-6">
                <button
                  type="button"
                  onClick={() => setIsOpenForm(false)}
                  className="px-6 py-3 rounded-xl border border-outline text-on-surface font-semibold hover:bg-surface-container transition-all cursor-pointer"
                >
                  Hủy bỏ
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex items-center gap-2 bg-tertiary text-on-tertiary px-8 py-3 rounded-xl font-bold hover:brightness-110 disabled:opacity-50 transition-all cursor-pointer shadow-md"
                >
                  {submitting && <Loader2 className="animate-spin" size={18} />}
                  {submitting ? 'Đang lưu...' : 'Thêm sản phẩm'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Chickens Table List */}
        <div className="bg-white rounded-custom border border-outline-variant/20 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-outline-variant/20 bg-surface-container-low">
            <h3 className="font-headline-md text-headline-md text-on-surface">Danh Sách Gà Kiểng Hiện Tại</h3>
          </div>

          {loading ? (
            <div className="p-16 flex flex-col items-center justify-center text-on-surface-variant gap-3">
              <Loader2 className="animate-spin text-tertiary" size={40} />
              <p className="font-medium text-sm">Đang tải danh sách gà kiểng...</p>
            </div>
          ) : chickens.length === 0 ? (
            <div className="p-16 text-center text-on-surface-variant">
              <p className="font-medium text-lg mb-2">Chưa có giống gà kiểng nào.</p>
              <p className="text-sm">Click &quot;Thêm gà kiểng mới&quot; ở trên để bắt đầu thêm dữ liệu.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container border-b border-outline-variant/30 text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                    <th className="py-4 px-6">Ảnh</th>
                    <th className="py-4 px-6">Tên giống gà</th>
                    <th className="py-4 px-6">Trạng thái</th>
                    <th className="py-4 px-6">Giá cả</th>
                    <th className="py-4 px-6">Đặc điểm tuổi/nặng</th>
                    <th className="py-4 px-6 text-right">Thao tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/20">
                  {chickens.map((chicken) => (
                    <tr key={chicken.id} className="hover:bg-surface-container-lowest transition-colors text-sm">
                      <td className="py-4 px-6">
                        <div className="size-16 relative rounded-lg overflow-hidden bg-surface-container border border-outline-variant/10 shadow-sm">
                          <Image src={chicken.imageUrl} alt={chicken.name} fill className="object-cover" />
                        </div>
                      </td>
                      <td className="py-4 px-6 font-bold text-on-surface">
                        <div className="flex flex-col">
                          <span>{chicken.name}</span>
                          <span className="text-xs text-on-surface-variant font-normal">{chicken.subTitle}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                            chicken.status === 'Còn hàng'
                              ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                              : 'bg-rose-50 border-rose-200 text-rose-700'
                          }`}
                        >
                          {chicken.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 font-semibold text-tertiary">{chicken.price}</td>
                      <td className="py-4 px-6 text-on-surface-variant text-xs">
                        <div className="flex flex-col gap-0.5">
                          <span>Tuổi: {chicken.age}</span>
                          <span>Nặng: {chicken.weight}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <div className="flex items-center justify-end gap-3">
                          <Link
                            href={`/products/${chicken.id}`}
                            className="p-2 hover:bg-surface-container text-secondary rounded-lg transition-colors inline-block"
                            title="Xem chi tiết trên Web"
                          >
                            <ExternalLink size={18} />
                          </Link>
                          <button
                            onClick={() => handleDelete(chicken.id)}
                            className="p-2 hover:bg-rose-50 text-rose-600 hover:text-rose-800 rounded-lg transition-colors cursor-pointer"
                            title="Xóa gà kiểng"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
