export type Categories = {
  id: string;
  name: string;
  subCategory?: string;
};

export type Category = {
  id: string;
  name: string;
  categories: Categories[];
};

export const Categories: Category[] = [
  {
    id: 'remodeling',
    name: '리모델링',
    categories: [
      {
        id: 'all',
        name: '전체시공',
        subCategory: '라이트',
      },
      {
        id: 'all',
        name: '전체시공',
        subCategory: '스탠다드',
      },
      {
        id: 'all',
        name: '전체시공',
        subCategory: '디자이너 에디션',
      },
      {
        id: 'all',
        name: '전체시공',
        subCategory: '프리미엄',
      },
      {
        id: 'all',
        name: '전체시공',
        subCategory: '스마트',
      },
      {
        id: 'part',
        name: '부분시공',
        subCategory: '하프세트',
      },
      {
        id: 'part',
        name: '부분시공',
        subCategory: '원데이 퀵시공',
      },
    ],
  },
  {
    id: 'combas',
    name: '컴바스',
    categories: [
      {
        id: 'rx2',
        name: 'RX2',
      },
      {
        id: 'rx3',
        name: 'RX3',
      },
      {
        id: 'rx4',
        name: 'RX4',
      },
    ],
  },
  {
    id: 'faucet',
    name: '수전',
    categories: [
      {
        id: 'washable',
        name: '세면용',
        subCategory: '일반형',
      },
      {
        id: 'washable',
        name: '세면용',
        subCategory: '매립형',
      },
      {
        id: 'washable',
        name: '세면용',
        subCategory: '자동수전',
      },
      {
        id: 'washshowerable',
        name: '세면샤워겸용',
      },
      {
        id: 'showerable',
        name: '샤워용',
        subCategory: '샤워헤드',
      },
      {
        id: 'showerable',
        name: '샤워용',
        subCategory: '샤워전용',
      },
      {
        id: 'showerable',
        name: '샤워용',
        subCategory: '욕조전용',
      },
      {
        id: 'showerable',
        name: '샤워용',
        subCategory: '샤워/욕조',
      },
      {
        id: 'showerable',
        name: '샤워용',
        subCategory: '레인샤워',
      },
      {
        id: 'showerable',
        name: '샤워용',
        subCategory: '선반샤워',
      },
      {
        id: 'showerable',
        name: '샤워용',
        subCategory: '자동온도조절',
      },
      {
        id: 'showerable',
        name: '샤워용',
        subCategory: '벽매립형',
      },
      {
        id: 'showerable',
        name: '샤워용',
        subCategory: '샤워바',
      },
      {
        id: 'kitchenable',
        name: '주방용',
        subCategory: '대붙이',
      },
      {
        id: 'kitchenable',
        name: '주방용',
        subCategory: '벽붙이',
      },
      {
        id: 'other',
        name: '다용도',
        subCategory: '단수전',
      },
      {
        id: 'other',
        name: '다용도',
        subCategory: '발코니수전',
      },
      {
        id: 'other',
        name: '다용도',
        subCategory: '스프레이건',
      },
    ],
  },
];
