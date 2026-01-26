# Portfolio

Next.js, TypeScript, Tailwind CSS 기반으로 제작한 개인 포트폴리오 사이트입니다.  
2025년 11월 전체 구조와 UI/UX를 재정비하여 사이트를 전면 리뉴얼했으며,  
2026년 1월에는 Server-first 아키텍처를 중심으로 구조 리팩토링을 진행했습니다.

---

## 🧭 프로젝트 개요

- **기간:** 2024.07 ~ 2026.01
- **유형:** Personal Project / Fullstack
- **담당:** 전체 기능 설계 및 프론트엔드 구현, Vercel 배포

---

## 🛠 기술 스택

| 구분                       | 기술 스택                                       |
| -------------------------- | ----------------------------------------------- |
| Frontend                   | HTML5, Tailwind CSS, TypeScript, React, Next.js |
| Infra & Deployment         | Vercel                                          |
| Collaboration & Versioning | GitHub                                          |

---

## 🎯 주요 기능

- 자기소개: 소개 글과 프로필을 통해 방문자가 빠르게 정보를 파악할 수 있도록 구성
- 기술 스택: 보유한 핵심 기술 역량을 간결하게 정리
- 개발 경험: 주요 프로젝트와 개발 과정을 요약하여 소개
- 프로젝트 목록: 개인 및 팀 프로젝트를 카드 형태로 제공
- 프로젝트 상세: 각 프로젝트의 배경, 문제 해결 과정, 배운 점을 상세히 기록
- 다국어 지원: i18n 라이브러리를 활용한 한국어·일본어 전환 기능 구현

---

## 🧩 리팩토링 (Server-first + Client Islands)

렌더링 비용과 유지보수성을 개선하기 위해  
화면 대부분을 **Server Component**로 구성하고,  
상호작용이 필요한 부분만 **Client Component(클라이언트 아일랜드)** 로 분리했습니다.

### 1. `use client` 최소화

- 번역 및 정적 콘텐츠는 `next-intl/server` 기반으로 서버에서 렌더링
- 브라우저 API(`window`, 이벤트 핸들링, 상태 관리 등)가 필요한 경우에만
  Client Component로 분리

👉 UI 전체를 클라이언트로 구성하지 않고,  
**상호작용 단위로 최소 범위의 클라이언트 아일랜드를 구성**했습니다.

### 2. 폴더 구조 정리 (Feature / Shared 분리)

- `app/` : 라우팅 및 페이지 조립(Composition) 역할
- `features/` : 도메인 단위 UI 및 화면 구성 로직
- `shared/` : 공용 UI 컴포넌트, 유틸 함수, Provider 등

👉 페이지 계층은 얇게 유지하고,  
**UI와 도메인 로직을 feature 단위로 관리**하도록 구조를 정리했습니다.

---

## 🗂️ 프로젝트 구조

```txt
src/
  app/
    [locale]/
      page.tsx
      projects/
        [slug]/
          page.tsx
          not-found.tsx
  features/
    home/
    project-detail/
    layout/
  shared/
    ui/
    utils/
    types/
messages/
  ko.json
  ja.json
```

## 📎 기타 정보

개발 배경, 문제 해결 과정, 배운 점 등은
포트폴리오 사이트에서 정리해두었습니다.

- https://ste1lar.dev/projects/portfolio
