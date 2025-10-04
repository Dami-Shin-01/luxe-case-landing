
# LUXE CASE - Premium Phone Case Landing Page

야놀자 그룹의 디자인 시스템을 참고하여 제작된 프리미엄 폰케이스 브랜드 랜딩 페이지입니다.

## 🎨 디자인 특징

### 야놀자 디자인 시스템 참고 요소
- **깔끔한 타이포그래피**: 넓은 자간과 명확한 위계구조
- **넓은 여백**: 콘텐츠 간 충분한 공간 확보
- **모던한 컬러 팔레트**: 그라디언트와 다크/라이트 조합
- **카드 기반 레이아웃**: 그리드 시스템을 활용한 제품 배치
- **부드러운 애니메이션**: 스크롤 기반 fade-in 효과
- **심플한 네비게이션**: 고정 헤더와 언어 전환 버튼

## 📁 프로젝트 구조

```
251005_landing_test-02/
├── index.html          # 메인 HTML 파일
├── styles.css          # 스타일시트
├── script.js           # JavaScript 인터랙션
├── README.md           # 프로젝트 문서
├── DESIGN_SYSTEM.md    # 디자인 시스템 가이드 ⭐
├── DEPLOYMENT.md       # 배포 가이드
├── DEPLOYMENT_INFO.md  # 배포 정보
└── ASSET_GUIDE.md      # 이미지 및 에셋 가이드
```

## 🚀 실행 방법

1. 프로젝트 폴더를 엽니다
2. `index.html` 파일을 브라우저에서 실행합니다
3. 또는 Live Server를 사용하여 로컬 서버로 실행합니다

```bash
# VS Code의 Live Server 확장 프로그램 사용 권장
# 또는 Python 간단한 HTTP 서버
python -m http.server 8000
```

## 📱 페이지 섹션

### 1. 히어로 슬라이더
- 3개의 슬라이드로 구성된 풀스크린 히어로 섹션
- 자동 재생 (5초 간격)
- 좌우 화살표 및 점 네비게이션
- 키보드 화살표 키로도 조작 가능

### 2. 최신 컬렉션 (Latest Collection)
- 4개의 제품 카드 그리드
- Hover 효과와 태그 시스템
- 제품명, 설명, 가격 표시

### 3. 브랜드 스토리 (Brand Story)
- 2단 레이아웃 (텍스트 + 비주얼)
- 브랜드 철학 및 가치 전달

### 4. 프리미엄 특징 (Premium Features)
- 6개의 특징 카드 그리드
- 아이콘과 상세 설명
- 스크롤 애니메이션

### 5. 글로벌 통계 (Global Presence)
- 3개의 주요 통계 수치
- 카운터 애니메이션 효과
- 다크 배경과 그라디언트 텍스트

### 6. CTA 섹션
- 행동 유도 버튼
- 그라디언트 배경

### 7. Footer
- 4단 그리드 레이아웃
- 제품, 회사 정보, 연락처
- 소셜 미디어 링크

## 🎯 주요 기능

### 인터랙션
- **히어로 슬라이더**: 자동/수동 슬라이드 전환
- **스크롤 애니메이션**: Fade-in 효과
- **카운터 애니메이션**: 통계 숫자 증가 효과
- **부드러운 스크롤**: 앵커 링크 클릭 시
- **네비게이션 효과**: 스크롤 시 배경 변화

### 반응형 디자인
- 모바일 (< 480px)
- 태블릿 (< 768px)
- 데스크탑 (> 768px)

## 🎨 디자인 시스템

이 프로젝트에서 사용된 디자인 시스템은 별도의 문서로 제공됩니다.  
다른 프로젝트에도 적용할 수 있도록 상세하게 작성되었습니다.

**📖 [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) 참고**

### 포함 내용:
- ✨ 색상 시스템 (Primary, Secondary, Gradients)
- 📝 타이포그래피 스케일
- 📐 Grid & 레이아웃 시스템
- 📏 간격 시스템 (8px 기반)
- 🧩 재사용 가능한 컴포넌트
- ✨ 애니메이션 라이브러리
- 📱 반응형 브레이크포인트
- 🌟 그림자 & 이펙트
- 💻 실제 구현 예제

## 🎨 컬러 팔레트

```css
--primary-color: #667eea    /* 보라-파랑 */
--secondary-color: #764ba2  /* 보라 */
--accent-color: #f5576c     /* 핑크-레드 */
--text-dark: #1a1a1a        /* 다크 텍스트 */
--text-light: #666          /* 라이트 텍스트 */
--bg-light: #ffffff         /* 화이트 배경 */
--bg-gray: #f8f9fa          /* 그레이 배경 */
```

### 제품 그라디언트
1. **Velvet Touch**: `#667eea → #764ba2`
2. **Carbon Fiber**: `#f093fb → #f5576c`
3. **Eco Leather**: `#4facfe → #00f2fe`
4. **Gold Edition**: `#fa709a → #fee140`

## ⚙️ 커스터마이징

### 제품 추가
`index.html`의 `.products-grid` 섹션에 다음 형식으로 추가:

```html
<div class="product-card fade-in">
    <div class="product-image" style="background: linear-gradient(...);">
        <span class="product-tag">NEW</span>
    </div>
    <div class="product-info">
        <h3>제품명</h3>
        <p>제품 설명</p>
        <span class="product-price">₩가격</span>
    </div>
</div>
```

### 색상 변경
`styles.css`의 `:root` 변수를 수정하여 전체 컬러 테마를 변경할 수 있습니다.

### 슬라이드 추가
`index.html`의 `.hero-slider` 섹션에 슬라이드 추가 후, `.slider-dots`에도 dot 추가

## 🛠 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: Grid, Flexbox, Animations
- **Vanilla JavaScript**: 순수 자바스크립트 (프레임워크 없음)

## 📝 브라우저 지원

- Chrome (최신)
- Firefox (최신)
- Safari (최신)
- Edge (최신)

## 📄 라이선스

이 프로젝트는 개인 학습 및 포트폴리오 목적으로 제작되었습니다.

## 🔗 참고 자료

- [야놀자 그룹 웹사이트](https://www.yanoljagroup.com/ko)
- 디자인 시스템: 야놀자 그룹 참고

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 이슈를 등록해주세요.

