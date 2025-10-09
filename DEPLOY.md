# 🚀 배포 가이드

## GitHub 저장소 생성 및 푸시

### 1. GitHub에서 새 저장소 생성
브라우저에서 https://github.com/new 접속

**설정:**
- Repository name: `premium-case-landing`
- Description: "Premium designer phone case landing page with Tailwind CSS v4"
- Visibility: **Public**
- ⚠️ **중요**: README, .gitignore, license 모두 체크 해제

### 2. 로컬 저장소 연결 및 푸시

새 터미널을 열고 다음 명령어 실행:
(YOUR_USERNAME을 실제 GitHub 사용자명으로 변경)

```bash
cd C:\Users\user\Documents\251005_landingtest_02

# 원격 저장소 연결
git remote add origin https://github.com/YOUR_USERNAME/premium-case-landing.git

# 브랜치 이름 변경 (master → main)
git branch -M main

# GitHub에 푸시
git push -u origin main
```

## Vercel 배포

### 1. Vercel 계정 연결
1. https://vercel.com 접속
2. "Sign Up" 또는 "Log In"
3. **"Continue with GitHub"** 선택 (추천)

### 2. 프로젝트 배포
1. Vercel 대시보드에서 **"Add New..." → "Project"** 클릭
2. GitHub 저장소 목록에서 **"premium-case-landing"** 선택
3. **"Import"** 클릭

**설정 확인:**
- Framework Preset: **Vite** (자동 감지)
- Build Command: `npm run build` (기본값)
- Output Directory: `dist` (기본값)
- Install Command: `npm install` (기본값)

4. **"Deploy"** 클릭

### 3. 배포 완료!
약 2-3분 후 배포 완료:
- Production URL: `https://premium-case-landing-xxx.vercel.app`
- 자동 HTTPS 적용
- CDN 자동 배포

## Tally 폼 연동

배포 후 Tally 이메일 구독 설정:

1. [Tally.so](https://tally.so) 접속하여 폼 생성
2. 폼 ID 복사
3. `src/App.tsx` 수정:
   ```tsx
   <EmailSubscribe tallyFormId="실제_폼_ID" />
   ```
4. 변경사항 커밋 및 푸시:
   ```bash
   git add src/App.tsx
   git commit -m "Add Tally form ID"
   git push
   ```
5. Vercel이 자동으로 재배포 (약 1분)

## 커스텀 도메인 연결 (선택사항)

Vercel 프로젝트 설정:
1. Settings → Domains
2. 도메인 입력 (예: premiumcase.com)
3. DNS 설정 안내에 따라 도메인 제공업체에서 레코드 추가
4. 자동 SSL 인증서 발급

---

## 자동 배포

GitHub에 푸시할 때마다 Vercel이 자동 배포:
- **main 브랜치**: Production 배포
- **다른 브랜치**: Preview 배포 (미리보기 URL 생성)

## 성능 최적화

배포 후 확인:
- ✅ Lighthouse 점수 95+
- ✅ 전 세계 CDN 적용
- ✅ 자동 이미지 최적화
- ✅ Gzip/Brotli 압축

---

**문제가 발생하면 README.md를 참고하세요!**
