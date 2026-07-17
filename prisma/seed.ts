import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const chickensData = [
  {
    id: 'serama',
    name: 'Gà Serama',
    subTitle: 'Đẳng Cấp Hoàng Gia',
    price: '2.500.000đ',
    status: 'Còn hàng',
    description: 'Dáng đứng uy nghi, kích thước nhỏ gọn, là biểu tượng của sự sang trọng.',
    longDescription: 'Được mệnh danh là tác phẩm nghệ thuật sống, Gà Serama sở hữu phong thái kiêu hãnh với lồng ngực vươn cao, đôi cánh thẳng đứng và kích thước vô cùng nhỏ gọn. Đây là sự lựa chọn tối thượng cho giới đam mê sinh vật cảnh thượng lưu.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6VDHRFd-hbrbD1k82Y2iL7s6ll-gBwBRa7oKdYtla-gWUo0N66iFZtQCi0A8cAjwqwA3hZJFEqbvFV4gGiUMrxJhiNUDgs--zghwQ9xiavXvWaUJa2DHknYDDwgP4HaG-c9ueIj1ChBCeGB64zGrv7nDoLiMph8DuJIZxhqOssZXqm1WG6rkLQT12earBRKVf2MlYHG2jpmalzOmsw2ETz7Q72H2ceLJze9CqOvanARpf0xWiPVJ7dw',
    tag: 'Bán chạy',
    badges: ['Grand Champion', 'Thuần chủng'],
    age: '6 tháng tuổi',
    weight: '350g - 500g',
    vaccine: 'Đầy đủ 3 mũi',
    nutrition: 'Sử dụng ngũ cốc phối trộn tỷ lệ vàng, bổ sung vitamin và khoáng chất định kỳ để giữ bộ lông bóng mượt.',
    hygiene: 'Chuồng nuôi cần được giữ khô ráo, thoáng mát và khử trùng bằng tia UV tự nhiên hoặc đèn sưởi chuyên dụng.',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDklKbh_cYxOzq7_jRn3ALnMO2aGfgMVIa8HE9XTV2Z8ilvwGFTFW94HDDtypFJfd0wI4Oeb4z8VW9G827CRGqLDlFUfqTmWIXy3CXC4tri_JHResF5BjgHRf6cNw1WVhlfoD2RyOlGTrHpOS8fj0Di-gp4JCeaVfScbKVfM-tkQG_Wg0kBnReApHaKw4EN0gdQYhtG8aB3XsOXaWINns_Q9H6nKI9sL4m8Iq2kNFpDCB9sg_--ovbcaQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB-QivXUzY-Cv9YlMidllZ5WKfHJEIaBa8-6zG6LVEzUjWy0FzLxqJj21Z9MmpXwtGWab0SPXKNwSbLyLLTFukscbDiyuY0nXge-bDYo98jJ2SMn5TLPkYRwbmyzIYF8tJf6eF-UTaoXuAksRRRQ8qWBm1EdpciQeqd9grtwejCHFXuc-13x2Vt-hQZCjqDGrq3UQv715HaCRRsUSoIJFAS5frpRIk52xsqwI1RyTE5zqvsIyguofRBZQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAj78t4J_3T5cecrq4UZ3w9_EBgRPsyPZCh0vCTxFT6WJW14Lj8ePW0EaYlmiNZ2yzFYbM5QFzf-9m2L9irlimPSjKw2qS53K3dYPM1GU3fDhs5KpRCvvdOtPSDYvAif1u6HChXAIpNs5r0Z_8ZgIff23DY2TfsQnVv95W2JH3IhAQt9V5OrqbZ1T9z8GsCzSrDPs-V6_sMEo-Oz9bqWt8_SYWS3-V1ZpvMj_stNZ51yW819lPjF_wMQg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDt_FtUIVhXAtyTpTdWHa49nQ9I5CsmTRo1uUo0TC91K9JeHSRGI10FX9cjwQGrx-X2f-m8JjN7yqJsixlyhtl2Pzs26QlBtI9LkdoVE4h1woVxZ5H1sdRNzaQEZkfoN1e-xNin6gQ07XjYv9SyjiN0LguQukWTsLN5kg8K2FKzWFQyFBwhEPPrbOBQqNydP0ZTSYv-6Ou4tjzgowCbIzDOu7N8xnidGpBiTsAoXfveajMTHTzWpTpdhA',
    ],
  },
  {
    id: 'silkie',
    name: 'Gà Silkie',
    subTitle: 'Trắng Tuyết Fluffy',
    price: '1.800.000đ',
    status: 'Còn hàng',
    description: 'Bộ lông tơ như lụa, hiền lành và cực kỳ đáng yêu cho trẻ nhỏ.',
    longDescription: 'Gà Silkie (hay Gà ác kiểng) nổi tiếng với bộ lông tơ tơ mềm mại như lụa hoặc bông tuyết. Chúng sở hữu tính tình cực kỳ ôn hòa, thích hợp làm thú cưng trong nhà và rất thân thiện với trẻ em. Đây là dòng chim cảnh vừa mang tính thư giãn vừa mang giá trị trưng bày cao.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUjOU1hW837umItqONqXGr0G2unj0HyWf9L0gkYTiikIpVDyWaZNIr5YmQgCc_KAm7KYlYZpj7LLULBhfkO2NQvJ8JRSUa5baJW-xYEyH0SO6vHJzMo1mozE4gFnV5FFOc4wRirwYL_-mpFg1n-aOA688TYlnsr9AA5GTk-QzGkPYRX3dDLMPiDkkbZuiZNoQ65xSsohaAeY9zAtPtafmSI6glhgJieBnr5DG-uFu11VxwhKIDPldliw',
    badges: ['Lông lụa độc lạ', 'Thân thiện'],
    age: '5 tháng tuổi',
    weight: '600g - 800g',
    vaccine: 'Đầy đủ 3 mũi',
    nutrition: 'Thức ăn chính bao gồm cám chuyên dụng bổ sung protein nhẹ, rau xanh sạch và nước uống tinh khiết hàng ngày.',
    hygiene: 'Cần giữ lông luôn khô ráo. Tránh để gà dính nước mưa vì bộ lông tơ hút ẩm mạnh có thể khiến cơ thể mất nhiệt.',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBUjOU1hW837umItqONqXGr0G2unj0HyWf9L0gkYTiikIpVDyWaZNIr5YmQgCc_KAm7KYlYZpj7LLULBhfkO2NQvJ8JRSUa5baJW-xYEyH0SO6vHJzMo1mozE4gFnV5FFOc4wRirwYL_-mpFg1n-aOA688TYlnsr9AA5GTk-QzGkPYRX3dDLMPiDkkbZuiZNoQ65xSsohaAeY9zAtPtafmSI6glhgJieBnr5DG-uFu11VxwhKIDPldliw',
    ],
  },
  {
    id: 'onagadori',
    name: 'Gà Onagadori',
    subTitle: 'Đuôi Dài Trường Thọ Nhật Bản',
    price: 'Liên hệ',
    status: 'Liên hệ',
    description: 'Giống gà đuôi dài huyền thoại từ Nhật Bản, đẳng cấp hoàng gia.',
    longDescription: 'Gà Onagadori là quốc bảo sống của Nhật Bản, được biết đến với khả năng mọc đuôi không ngừng suốt cuộc đời, có thể dài đến 5-10 mét. Việc sở hữu dòng gà này thể hiện đẳng cấp thượng lưu tột đỉnh và khát vọng trường thọ của gia chủ.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKAQJraWHMkzosuAxMmNNLY5GQ_-8dngbrD67hl2unfVxMXz0RITztfnXILl-JfdOg-IVTCbFArDTyE6dkAkIPvPVIFwwRRzTiJaTQSycdZyf9jNR7gav66jOB2_Cv45k988u1upSp4kUUM5lK1ZFmBdwSbOKTDfTnLyxv9WHfF0_Z0RQa2AQSZyv8a3uSvHBOR66CwC1q7U9132Ngmh0OtJA-sdK-yXe6hK3LNUr6DKr4WHJT5fU3gg',
    badges: ['Quốc bảo Nhật Bản', 'Đuôi siêu dài'],
    age: '12 tháng tuổi',
    weight: '1.2kg - 1.6kg',
    vaccine: 'Đầy đủ 4 mũi',
    nutrition: 'Đòi hỏi khẩu phần ăn giàu protein tự nhiên như dế, sâu canxi kết hợp với ngũ cốc cao cấp để phát triển lông đuôi tối đa.',
    hygiene: 'Bắt buộc nuôi trong chuồng cao chuyên dụng (Tomariki) để giữ cho chiếc đuôi dài không bị bẩn hay gãy nát.',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCKAQJraWHMkzosuAxMmNNLY5GQ_-8dngbrD67hl2unfVxMXz0RITztfnXILl-JfdOg-IVTCbFArDTyE6dkAkIPvPVIFwwRRzTiJaTQSycdZyf9jNR7gav66jOB2_Cv45k988u1upSp4kUUM5lK1ZFmBdwSbOKTDfTnLyxv9WHfF0_Z0RQa2AQSZyv8a3uSvHBOR66CwC1q7U9132Ngmh0OtJA-sdK-yXe6hK3LNUr6DKr4WHJT5fU3gg',
    ],
  },
  {
    id: 'phoenix',
    name: 'Gà Phoenix',
    subTitle: 'Phượng Hoàng Lửa Đẳng Cấp',
    price: '4.200.000đ',
    status: 'Còn hàng',
    description: 'Đuôi dài thướt tha, màu sắc rực rỡ mang lại may mắn cho gia chủ.',
    longDescription: 'Gà Phoenix (Gà Phượng Hoàng) sở hữu chiếc đuôi dài thướt tha rực rỡ sắc màu, tượng trưng cho sự hồi sinh, may mắn và thịnh vượng. Đây là loài sinh vật cảnh sang trọng tô điểm tuyệt vời cho các biệt thự nhà vườn, resort sinh thái.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBzSOQkeHRmHXxblwPBx6voynVaaytSWAHq7hIo-tl-BBK8jc4gVj2hPfqMPUm_vTJqTFpV5uaacfwH4wUeGnB4zsoyxhgPSysSBaFvODMmPfLiCgwGb1f5RjfY1MDmlSWQSquD6AekSzQ3lhE1104aaY19spDoB1INh4UncdIBZ_ahAYOe_8OMwu5xVBlroVf4lzpQ1s2GvizVnjtXMN6CzHGha2drnE58a76sHkRXzmPnZylgRWGVA',
    badges: ['May mắn', 'Phong thủy cát tường'],
    age: '8 tháng tuổi',
    weight: '1.0kg - 1.3kg',
    vaccine: 'Đầy đủ 3 mũi',
    nutrition: 'Ăn ngũ cốc hạt nhỏ, cám cá hồi và rau cỏ tự nhiên để duy trì sắc tố lông óng ả và dẻo dai.',
    hygiene: 'Thiết kế giàn đậu cao để đuôi rủ tự nhiên, vệ sinh chuồng trại 2 ngày/lần để tránh ký sinh trùng gây xơ lông.',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDBzSOQkeHRmHXxblwPBx6voynVaaytSWAHq7hIo-tl-BBK8jc4gVj2hPfqMPUm_vTJqTFpV5uaacfwH4wUeGnB4zsoyxhgPSysSBaFvODMmPfLiCgwGb1f5RjfY1MDmlSWQSquD6AekSzQ3lhE1104aaY19spDoB1INh4UncdIBZ_ahAYOe_8OMwu5xVBlroVf4lzpQ1s2GvizVnjtXMN6CzHGha2drnE58a76sHkRXzmPnZylgRWGVA',
    ],
  },
  {
    id: 'poland',
    name: 'Gà Ba Lan',
    subTitle: 'Sư Tử Mào Lông Khổng Lồ',
    price: '3.000.000đ',
    status: 'Còn hàng',
    description: 'Điểm nhấn là chiếc mào lông khổng lồ độc đáo, thu hút mọi ánh nhìn.',
    longDescription: 'Gà Ba Lan (Polish Chicken) gây ấn tượng mạnh mẽ nhờ chỏm mào lông khổng lồ trên đỉnh đầu trông tựa bờm sư tử hay vương miện hoàng gia. Chúng vô cùng ngộ nghĩnh, hiếu động và luôn là tâm điểm của mọi sân vườn.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDts3zBuHQNPiAkTilXyrvlpZ0i2MLeCDn9dFepwyEtyLMpgtmllIgHEN1p_I0bY7mWoi1RxK_MQxhwIVmt7vyYRgQaQ_TAMks_bQuiXcszsSRyKV4-SEaN70y34pzHWMIIMH5AGOUL7x2s_xLCIvBd_rJEnapu4IQHNonSKUdsVSFRgLPIoQaPIRtNOJgG8htdFWA9l030wqH0dFvmd1Gmq6IMWSAXrY9Qme93yFpg_6bwOmaxjxhuVg',
    badges: ['Độc lạ', 'Mào bờm sư tử'],
    age: '7 tháng tuổi',
    weight: '800g - 1.1kg',
    vaccine: 'Đầy đủ 3 mũi',
    nutrition: 'Dinh dưỡng cân bằng với các hạt ngũ cốc nguyên cám, khoai mài sấy và men tiêu hóa giúp bổ trợ sức khỏe đường ruột.',
    hygiene: 'Cần vệ sinh vùng lông đầu (mào) định kỳ, cắt tỉa nhẹ nếu lông che khuất tầm nhìn của gà để tránh chúng bị stress.',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDts3zBuHQNPiAkTilXyrvlpZ0i2MLeCDn9dFepwyEtyLMpgtmllIgHEN1p_I0bY7mWoi1RxK_MQxhwIVmt7vyYRgQaQ_TAMks_bQuiXcszsSRyKV4-SEaN70y34pzHWMIIMH5AGOUL7x2s_xLCIvBd_rJEnapu4IQHNonSKUdsVSFRgLPIoQaPIRtNOJgG8htdFWA9l030wqH0dFvmd1Gmq6IMWSAXrY9Qme93yFpg_6bwOmaxjxhuVg',
    ],
  },
  {
    id: 'tanchau',
    name: 'Gà Tre Tân Châu',
    subTitle: 'Tinh Hoa Gà Kiểng Việt Nam',
    price: '2.200.000đ',
    status: 'Còn hàng',
    description: 'Giống gà thuần Việt nổi tiếng với bộ lông cực dày và mượt mà.',
    longDescription: 'Gà Tre Tân Châu là dòng gà tre kiểng thuần chủng của Việt Nam, nổi danh khắp thế giới nhờ bộ lông mã dài thướt tha, bờm cổ dày dặn ôm trọn cơ thể và khả năng thích nghi khí hậu tuyệt đối. Đây là biểu tượng tự hào của giới chơi gà cảnh Việt.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRRnyyB_s0BdvGXTrBa0nmNCpfdiQ_CL4eGVahYHPaMkxYbqDl-14VngwuOo9UZUHKyVoZXc0lA_O3QNdjStzV5uRpVmEyZMh6SHUWgP1jrOSOksxTEDb9IDhNnihbhNjNFxSOU6SlJMsSPlzxBNZhYr3f7h8M__UUHYchCNRZiq0ZAG5YaU2fqg5TWc4W03VvabELCexBek9z3h7OTCMcD7_puTZt1zHn_9vFYNJd4WIEoJYtvSEEQg',
    badges: ['Thuần Việt', 'Lông dày mượt'],
    age: '6 tháng tuổi',
    weight: '700g - 900g',
    vaccine: 'Đầy đủ 3 mũi',
    nutrition: 'Đặc biệt ưa thích thóc mầm, sâu tươi và bổ sung dầu dừa lượng cực nhỏ vào cám để kích thích lông bóng bẩy.',
    hygiene: 'Vệ sinh chuồng bằng cát khô, tắm nắng sáng sớm khoảng 15-20 phút mỗi ngày để tăng cường đề kháng tự nhiên.',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCRRnyyB_s0BdvGXTrBa0nmNCpfdiQ_CL4eGVahYHPaMkxYbqDl-14VngwuOo9UZUHKyVoZXc0lA_O3QNdjStzV5uRpVmEyZMh6SHUWgP1jrOSOksxTEDb9IDhNnihbhNjNFxSOU6SlJMsSPlzxBNZhYr3f7h8M__UUHYchCNRZiq0ZAG5YaU2fqg5TWc4W03VvabELCexBek9z3h7OTCMcD7_puTZt1zHn_9vFYNJd4WIEoJYtvSEEQg',
    ],
  },
];

async function main() {
  console.log('Seeding database...');

  // Seed admin user
  console.log('Seeding admin user...');
  const adminPassword = await bcrypt.hash('Hoaibao@@123', 10);
  await prisma.user.upsert({
    where: { username: 'admin' },
    update: { password: adminPassword },
    create: {
      username: 'admin',
      password: adminPassword,
    },
  });

  // Seed chickens
  for (const item of chickensData) {
    await prisma.chicken.upsert({
      where: { id: item.id },
      update: {},
      create: item,
    });
  }
  console.log('Seeding finished successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
