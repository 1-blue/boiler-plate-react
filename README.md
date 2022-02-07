## 1. 설명
`React.js`의 `Hook`방식으로 프로젝트 시작할 때 사용할 boiler-plate

직접 기본적인 웹펙설정, 기본적인 라우팅처리, `eslint`와 `prettier`설정, 몇 가지 아이콘 및 로고 제공

## 2. 폴더 구조
```
├─ .env.development
├─ .env.production
├─ .eslintrc.js
├─ .gitignore
├─ .prettierrc
├─ index.js
├─ package-lock.json
├─ package.json
├─ README.md
├─ webpack.config.js
│
├─public
│   ├─favicon.ico
│   └─index.html
└─src
    ├─assets
    │  ├─favicon
    │  └─icon
    ├─components
    │  ├─AppLayout
    │  └─common
    ├─css
    ├─hooks
    ├─pages
    └─utils
```

- 폴더 역할
  1. `.env.development`: 개발용 환경변수 설정 파일
  2. `.env.production`: 배포용 환경변수 설정 파일
  3. `.eslintrc.js`: `eslint` 설정 파일
  4. `.prettierrc`: `prettier` 설정 파일
  5. `.gitignore`: 커밋하지 않을 파일 설정한 파일
  6. `App.jsx`: `react-router-dom v6`를 이용한 라우팅 처리
  7. `index.js`: 진입점 및 store 등록
  8. `package.json`: 설치할 라이브러리 기록한 파일
  9. `webpack.config.js`: 웹펙 설정 파일
  10. `public`: 개발용으로 웹펙데브서버 실행 시 보여줄 스테틱 폴더
  ( `index.html`은 `HtmlWebpackPlugin`이 사용할 html 템플릿, `favicon.ico`는 개발과 배포시 보여줄 페비콘 )
  11. `src`: 소스코드들을 모아놓은 폴더
  - `assets`: `favaicon`, `icon`, `logo` 등의 `svg`, `png`파일을 넣은 폴더
  - `components`: 컴포넌트들을 넣은 폴더
    - `components/common`: 순수 컴포넌트들을 넣은 폴더 ( 재사용이 쉬운 컴포넌트들 )
    - `components/layout`: 공통 레이아웃 컴포넌트를 넣은 폴더
    - `components/navigation`: 네비게이션 컴포넌트를 넣은 폴더
    - `components/routes`: `react-router-dom`을 이용한 라우팅처리 컴포넌트를 넣은 폴더
    - `components/layout`: 공통 레이아웃이 작성된 파일
  - `css`: reset, common, animation 관련 css를 넣은 폴더
  - `hooks`: 사용자 정의 hooks들을 넣은 폴더
  - `pages`: 페이지 컴포넌트들을 넣은 폴더
  - `util`: 여러 유틸 함수를 넣은 폴더

## 3. 가이드 라인
### 3.1 `.env.production` 생성
배포용으로 사용할 환경변수 등록

### 3.2 `.env.development` 생성
개발용으로 사용할 환경변수 등록

### 3.3 패키지 설치 및 실행
```bash
# 패키지 설치
$ npm install

# 개발용 실행
$ npm run dev

# 배포용 빌드
$ npm run build
```

## 4. 기본 제공
### 4.1 assets
기본 아이콘 및 페비콘 제공
( 제공되는 아이콘:  `avatar`, `comment`, `heart`, `home`, `logo` )

### 4.2 컴포넌트들
아래의 3가지 기본 컴포넌트들 제공

1. `Button`
2. `Icon`
3. `Spinner`

### 4.3 css
초기화, 공통 적용, 애니메이션 css 제공

### 4.4 사용자 정의 Hook
아래의 1가지 사용자 정의 Hook 제공

1. `useInput`

### 4.5 페이지 라우팅 처리
`react-router-dom`을 이용한 `HomePage`, `LoginPage`, `SignupPage`들의 라우팅 처리 제공

### 4.6 util
1. 현재 시간 기준 지난 시간으로 변환
2. 날짜 변환
3. 플레이 시간 변환

### 4.7 `eslint` and `prettier`
기본적인 `eslint`와 `prettier` 세팅 제공

### 4.8 `webpack.config.js`
기본 웹펙 설정 제공
추가로 필요한 부분이 있으면 추가하기 쉽도록 만들어놓음