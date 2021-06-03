# 🎞 WHAT THE PEDIA

> ## ✨ 프로젝트 소개

영화 추천사이트인 왓챠피디아를 모티브로 하여 주요 기능을 구현한 팀 프로젝트
<br>
<br>
- **프로젝트 기간**
  📆 2021.03.29 ~ 2021.04.09

- **팀원**
  
  🎞 Front-end : 강준우, 김우영, 남궁선아
  
  🎞 Back-end : 예병수, 최인아

- **프로젝트 동영상 링크 :** [프로젝트 동영상 링크](https://www.youtube.com/watch?v=65SivG9_epo&t=2s)

<br>

> ## ✨ 기술 스택

- React
- React Hooks
- Styled Components

<br>

> ## ✨ 구현 사항

### 💎 메인 페이지

- 네비게이션 바
  - 로그인 여부에 따라 상태 변화
  - Location을 통해 현재 페이지를 인식하여 스크롤 이벤트 상태 변화
- 영화 리스트 슬라이드 기능(캐로셀)
  - 받는 데이터 양의 따른 캐로셀 구현

### 💎 로그인/회원가입 모달창

-  자체 로그인/회원가입
    - 컴포넌트, 함수 재사용을 통한 모달창 구현
    - 정규식을 활용한 로그인/회원가입 유효성 체크
    - 로그인/회원가입 `input값` 유효성 체크 통과 여부 실시간 알림 기능
- 카카오 소셜로그인
  - OAuth2.0 기반 카카오 로그인 API 연동
- 로그아웃

## 💎 영화 상세 페이지(나의 구현 기능)

👉 영화별 평점 기능
  -  별(svg)값에 Boolean을 활용하여 별점 구현

<img width="600" alt="star" src="https://user-images.githubusercontent.com/76928868/120159755-7f9ac400-c230-11eb-8c12-e2606e3a481b.png">


👉 그래프 기능
  - 전체 사용자 별점 통계 기능
  - VictoryChart 라이브러리를 활용하여 영화별 데이터를 받음
  - 객체 데이터를 배열 형식으로 변경하여 접목

<img width="600" alt="graph" src="https://user-images.githubusercontent.com/76928868/120160128-de603d80-c230-11eb-89de-e87ec7e98180.png">

👉 갤러리 및 코멘트
  - 순수 JavaScript를 이용하여 캐러셀 기능 직접 구현
<img width="600" alt="comment" src="https://user-images.githubusercontent.com/76928868/120160398-2c754100-c231-11eb-9be9-3267effa2e7b.png">

👉 페이지 이동
  - 동적라우팅을 활용하여 `params`로 페이지 이동 구현
<img width="600" alt="pagemove1" src="https://user-images.githubusercontent.com/76928868/120160724-85dd7000-c231-11eb-89ac-b8fa84090ee8.png">
<img width="600" alt="pagemove2" src="https://user-images.githubusercontent.com/76928868/120160733-87a73380-c231-11eb-83fd-627f8a6511f7.png">


### 💎 마이페이지
- 사용자 정보 API 연동

### 💎 마이페이지 영화 상세페이지
  - 별점순/가나다순/개봉일순 정렬 기능
  - 토큰으로 해당 유저 데이터 받아오기
  - 정렬 필터 모달창 구현
