# 🎨 LUXE Design System

야놀자 그룹의 디자인 철학을 참고하여 제작된 프리미엄 웹 디자인 시스템입니다.  
모던하고 세련된 인터페이스를 구축하기 위한 완전한 가이드라인을 제공합니다.

---

## 📑 목차

1. [디자인 철학](#디자인-철학)
2. [색상 시스템](#색상-시스템)
3. [타이포그래피](#타이포그래피)
4. [그리드 & 레이아웃](#그리드--레이아웃)
5. [간격 시스템](#간격-시스템)
6. [컴포넌트](#컴포넌트)
7. [애니메이션](#애니메이션)
8. [반응형 디자인](#반응형-디자인)
9. [그림자 & 이펙트](#그림자--이펙트)
10. [사용 예제](#사용-예제)

---

## 🎯 디자인 철학

### 핵심 원칙

1. **미니멀리즘** - 불필요한 요소 제거, 본질에 집중
2. **넓은 여백** - 콘텐츠 간 충분한 공간으로 가독성 향상
3. **명확한 위계** - 타이포그래피와 크기로 정보의 우선순위 표현
4. **부드러운 인터랙션** - 자연스러운 애니메이션과 전환 효과
5. **접근성** - 모든 사용자를 위한 배려

### 영감 출처

- **야놀자 그룹** 웹사이트 디자인 시스템
- 모던 웹 디자인 트렌드
- 프리미엄 브랜드 경험

---

## 🎨 색상 시스템

### 기본 색상 팔레트

#### Primary Colors (주요 색상)

```css
--primary-color: #667eea;      /* 보라-파랑 */
--secondary-color: #764ba2;    /* 진한 보라 */
--accent-color: #f5576c;       /* 핑크-레드 (강조) */
```

**사용 예시:**
- Primary: 버튼, 링크, 주요 CTA
- Secondary: 강조 요소, 아이콘
- Accent: 특별한 강조, 할인 태그

#### Text Colors (텍스트 색상)

```css
--text-dark: #1a1a1a;          /* 주요 텍스트 */
--text-light: #666666;         /* 보조 텍스트, 설명 */
--text-muted: #999999;         /* 덜 중요한 정보 */
```

**적용 규칙:**
- Heading: `--text-dark`
- Body text: `--text-dark`
- Description: `--text-light`
- Caption: `--text-muted`

#### Background Colors (배경 색상)

```css
--bg-light: #ffffff;           /* 기본 배경 */
--bg-gray: #f8f9fa;            /* 대체 섹션 배경 */
--bg-dark: #1a1a1a;            /* 다크 섹션 */
```

### 그라디언트 팔레트

프리미엄 느낌을 위한 그라디언트 컬렉션:

#### 1. Purple Dream
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```
**용도**: 히어로 섹션, 프리미엄 제품

#### 2. Pink Passion
```css
background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
```
**용도**: 베스트셀러, 인기 아이템

#### 3. Ocean Blue
```css
background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
```
**용도**: 친환경 제품, 신선함 표현

#### 4. Sunset Gold
```css
background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
```
**용도**: 한정판, 프리미엄 에디션

#### 5. Gradient Overlay (이미지 위)
```css
background: linear-gradient(
  rgba(0, 0, 0, 0.4), 
  rgba(0, 0, 0, 0.4)
), url('image.jpg');
```
**용도**: 텍스트 가독성 향상

### 색상 활용 가이드

#### 대비율 (WCAG 준수)
- **텍스트 & 배경 대비**: 최소 4.5:1 (AA 등급)
- **큰 텍스트**: 최소 3:1
- **인터랙티브 요소**: 최소 3:1

#### 색상 조합 예시

**조합 1: 밝은 배경**
```css
background: #ffffff;
color: #1a1a1a;
accent: #667eea;
```

**조합 2: 다크 배경**
```css
background: #1a1a1a;
color: #ffffff;
accent: #667eea;
```

**조합 3: 컬러 섹션**
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
color: #ffffff;
accent: rgba(255, 255, 255, 0.9);
```

---

## 📝 타이포그래피

### 폰트 스택

```css
font-family: -apple-system, BlinkMacSystemFont, 
             'Segoe UI', 'Roboto', 'Helvetica Neue', 
             Arial, sans-serif;
```

**시스템 폰트 사용 이유:**
- 빠른 로딩 속도
- 각 플랫폼에 최적화
- 일관된 사용자 경험

### 타이포그래피 스케일

#### Heading (제목)

```css
/* H1 - 히어로 타이틀 */
font-size: 64px;
font-weight: 700;
line-height: 1.2;
letter-spacing: -2px;

/* H2 - 섹션 타이틀 */
font-size: 48px;
font-weight: 700;
line-height: 1.3;
letter-spacing: -1px;

/* H3 - 서브 섹션 */
font-size: 32px;
font-weight: 600;
line-height: 1.4;
letter-spacing: -0.5px;

/* H4 - 카드 타이틀 */
font-size: 24px;
font-weight: 600;
line-height: 1.4;
letter-spacing: 0;

/* H5 - 작은 제목 */
font-size: 20px;
font-weight: 600;
line-height: 1.5;
```

#### Body Text (본문)

```css
/* 기본 본문 */
font-size: 18px;
line-height: 1.8;
font-weight: 400;

/* 부제목 */
font-size: 20px;
line-height: 1.6;
font-weight: 300;

/* 작은 텍스트 */
font-size: 15px;
line-height: 1.6;
font-weight: 400;

/* 캡션 */
font-size: 14px;
line-height: 1.5;
font-weight: 400;
```

### Font Weight 가이드

```css
font-weight: 300;  /* Light - 부제목, 인용 */
font-weight: 400;  /* Regular - 본문 */
font-weight: 500;  /* Medium - 강조, 네비게이션 */
font-weight: 600;  /* Semibold - 서브헤딩 */
font-weight: 700;  /* Bold - 메인 헤딩, 버튼 */
```

### Letter Spacing (자간)

```css
/* 큰 제목 */
letter-spacing: -2px;    /* 64px 이상 */
letter-spacing: -1px;    /* 48px */
letter-spacing: -0.5px;  /* 32px */

/* 본문 */
letter-spacing: 0;       /* 기본 */
letter-spacing: 0.5px;   /* 버튼 텍스트 */
```

### 타이포그래피 모범 사례

1. **가독성 우선**: line-height 1.6 이상
2. **명확한 위계**: 크기 차이 1.5배 이상
3. **적절한 자간**: 큰 텍스트는 음수 자간
4. **일관성 유지**: 정해진 스케일 준수

---

## 📐 그리드 & 레이아웃

### 컨테이너 시스템

```css
.container {
    max-width: 1200px;    /* 최대 너비 */
    margin: 0 auto;       /* 중앙 정렬 */
    padding: 0 24px;      /* 좌우 여백 */
}

/* 반응형 컨테이너 */
@media (max-width: 768px) {
    .container {
        padding: 0 16px;
    }
}
```

### Grid 시스템

#### Auto-fit Grid (반응형)

```css
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 32px;
}
```

**활용:**
- 제품 그리드
- 특징 카드
- 블로그 포스트

#### 고정 컬럼 Grid

```css
/* 2 컬럼 */
.grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
}

/* 3 컬럼 */
.grid-3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
}

/* 4 컬럼 */
.grid-4 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
}
```

### Flexbox 레이아웃

#### 네비게이션

```css
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
}
```

#### 카드 레이아웃

```css
.card {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
```

---

## 📏 간격 시스템

### Spacing Scale (8px 기반)

```css
/* 간격 변수 */
--space-xs: 8px;      /* 0.5rem */
--space-sm: 16px;     /* 1rem */
--space-md: 24px;     /* 1.5rem */
--space-lg: 32px;     /* 2rem */
--space-xl: 40px;     /* 2.5rem */
--space-2xl: 60px;    /* 3.75rem */
--space-3xl: 80px;    /* 5rem */
--space-4xl: 120px;   /* 7.5rem */
```

### 적용 규칙

#### Section Padding

```css
/* 기본 섹션 */
padding: 120px 0;

/* 모바일 */
@media (max-width: 768px) {
    padding: 80px 0;
}
```

#### Component Spacing

```css
/* 카드 내부 여백 */
padding: 24px;

/* 버튼 여백 */
padding: 18px 48px;

/* 작은 버튼 */
padding: 12px 32px;
```

#### Gap (요소 간 간격)

```css
/* 큰 간격 */
gap: 80px;    /* 섹션 내 주요 블록 */
gap: 60px;    /* 관련 그룹 */
gap: 40px;    /* 카드 그리드 */
gap: 32px;    /* 리스트 아이템 */
gap: 24px;    /* 작은 그룹 */
gap: 16px;    /* 밀접한 요소 */
gap: 8px;     /* 라벨-입력 */
```

---

## 🧩 컴포넌트

### 버튼

#### Primary Button

```css
.button-primary {
    padding: 18px 48px;
    font-size: 18px;
    font-weight: 600;
    background: var(--primary-color);
    color: white;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.button-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
}
```

#### Outline Button

```css
.button-outline {
    padding: 18px 48px;
    font-size: 18px;
    font-weight: 600;
    background: transparent;
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.button-outline:hover {
    background: var(--primary-color);
    color: white;
}
```

#### Button Sizes

```css
/* Large */
.btn-lg {
    padding: 20px 56px;
    font-size: 20px;
}

/* Medium (기본) */
.btn-md {
    padding: 18px 48px;
    font-size: 18px;
}

/* Small */
.btn-sm {
    padding: 12px 32px;
    font-size: 16px;
}
```

### 카드

#### Basic Card

```css
.card {
    background: white;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.card-image {
    height: 300px;
    background-size: cover;
    background-position: center;
}

.card-content {
    padding: 24px;
}

.card-title {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 8px;
}

.card-description {
    color: var(--text-light);
    margin-bottom: 16px;
    font-size: 14px;
}
```

#### Feature Card

```css
.feature-card {
    text-align: center;
    padding: 40px 24px;
}

.feature-icon {
    font-size: 64px;
    margin-bottom: 24px;
}

.feature-title {
    font-size: 24px;
    margin-bottom: 16px;
    font-weight: 600;
}

.feature-text {
    color: var(--text-light);
    line-height: 1.8;
    font-size: 15px;
}
```

### 네비게이션

#### Fixed Navbar

```css
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    z-index: 1000;
    padding: 20px 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

/* 스크롤 시 */
.navbar.scrolled {
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}
```

#### Nav Menu

```css
.nav-menu {
    display: flex;
    list-style: none;
    gap: 40px;
}

.nav-menu a {
    text-decoration: none;
    color: var(--text-dark);
    font-weight: 500;
    transition: color 0.3s ease;
}

.nav-menu a:hover {
    color: var(--primary-color);
}
```

### 태그

```css
.tag {
    display: inline-block;
    padding: 6px 16px;
    background: white;
    color: var(--text-dark);
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
}

/* 컬러 변형 */
.tag-primary {
    background: var(--primary-color);
    color: white;
}

.tag-accent {
    background: var(--accent-color);
    color: white;
}
```

---

## ✨ 애니메이션

### Transition 시스템

#### 기본 Transition

```css
--transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

**용도**: 버튼, 링크, 카드 등 대부분의 인터랙션

#### 느린 Transition

```css
--transition-slow: all 0.6s ease-out;
```

**용도**: 큰 요소, 섹션 전환

### Keyframe 애니메이션

#### Fade In Up

```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in-up {
    animation: fadeInUp 1s ease-out;
}
```

#### Fade In

```css
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.fade-in {
    animation: fadeIn 0.6s ease-out;
}
```

### Scroll 애니메이션

```css
.fade-in {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease-out, 
                transform 0.6s ease-out;
}

.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}
```

**JavaScript 구현:**

```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});
```

### Hover 효과

#### 카드 Hover

```css
.card {
    transition: transform 0.3s ease, 
                box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}
```

#### 버튼 Hover

```css
.button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
}
```

---

## 📱 반응형 디자인

### 브레이크포인트

```css
/* Mobile First 접근 */

/* Extra Small (기본) */
/* 0px ~ 479px */

/* Small (모바일) */
@media (max-width: 480px) {
    /* 스타일 */
}

/* Medium (태블릿) */
@media (max-width: 768px) {
    /* 스타일 */
}

/* Large (데스크탑) */
@media (min-width: 769px) {
    /* 스타일 */
}

/* Extra Large */
@media (min-width: 1200px) {
    /* 스타일 */
}
```

### 반응형 타이포그래피

```css
/* 히어로 타이틀 */
.hero-title {
    font-size: 64px;  /* 데스크탑 */
}

@media (max-width: 768px) {
    .hero-title {
        font-size: 40px;  /* 태블릿 */
    }
}

@media (max-width: 480px) {
    .hero-title {
        font-size: 32px;  /* 모바일 */
    }
}
```

### 반응형 Grid

```css
/* 데스크탑: 4 컬럼 */
.grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
}

/* 태블릿: 2 컬럼 */
@media (max-width: 768px) {
    .grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
    }
}

/* 모바일: 1 컬럼 */
@media (max-width: 480px) {
    .grid {
        grid-template-columns: 1fr;
        gap: 16px;
    }
}
```

### 반응형 간격

```css
.section {
    padding: 120px 0;  /* 데스크탑 */
}

@media (max-width: 768px) {
    .section {
        padding: 80px 0;  /* 태블릿 */
    }
}

@media (max-width: 480px) {
    .section {
        padding: 60px 0;  /* 모바일 */
    }
}
```

---

## 🌟 그림자 & 이펙트

### 그림자 시스템

```css
/* 레벨 1 - 미세한 깊이 */
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

/* 레벨 2 - 카드 기본 */
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

/* 레벨 3 - 강조 */
box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);

/* 레벨 4 - Hover */
box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);

/* 레벨 5 - 최상위 */
box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
```

### 컬러 그림자

```css
/* Primary 그림자 */
box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);

/* Accent 그림자 */
box-shadow: 0 8px 20px rgba(245, 87, 108, 0.4);
```

### Border Radius

```css
--radius-sm: 8px;      /* 작은 요소 */
--radius-md: 12px;     /* 중간 요소 */
--radius-lg: 16px;     /* 카드 */
--radius-xl: 24px;     /* 큰 카드 */
--radius-full: 50px;   /* 버튼, 필 */
--radius-circle: 50%;  /* 원형 */
```

### Backdrop Blur

```css
/* 반투명 배경 */
background: rgba(255, 255, 255, 0.95);
backdrop-filter: blur(10px);

/* 다크 오버레이 */
background: rgba(0, 0, 0, 0.4);
backdrop-filter: blur(5px);
```

---

## 💻 사용 예제

### 완전한 히어로 섹션

```html
<section class="hero">
    <div class="hero-content">
        <h1 class="hero-title">Your Amazing Title</h1>
        <p class="hero-subtitle">Your compelling subtitle</p>
        <button class="button-primary">Get Started</button>
    </div>
</section>
```

```css
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    text-align: center;
    padding: 0 24px;
}

.hero-content {
    max-width: 800px;
}

.hero-title {
    font-size: 64px;
    font-weight: 700;
    margin-bottom: 24px;
    letter-spacing: -2px;
    animation: fadeInUp 1s ease-out;
}

.hero-subtitle {
    font-size: 28px;
    font-weight: 300;
    margin-bottom: 40px;
    animation: fadeInUp 1s ease-out 0.2s backwards;
}
```

### 제품 카드 그리드

```html
<section class="products">
    <div class="container">
        <div class="section-header">
            <h2>Our Products</h2>
            <p>Discover our collection</p>
        </div>
        
        <div class="products-grid">
            <div class="product-card">
                <div class="product-image">
                    <span class="tag">NEW</span>
                </div>
                <div class="product-info">
                    <h3>Product Name</h3>
                    <p>Product description</p>
                    <span class="price">$99</span>
                </div>
            </div>
            <!-- More cards -->
        </div>
    </div>
</section>
```

### 특징 섹션

```html
<section class="features">
    <div class="container">
        <div class="features-grid">
            <div class="feature-card fade-in">
                <div class="feature-icon">💎</div>
                <h3>Feature Title</h3>
                <p>Feature description</p>
            </div>
            <!-- More features -->
        </div>
    </div>
</section>
```

---

## 🛠️ 구현 가이드

### CSS 변수 설정

프로젝트 시작 시 다음 변수들을 설정하세요:

```css
:root {
    /* Colors */
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f5576c;
    --text-dark: #1a1a1a;
    --text-light: #666;
    --bg-light: #ffffff;
    --bg-gray: #f8f9fa;
    
    /* Spacing */
    --space-xs: 8px;
    --space-sm: 16px;
    --space-md: 24px;
    --space-lg: 32px;
    --space-xl: 40px;
    --space-2xl: 60px;
    --space-3xl: 80px;
    --space-4xl: 120px;
    
    /* Radius */
    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 16px;
    --radius-xl: 24px;
    --radius-full: 50px;
    
    /* Transition */
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Reset & Base Styles

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 
                 'Segoe UI', 'Roboto', 'Helvetica Neue', 
                 Arial, sans-serif;
    line-height: 1.6;
    color: var(--text-dark);
    background: var(--bg-light);
    overflow-x: hidden;
}

img {
    max-width: 100%;
    height: auto;
    display: block;
}

a {
    text-decoration: none;
    color: inherit;
}

button {
    font-family: inherit;
    cursor: pointer;
}
```

---

## 📚 참고 자료

### 영감을 받은 사이트
- [야놀자 그룹](https://www.yanoljagroup.com/ko)
- Apple Design
- Stripe Design System
- Material Design

### 유용한 도구
- **색상 팔레트**: Coolors, Adobe Color
- **그라디언트**: UI Gradients, Gradient Hunt
- **타이포그래피**: Type Scale, Modular Scale
- **아이콘**: Feather Icons, Heroicons
- **이미지**: Unsplash, Pexels

### 추가 학습 자료
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [Smashing Magazine](https://www.smashingmagazine.com/)

---

## 🎯 빠른 시작 체크리스트

새 프로젝트에 이 디자인 시스템을 적용할 때:

- [ ] CSS 변수 설정 (`:root`)
- [ ] Reset & Base 스타일 추가
- [ ] 컨테이너 시스템 구축
- [ ] 타이포그래피 스케일 정의
- [ ] 컴포넌트 라이브러리 구축
- [ ] 반응형 브레이크포인트 설정
- [ ] 애니메이션 시스템 구현
- [ ] 접근성 테스트
- [ ] 성능 최적화

---

## 📄 라이선스

이 디자인 시스템은 MIT 라이선스 하에 배포됩니다.  
자유롭게 사용, 수정, 배포할 수 있습니다.

---

## 🤝 기여

이 디자인 시스템을 개선하고 싶으시다면:

1. 이슈 또는 제안 사항 등록
2. 포크 후 개선사항 구현
3. Pull Request 제출

---

**마지막 업데이트**: 2025-10-04  
**버전**: 1.0.0  
**제작**: LUXE Design Team

---

이 디자인 시스템이 여러분의 프로젝트에 도움이 되기를 바랍니다! 🎨✨

