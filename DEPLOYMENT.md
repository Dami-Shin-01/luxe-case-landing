# 🚀 GitHub Pages 배포 가이드

LUXE CASE 랜딩 페이지를 GitHub Pages를 통해 배포하는 방법입니다.

## 📋 사전 준비

1. **GitHub 계정** - https://github.com 에 가입
2. **Git 설치** - https://git-scm.com/downloads
3. **프로젝트 파일** - 현재 프로젝트 폴더

## 🔧 배포 단계

### 1단계: GitHub 저장소 생성

1. GitHub에 로그인 후 우측 상단의 `+` 버튼 클릭
2. `New repository` 선택
3. 저장소 정보 입력:
   - **Repository name**: `luxe-case-landing` (원하는 이름)
   - **Description**: `Premium Phone Case Brand Landing Page`
   - **Public** 선택 (GitHub Pages는 Public 저장소에서 무료)
   - `Add a README file`, `Add .gitignore`, `Choose a license`는 **체크하지 않음**
4. `Create repository` 클릭

### 2단계: 로컬 저장소 연결 및 푸시

프로젝트 폴더에서 터미널(PowerShell)을 열고 다음 명령어를 실행:

```powershell
# 현재 디렉토리 확인
cd "C:\Users\eansa\OneDrive\문서\251005_landing_test-02"

# Git 초기화 (이미 완료됨)
# git init

# 사용자 정보 설정 (처음 한 번만)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# 모든 파일 스테이징
git add .

# 커밋
git commit -m "Initial commit: LUXE CASE landing page"

# GitHub 저장소 연결 (본인의 저장소 URL로 변경)
git remote add origin https://github.com/YOUR_USERNAME/luxe-case-landing.git

# 메인 브랜치로 푸시
git branch -M main
git push -u origin main
```

**주의**: `YOUR_USERNAME`을 본인의 GitHub 사용자명으로 변경하세요!

### 3단계: GitHub Pages 활성화

1. GitHub 저장소 페이지로 이동
2. 상단의 `Settings` 탭 클릭
3. 왼쪽 메뉴에서 `Pages` 클릭
4. **Source** 섹션에서:
   - Branch: `main` 선택
   - Folder: `/ (root)` 선택
5. `Save` 버튼 클릭

### 4단계: 배포 확인

- 약 1-2분 후 페이지가 배포됩니다
- 배포 완료 후 다음 URL에서 확인 가능:
  ```
  https://YOUR_USERNAME.github.io/luxe-case-landing/
  ```

## 🌐 사용자 정의 도메인 (선택사항)

### 본인 도메인 연결하기

1. 도메인 등록업체(가비아, 후이즈, 등)에서 도메인 구매
2. DNS 설정에서 다음 A 레코드 추가:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
3. CNAME 파일 생성:
   ```powershell
   echo "yourdomain.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```
4. GitHub Settings > Pages > Custom domain에 도메인 입력
5. `Enforce HTTPS` 체크

## 🔄 업데이트 방법

코드를 수정한 후 다음 명령어로 배포:

```powershell
# 변경사항 확인
git status

# 변경된 파일 스테이징
git add .

# 커밋
git commit -m "Update: 변경 내용 설명"

# 푸시
git push
```

GitHub Pages는 자동으로 업데이트됩니다 (1-2분 소요).

## 📊 배포 상태 확인

### GitHub Actions 확인
1. 저장소 페이지의 `Actions` 탭 클릭
2. 최근 워크플로우 실행 상태 확인
3. 초록색 체크마크 = 배포 성공
4. 빨간색 X = 배포 실패 (로그 확인)

## 🛠️ 문제 해결

### 페이지가 표시되지 않을 때

1. **Settings > Pages**에서 배포 상태 확인
2. **Actions** 탭에서 배포 로그 확인
3. `.nojekyll` 파일이 있는지 확인 (이미 포함됨)
4. 브라우저 캐시 삭제 후 재시도

### 404 에러가 발생할 때

- 저장소 이름과 URL이 정확한지 확인
- `index.html` 파일이 루트에 있는지 확인
- 파일명 대소문자 확인 (GitHub Pages는 대소문자 구분)

### CSS/JS 파일이 로드되지 않을 때

- 파일 경로가 상대 경로인지 확인
- 현재 프로젝트는 모두 상대 경로로 설정되어 있어 문제없음

## 🎯 성능 최적화 팁

### 1. 이미지 최적화
```bash
# 이미지 압축 도구 사용
# TinyPNG, Squoosh 등
```

### 2. 코드 압축 (선택사항)
```bash
# CSS 압축
# CSS Minifier 온라인 도구 사용

# JS 압축
# JavaScript Minifier 온라인 도구 사용
```

### 3. CDN 활용 (선택사항)
- Cloudflare 연동으로 전 세계 빠른 로딩

## 📈 분석 도구 추가 (선택사항)

### Google Analytics 추가

`index.html`의 `<head>` 섹션에 추가:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔒 보안

- **HTTPS 강제 활성화**: Settings > Pages > Enforce HTTPS 체크
- 민감한 정보는 절대 커밋하지 않기
- API 키는 환경 변수 사용

## 📱 모바일 테스트

배포 후 다음 도구로 모바일 호환성 테스트:
- Google Mobile-Friendly Test
- PageSpeed Insights
- BrowserStack (다양한 디바이스 테스트)

## 🆘 추가 도움이 필요하신가요?

- [GitHub Pages 공식 문서](https://docs.github.com/en/pages)
- [Git 가이드](https://git-scm.com/book/ko/v2)
- [GitHub 도움말](https://docs.github.com)

---

## 🎉 배포 완료 체크리스트

- [ ] GitHub 저장소 생성
- [ ] 로컬 저장소와 연결
- [ ] 코드 푸시 완료
- [ ] GitHub Pages 활성화
- [ ] 배포 URL 확인
- [ ] 모든 기능 정상 작동 확인
- [ ] 모바일 반응형 테스트
- [ ] 성능 최적화 (선택)
- [ ] 분석 도구 설정 (선택)
- [ ] 사용자 정의 도메인 연결 (선택)

배포 성공을 축하합니다! 🎊

