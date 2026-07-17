import { type FC } from 'react';
import type { ChickenBreed } from '@/types/models.types';
import { ChickenCard } from './ChickenCard';

const chickensData: ChickenBreed[] = [
  {
    id: 'serama',
    name: 'Gà Serama',
    price: '2.500.000đ',
    description: 'Dáng đứng uy nghi, kích thước nhỏ gọn, là biểu tượng của sự sang trọng.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6VDHRFd-hbrbD1k82Y2iL7s6ll-gBwBRa7oKdYtla-gWUo0N66iFZtQCi0A8cAjwqwA3hZJFEqbvFV4gGiUMrxJhiNUDgs--zghwQ9xiavXvWaUJa2DHknYDDwgP4HaG-c9ueIj1ChBCeGB64zGrv7nDoLiMph8DuJIZxhqOssZXqm1WG6rkLQT12earBRKVf2MlYHG2jpmalzOmsw2ETz7Q72H2ceLJze9CqOvanARpf0xWiPVJ7dw',
    tag: 'Bán chạy',
    delayMs: 0,
  },
  {
    id: 'silkie',
    name: 'Gà Silkie',
    price: '1.800.000đ',
    description: 'Bộ lông tơ như lụa, hiền lành và cực kỳ đáng yêu cho trẻ nhỏ.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUjOU1hW837umItqONqXGr0G2unj0HyWf9L0gkYTiikIpVDyWaZNIr5YmQgCc_KAm7KYlYZpj7LLULBhfkO2NQvJ8JRSUa5baJW-xYEyH0SO6vHJzMo1mozE4gFnV5FFOc4wRirwYL_-mpFg1n-aOA688TYlnsr9AA5GTk-QzGkPYRX3dDLMPiDkkbZuiZNoQ65xSsohaAeY9zAtPtafmSI6glhgJieBnr5DG-uFu11VxwhKIDPldliw',
    delayMs: 100,
  },
  {
    id: 'onagadori',
    name: 'Gà Onagadori',
    price: 'Liên hệ',
    description: 'Giống gà đuôi dài huyền thoại từ Nhật Bản, đẳng cấp hoàng gia.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKAQJraWHMkzosuAxMmNNLY5GQ_-8dngbrD67hl2unfVxMXz0RITztfnXILl-JfdOg-IVTCbFArDTyE6dkAkIPvPVIFwwRRzTiJaTQSycdZyf9jNR7gav66jOB2_Cv45k988u1upSp4kUUM5lK1ZFmBdwSbOKTDfTnLyxv9WHfF0_Z0RQa2AQSZyv8a3uSvHBOR66CwC1q7U9132Ngmh0OtJA-sdK-yXe6hK3LNUr6DKr4WHJT5fU3gg',
    delayMs: 200,
  },
  {
    id: 'phoenix',
    name: 'Gà Phoenix',
    price: '4.200.000đ',
    description: 'Đuôi dài thướt tha, màu sắc rực rỡ mang lại may mắn cho gia chủ.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBzSOQkeHRmHXxblwPBx6voynVaaytSWAHq7hIo-tl-BBK8jc4gVj2hPfqMPUm_vTJqTFpV5uaacfwH4wUeGnB4zsoyxhgPSysSBaFvODMmPfLiCgwGb1f5RjfY1MDmlSWQSquD6AekSzQ3lhE1104aaY19spDoB1INh4UncdIBZ_ahAYOe_8OMwu5xVBlroVf4lzpQ1s2GvizVnjtXMN6CzHGha2drnE58a76sHkRXzmPnZylgRWGVA',
    delayMs: 0,
  },
  {
    id: 'poland',
    name: 'Gà Ba Lan',
    price: '3.000.000đ',
    description: 'Điểm nhấn là chiếc mào lông khổng lồ độc đáo, thu hút mọi ánh nhìn.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDts3zBuHQNPiAkTilXyrvlpZ0i2MLeCDn9dFepwyEtyLMpgtmllIgHEN1p_I0bY7mWoi1RxK_MQxhwIVmt7vyYRgQaQ_TAMks_bQuiXcszsSRyKV4-SEaN70y34pzHWMIIMH5AGOUL7x2s_xLCIvBd_rJEnapu4IQHNonSKUdsVSFRgLPIoQaPIRtNOJgG8htdFWA9l030wqH0dFvmd1Gmq6IMWSAXrY9Qme93yFpg_6bwOmaxjxhuVg',
    delayMs: 100,
  },
  {
    id: 'tanchau',
    name: 'Gà Tre Tân Châu',
    price: '2.200.000đ',
    description: 'Giống gà thuần Việt nổi tiếng với bộ lông cực dày và mượt mà.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRRnyyB_s0BdvGXTrBa0nmNCpfdiQ_CL4eGVahYHPaMkxYbqDl-14VngwuOo9UZUHKyVoZXc0lA_O3QNdjStzV5uRpVmEyZMh6SHUWgP1jrOSOksxTEDb9IDhNnihbhNjNFxSOU6SlJMsSPlzxBNZhYr3f7h8M__UUHYchCNRZiq0ZAG5YaU2fqg5TWc4W03VvabELCexBek9z3h7OTCMcD7_puTZt1zHn_9vFYNJd4WIEoJYtvSEEQg',
    delayMs: 200,
  },
];

export const ChickenList: FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {chickensData.map((chicken) => (
        <ChickenCard key={chicken.id} chicken={chicken} />
      ))}
    </div>
  );
};
