# react-todos
이 프로젝트는 react, typescript를 사용하는 TODO관리 싱글 페이지 어플리케이션이다.

## Spec

1. / 로 접속하였을 시에, 전체 TODOs 를 확인할 수 있다.
    - [x] todo 를 작성할 수 있다.
    - [x] todo 를 삭제할 수 있다.
    - [x] todo 의 상태를 완료로 변경할 수 있다.
    - [x] todo 의 상태를 등록으로 변경할 수 있다.
    - [x] todo 를 스타(상단고정) 할 수 있다.
        - [x] 최근에 스타 한 게 가장 위에 노출된다.
        - [x] 완료시 스타 제거
    - [x] todo 를 필터해서 볼 수 있다.
        - [x] 완료 / 등록 상태로 필터해서 확인 가능
    - [x] todo 타이틀을 수정할 수 있다.

2. ~~/{id} 로 접속하였을 시에, TODO 세부 내역을 확인할 수 있다.
    - [ ] ~~desc 를 작성할 수 있다.~~
    - [ ] ~~desc 를 수정/삭제할 수 있다.
    - [ ] ~~todo 를 삭제할 수 있다.
    - [ ] ~~todo 를 스타 할 수 있다. (이하 / 에서 하는것과 스팩 동일)
  
## 규칙

1. 일주일에 정해진 분량 만큼의 이슈를 해결한다.
    - 해결한 이슈는 마스터에서 브랜치를 따서 코딩하고, 마스터로 PR 을 생성해 놓는다.
2. 매주 일요일 저녁 20시에 온라인 스크럼을 한다.
    - 이번주에 한 일(이슈사항) 공유
    - 이번주에 할 일 결정
3. 스크럼이 끝나면 곧바로 다른 사람이 한 PR 을 온라인 리뷰한다.
4. 다 끝나면 오프라인에서 밥을 먹는다.
