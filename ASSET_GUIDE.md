# 🎨 LUXE CASE - 이미지 및 에셋 가이드

현재 랜딩 페이지는 색상 그라디언트로 디자인되어 있으며, 실제 제품 이미지를 추가할 수 있도록 준비되어 있습니다.

## 📁 권장 폴더 구조

프로젝트에 이미지를 추가할 경우 다음 구조를 권장합니다:

```
251005_landing_test-02/
├── assets/
│   ├── images/
│   │   ├── hero/
│   │   │   ├── hero-1.jpg (1920x1080px)
│   │   │   ├── hero-2.jpg (1920x1080px)
│   │   │   └── hero-3.jpg (1920x1080px)
│   │   ├── products/
│   │   │   ├── velvet-touch.jpg (800x800px)
│   │   │   ├── carbon-fiber.jpg (800x800px)
│   │   │   ├── eco-leather.jpg (800x800px)
│   │   │   └── gold-edition.jpg (800x800px)
│   │   ├── brand/
│   │   │   └── brand-story.jpg (1200x900px)
│   │   └── favicon/
│   │       └── favicon.ico
│   └── icons/
│       └── [필요한 아이콘들]
```

## 🖼️ 이미지 사양

### 히어로 슬라이더 이미지
- **크기**: 1920x1080px (16:9 비율)
- **포맷**: JPG 또는 WebP
- **용량**: 각 200KB 이하 (최적화 권장)
- **내용**: 제품의 라이프스타일 이미지, 분위기 있는 배경

### 제품 이미지
- **크기**: 800x800px (1:1 비율)
- **포맷**: PNG (투명 배경) 또는 JPG
- **용량**: 각 150KB 이하
- **내용**: 제품의 정면/측면 뷰, 깔끔한 배경

### 브랜드 스토리 이미지
- **크기**: 1200x900px (4:3 비율)
- **포맷**: JPG 또는 WebP
- **용량**: 200KB 이하
- **내용**: 작업 과정, 장인의 손길, 소재 클로즈업

### 파비콘
- **크기**: 32x32px, 16x16px
- **포맷**: ICO 또는 PNG
- **내용**: 브랜드 로고 심볼

## 🎨 이미지 적용 방법

### 1. 히어로 슬라이더 이미지 변경

`index.html` 파일에서 다음 부분을 수정:

```html
<!-- 기존 (그라디언트) -->
<div class="hero-bg" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"></div>

<!-- 이미지로 변경 -->
<div class="hero-bg" style="background: url('assets/images/hero/hero-1.jpg') center/cover;"></div>
```

또는 오버레이를 추가하여 텍스트 가독성 향상:

```html
<div class="hero-bg" style="background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('assets/images/hero/hero-1.jpg') center/cover;"></div>
```

### 2. 제품 이미지 변경

`index.html` 파일에서:

```html
<!-- 기존 (그라디언트) -->
<div class="product-image" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">

<!-- 이미지로 변경 -->
<div class="product-image" style="background: url('assets/images/products/velvet-touch.jpg') center/cover;">
```

또는 `<img>` 태그 사용:

```html
<div class="product-image">
    <img src="assets/images/products/velvet-touch.jpg" alt="Velvet Touch Series">
    <span class="product-tag">NEW</span>
</div>
```

`styles.css`에 추가:

```css
.product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

### 3. 브랜드 스토리 이미지 변경

`index.html` 파일에서:

```html
<!-- 기존 -->
<div class="visual-box" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">

<!-- 이미지로 변경 -->
<div class="visual-box" style="background: url('assets/images/brand/brand-story.jpg') center/cover;">
```

### 4. 파비콘 추가

`index.html`의 `<head>` 섹션에 추가:

```html
<link rel="icon" type="image/x-icon" href="assets/images/favicon/favicon.ico">
<link rel="apple-touch-icon" sizes="180x180" href="assets/images/favicon/apple-touch-icon.png">
```

## 🎯 이미지 최적화 도구

### 온라인 도구
- **TinyPNG**: https://tinypng.com/ (PNG/JPG 압축)
- **Squoosh**: https://squoosh.app/ (Google, WebP 변환)
- **SVGOMG**: https://jakearchibald.github.io/svgomg/ (SVG 최적화)

### 로컬 도구
- **ImageOptim** (Mac)
- **FileOptimizer** (Windows)

## 🌈 무료 이미지 리소스

고품질 무료 이미지를 다운로드할 수 있는 사이트:

1. **Unsplash**: https://unsplash.com/
   - 키워드: "phone case", "technology", "minimal", "lifestyle"

2. **Pexels**: https://www.pexels.com/
   - 키워드: "smartphone", "accessories", "modern"

3. **Pixabay**: https://pixabay.com/
   - 무료 상업용 이미지

## 🎨 실제 제품 촬영 가이드

직접 제품 사진을 촬영하는 경우:

### 조명
- 자연광 또는 소프트박스 사용
- 그림자를 최소화
- 균일한 조명 분포

### 배경
- 순백색 또는 단색 배경
- 제품이 돋보이도록 심플하게
- 그라디언트 배경도 효과적

### 구도
- 제품을 중앙에 배치
- 여러 각도 촬영 (정면, 측면, 45도)
- 디테일 클로즈업 샷

### 후반 작업
- 배경 제거 (필요시)
- 색상 보정
- 샤프닝
- 리사이징 및 최적화

## 📱 반응형 이미지 처리

다양한 화면 크기에 대응하기 위해 srcset 사용:

```html
<img 
    src="assets/images/products/velvet-touch-800.jpg"
    srcset="
        assets/images/products/velvet-touch-400.jpg 400w,
        assets/images/products/velvet-touch-800.jpg 800w,
        assets/images/products/velvet-touch-1200.jpg 1200w"
    sizes="(max-width: 768px) 100vw, 50vw"
    alt="Velvet Touch Series">
```

## 🔄 WebP 포맷 사용

성능 향상을 위해 WebP 포맷 사용 권장:

```html
<picture>
    <source srcset="assets/images/hero/hero-1.webp" type="image/webp">
    <source srcset="assets/images/hero/hero-1.jpg" type="image/jpeg">
    <img src="assets/images/hero/hero-1.jpg" alt="Hero Image">
</picture>
```

## 🎨 현재 사용 중인 색상

실제 이미지로 교체하기 전까지, 다음 색상들이 사용되고 있습니다:

1. **히어로 슬라이드 1**: `#667eea → #764ba2` (보라-파랑)
2. **히어로 슬라이드 2**: `#f093fb → #f5576c` (핑크-레드)
3. **히어로 슬라이드 3**: `#4facfe → #00f2fe` (파랑-시안)
4. **Velvet Touch**: `#667eea → #764ba2`
5. **Carbon Fiber**: `#f093fb → #f5576c`
6. **Eco Leather**: `#4facfe → #00f2fe`
7. **Gold Edition**: `#fa709a → #fee140`

## 💡 추가 팁

1. **Lazy Loading**: 이미지 로딩 최적화
   ```html
   <img src="image.jpg" loading="lazy" alt="Description">
   ```

2. **Alt 텍스트**: 접근성을 위해 항상 의미 있는 alt 텍스트 추가

3. **CDN 사용**: 트래픽이 많을 경우 Cloudflare, imgix 등의 이미지 CDN 사용 고려

4. **Progressive JPEG**: 점진적 로딩을 위해 progressive JPEG 사용

## 📞 질문이나 문제가 있나요?

이미지 통합 과정에서 문제가 발생하면 README.md의 이슈 섹션을 참고하세요.

