// [ username을 저장하는 store ]

import { observable } from "mobx";

export interface UserData {
  id: number;
  username: string;
}

interface User {
  userData: UserData[];
  currentId: number;
  addUsername: (content: string) => void;
}

// user 라는 객체를 선언 한 뒤 observable로 감싸서 store를 생성한다.
// observable이 상태가 변화는지 관찰해 주기 때문에 불변성을 지켜줄 필요가 없다.
// 액션들은 스토어 안쪽에 같이 작성할 수 있다.
export const user = observable<User>({
  userData: [],
  currentId: 0,

  addUsername(content) {
    this.userData.push({ id: this.currentId, username: content });
    this.currentId++;
  },
});
