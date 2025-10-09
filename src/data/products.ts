export interface Product {
  id: string
  name: string
  description: string
  price: number
  image_url: string
  designer: string
  category: string
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Minimal Black',
    description: '심플하고 세련된 블랙 디자인. 어떤 스타일에도 완벽하게 어울립니다.',
    price: 45000,
    image_url: 'https://placehold.co/600x600/000000/FFFFFF/png?text=Minimal+Black',
    designer: 'James Studio',
    category: 'Minimalism',
  },
  {
    id: '2',
    name: 'Floral Dream',
    description: '화사한 플로럴 패턴이 돋보이는 감성 디자인.',
    price: 52000,
    image_url: 'https://placehold.co/600x600/FFB6C1/FFFFFF/png?text=Floral+Dream',
    designer: 'Emma Design',
    category: 'Floral',
  },
  {
    id: '3',
    name: 'Urban Concrete',
    description: '도시적 감성의 콘크리트 텍스처 케이스.',
    price: 48000,
    image_url: 'https://placehold.co/600x600/808080/FFFFFF/png?text=Urban+Concrete',
    designer: 'Metro Works',
    category: 'Urban',
  },
  {
    id: '4',
    name: 'Ocean Blue',
    description: '깊고 청량한 바다색 그라디언트 디자인.',
    price: 50000,
    image_url: 'https://placehold.co/600x600/4169E1/FFFFFF/png?text=Ocean+Blue',
    designer: 'Wave Studio',
    category: 'Nature',
  },
]
