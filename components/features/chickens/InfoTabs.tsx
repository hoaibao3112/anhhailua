'use client';

import React, { useState } from 'react';
import { Apple, Settings2 } from 'lucide-react';

interface InfoTabsProps {
  specs: {
    age: string;
    weight: string;
    vaccine: string;
  };
  careInstructions: {
    nutrition: string;
    hygiene: string;
  };
  longDescription: string;
}

export function InfoTabs({ specs, careInstructions, longDescription }: InfoTabsProps) {
  const [activeTab, setActiveTab] = useState<'dac-diem' | 'thong-so' | 'cham-soc'>('dac-diem');

  return (
    <div className="bg-white rounded-custom ambient-shadow overflow-hidden border border-outline-variant/20">
      {/* Tabs Headers */}
      <div className="flex border-b border-outline-variant/20 overflow-x-auto scrollbar-none">
        <button
          onClick={() => setActiveTab('dac-diem')}
          className={`py-6 px-8 font-label-md text-label-md font-semibold transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'dac-diem' ? 'text-tertiary border-b-2 border-tertiary' : 'text-on-surface-variant hover:text-tertiary'
          }`}
        >
          Đặc điểm
        </button>
        <button
          onClick={() => setActiveTab('thong-so')}
          className={`py-6 px-8 font-label-md text-label-md font-semibold transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'thong-so' ? 'text-tertiary border-b-2 border-tertiary' : 'text-on-surface-variant hover:text-tertiary'
          }`}
        >
          Thông số
        </button>
        <button
          onClick={() => setActiveTab('cham-soc')}
          className={`py-6 px-8 font-label-md text-label-md font-semibold transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'cham-soc' ? 'text-tertiary border-b-2 border-tertiary' : 'text-on-surface-variant hover:text-tertiary'
          }`}
        >
          Hướng dẫn chăm sóc
        </button>
      </div>

      {/* Tabs Content */}
      <div className="p-12">
        {activeTab === 'dac-diem' && (
          <div className="tab-content animate-in fade-in duration-300">
            <h3 className="font-headline-md text-headline-md mb-6 text-on-surface">Phong thái đặc trưng</h3>
            <div className="grid md:grid-cols-2 gap-12 text-on-surface-variant font-body-md text-body-md leading-relaxed">
              <div>
                <p className="mb-4">{longDescription}</p>
              </div>
              <div>
                <p>
                  Tất cả các dòng gà kiểng tại Gà Kiểng Miền Tây đều trải qua quy trình tuyển chọn giống nghiêm ngặt, đảm bảo các tiêu chuẩn cao nhất về hình thể, sức khỏe và tính khí thân thiện, thích nghi tốt với môi trường sống gia đình hoặc biệt thự sân vườn.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'thong-so' && (
          <div className="tab-content animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
                <span className="font-label-sm text-label-sm text-on-surface-variant block mb-1">Độ tuổi</span>
                <span className="font-headline-md text-headline-md text-on-surface">{specs.age}</span>
              </div>
              <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
                <span className="font-label-sm text-label-sm text-on-surface-variant block mb-1">Trọng lượng</span>
                <span className="font-headline-md text-headline-md text-on-surface">{specs.weight}</span>
              </div>
              <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
                <span className="font-label-sm text-label-sm text-on-surface-variant block mb-1">Tình trạng tiêm</span>
                <span className="font-headline-md text-headline-md text-on-surface">{specs.vaccine}</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'cham-soc' && (
          <div className="tab-content animate-in fade-in duration-300 flex flex-col gap-6">
            <div className="flex gap-4">
              <div className="text-tertiary pt-1 flex-shrink-0">
                <Apple size={24} />
              </div>
              <div>
                <h4 className="font-label-md text-label-md text-on-surface mb-2 font-bold">Dinh dưỡng cao cấp</h4>
                <p className="text-on-surface-variant font-body-md leading-relaxed">{careInstructions.nutrition}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-tertiary pt-1 flex-shrink-0">
                <Settings2 size={24} />
              </div>
              <div>
                <h4 className="font-label-md text-label-md text-on-surface mb-2 font-bold">Vệ sinh chuồng trại</h4>
                <p className="text-on-surface-variant font-body-md leading-relaxed">{careInstructions.hygiene}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
