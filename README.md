# Developer-Interview-Practice Program

### 개발환경

**Framework** : React, Typescript

**State Management** : MobX

**Machine Learning Library** : Tensorflow.js / Google Teachable-Machine

**Test Code** : Jest

<br>

### 협업을 위한 커밋 컨벤션😎

```
type(옵션): [#issueNumber - ]Subject  // -> 제목

body(옵션) //  -> 본문(무엇을 변경했는지 또는 왜 변경했는지)

footer(옵션) // -> 꼬리말
```

- Type의 종류<br>
  **기능**

  ```
  Feat: 새로운 기능을 추가할 경우
  Fix: 버그를 고친 경우
  Design: CSS 등 사용자 UI 디자인 변경
  !BREAKING CHANGE: 커다란 API 변경의 경우 (ex API의 arguments, return 값의 변경, DB 테이블 변경, 급하게 치명적인 버그를 고쳐야 하는 경우)
  ```

  **개선**

  ```
  Style: 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우
  Refactor: 프로덕션 코드 리팩토링, 새로운 기능이나 버그 수정없이 현재 구현을 개선한 경우
  Comment: 필요한 주석 추가 및 변경
  ```

  **그외**

  ```
  Docs: 문서를 수정한 경우
  Test: 테스트 추가, 테스트 리팩토링 (프로덕션 코드 변경 없음)
  Chore: 빌드 태스크 업데이트, 패키지 매니저 설정할 경우 (프로덕션 코드 변경 없음)
  Rename: 파일 혹은 폴더명을 수정하는 경우
  Remove: 사용하지 않는 파일 혹은 폴더를 삭제하는 경우
  ```
