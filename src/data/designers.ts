export interface Designer {
  name: string
  specialty: string
  image: string
  description: string
}

export const designers: Designer[] = [
  {
    name: 'James Park',
    specialty: 'Minimalism',
    image: 'https://placehold.co/400x400/4169E1/FFFFFF/png?text=JP',
    description: '10년 경력의 미니멀리즘 전문 디자이너',
  },
  {
    name: 'Emma Kim',
    specialty: 'Floral Art',
    image: 'https://placehold.co/400x400/FFB6C1/FFFFFF/png?text=EK',
    description: '감성적인 플로럴 패턴의 대가',
  },
  {
    name: 'David Lee',
    specialty: 'Urban Design',
    image: 'https://placehold.co/400x400/808080/FFFFFF/png?text=DL',
    description: '도시 문화를 담은 현대적 디자인',
  },
]
