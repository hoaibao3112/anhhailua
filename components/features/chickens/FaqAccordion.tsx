'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: 'Cửa hàng có giao gà đi tỉnh xa không?',
    answer: 'Chúng tôi nhận giao gà toàn quốc qua các chành xe uy tín hoặc vận chuyển chuyên dụng. Đảm bảo gà khỏe mạnh 100% khi đến tay khách hàng.',
  },
  {
    question: 'Gà đã được tiêm phòng đầy đủ chưa?',
    answer: 'Tất cả gà tại Premium đều được tiêm phòng các bệnh cơ bản theo đúng độ tuổi trước khi xuất bán.',
  },
  {
    question: 'Có hỗ trợ kỹ thuật sau khi mua không?',
    answer: 'Có, chúng tôi đồng hành cùng khách hàng suốt quá trình nuôi. Bạn có thể gọi hotline bất cứ khi nào cần tư vấn.',
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-4">
      {faqData.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden border border-outline-variant/20 transition-all duration-300">
            <button
              onClick={() => toggle(index)}
              className="flex justify-between items-center w-full p-6 text-left font-label-md font-semibold text-on-surface hover:bg-surface-container transition-colors cursor-pointer"
            >
              <span>{item.question}</span>
              <ChevronDown
                size={20}
                className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-tertiary' : ''}`}
              />
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? 'max-h-40 border-t border-outline-variant/30 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-6 text-on-surface-variant text-body-md bg-surface-container-low/50 leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
