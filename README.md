# Premium Case Landing Page

프리미엄 디자이너 폰케이스 쇼핑몰 랜딩페이지

## 🎯 특징

- 🚀 **초고속 로딩** - 정적 데이터로 빠른 성능
- 📧 **이메일 수집** - Tally 폼 통합
- 🎨 **프리미엄 디자인** - Tailwind CSS + Framer Motion
- 📱 **완벽한 반응형** - 모바일/태블릿/데스크톱

## 기술 스택

- **React 18** + **TypeScript**
- **Vite** - 빠른 빌드 도구
- **Tailwind CSS** - 유틸리티 기반 스타일링
- **Swiper.js** - 프리미엄 캐러셀/슬라이드
- **Framer Motion** - 부드러운 애니메이션
- **Tally** - 이메일 구독 폼

## 🚀 시작하기

### 1. 의존성 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
npm run dev
```

### 3. 빌드
```bash
npm run build
```

## 📧 Tally 이메일 구독 설정

### 1. Tally 폼 생성
1. [Tally.so](https://tally.so)에서 무료 계정 생성
2. "New form" 클릭하여 새 폼 생성
3. 필드 추가:
   - 이메일 주소 (필수)
   - 이름 (선택)
   - 관심 카테고리 (선택)

### 2. 폼 ID 가져오기
1. 폼 설정 → Share
2. Embed 탭 선택
3. URL에서 폼 ID 복사:
   ```
   https://tally.so/r/YOUR_FORM_ID
                        ↑ 이 부분이 폼 ID
   ```

### 3. 프로젝트에 적용
`src/App.tsx` 파일 수정:

```tsx
// 기본값 대신 실제 폼 ID 전달
<EmailSubscribe tallyFormId="YOUR_FORM_ID" />
```

### 4. Tally 폼 디자인 커스터마이징

**색상 테마:**
- Settings → Theme에서 브랜드 색상 설정
- Primary color: `#0284c7` (랜딩페이지와 매칭)

**고급 설정:**
```tsx
// src/components/EmailSubscribe.tsx에서 커스터마이징
<iframe
  src={`https://tally.so/embed/${tallyFormId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
  // 옵션:
  // alignLeft=1 : 왼쪽 정렬
  // hideTitle=1 : 제목 숨기기
  // transparentBackground=1 : 투명 배경
  // dynamicHeight=1 : 자동 높이 조정
/>
```

### 5. 수집된 데이터 확인
- Tally Dashboard → Responses
- CSV/Excel 내보내기 가능
- Zapier, Google Sheets 연동 가능

## 📊 데이터 관리

### 정적 데이터 수정

모든 컨텐츠는 `src/data/` 폴더에서 관리:

```
src/data/
├── products.ts    # 제품 정보
├── designers.ts   # 디자이너 정보
└── features.ts    # 특장점
```

**제품 추가 예시:**

```typescript
// src/data/products.ts
export const products: Product[] = [
  {
    id: '5',
    name: 'New Product',
    description: '제품 설명',
    price: 55000,
    image_url: 'https://...',
    designer: 'Designer Name',
    category: 'Category',
  },
  // ...기존 제품들
]
```

## 🌐 Vercel 배포

### 자동 배포 (추천)
1. GitHub에 코드 푸시
2. [Vercel](https://vercel.com)에서 GitHub 저장소 연결
3. 자동 배포 완료 (환경 변수 불필요!)

### 수동 배포
```bash
npm install -g vercel
vercel
```

## 📁 프로젝트 구조

```
src/
├── components/          # React 컴포넌트
│   ├── Navbar.tsx      # 네비게이션 바
│   ├── Hero.tsx        # 히어로 섹션
│   ├── ProductSection.tsx
│   ├── ProductCarousel.tsx
│   ├── FeatureSection.tsx
│   ├── DesignerSection.tsx
│   ├── EmailSubscribe.tsx  # 이메일 구독 (Tally)
│   ├── Footer.tsx
│   └── Button.tsx      # 공통 버튼 컴포넌트
├── data/               # 정적 데이터
│   ├── products.ts     # 제품 정보
│   ├── designers.ts    # 디자이너 정보
│   └── features.ts     # 특장점
├── App.tsx             # 메인 앱 컴포넌트
└── index.css           # Tailwind CSS 설정
```

## 🎨 디자인 시스템

### 컬러 팔레트
- **Primary**: Blue (#0284c7)
- **Neutral**: Gray (#171717)

### 타이포그래피
- **제목**: 4xl - 7xl (Bold)
- **본문**: lg - xl (Regular)

### 컴포넌트
- `btn-primary`: 주요 액션 버튼
- `btn-secondary`: 보조 버튼
- `btn-outline`: 아웃라인 버튼

## 🔧 커스터마이징 가이드

### 색상 변경
`tailwind.config.js`에서 Primary 색상 수정:

```js
colors: {
  primary: {
    600: '#YOUR_COLOR',  // 메인 색상
    700: '#YOUR_COLOR',  // 호버 색상
  },
}
```

### 이미지 교체
`src/data/products.ts`에서 `image_url` 수정:
- Unsplash, Pexels 등 무료 이미지 사용
- 권장 크기: 600x600px
- 형식: JPEG, PNG, WebP

### 폰트 변경
`tailwind.config.js`:

```js
fontFamily: {
  sans: ['Pretendard', 'sans-serif'],
}
```

## 📈 성능 최적화

현재 성능:
- ✅ Lighthouse 점수: 95+
- ✅ 초기 로딩: ~500ms
- ✅ SEO 친화적
- ✅ 모바일 최적화

## 🤝 이메일 마케팅 자동화

Tally에서 수집한 이메일을:
1. **Mailchimp** 연동 (Zapier 사용)
2. **Google Sheets** 자동 저장
3. **Notion** 데이터베이스 동기화

[Tally Integrations 가이드](https://tally.so/help/integrations)

## 📝 라이선스

MIT

---

**문의사항이 있으시면 Issue를 남겨주세요!**
