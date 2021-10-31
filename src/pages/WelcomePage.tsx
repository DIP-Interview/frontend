import { observer } from "mobx-react";
import React, { useState } from "react";

import { useStores } from "../Context";

const WelcomePage = observer(() => {
  const { userDataStore } = useStores();

  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username) {
      userDataStore.addUsername(username);
    } else {
      setErrorMessage("닉네임을 입력해주세요~");
    }
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    // if (!e.target.value) {
    //   setUsername("");
    // }
  };

  return (
    <div>
      <h1>Welcome to Developer Interview Program!</h1>
      <p>
        앞으로 10개의 인터뷰가 진행됩니다 닉네임을 적은후, 준비가 되셨다면
        시작하기 버튼을 클릭해주세요!
      </p>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={onChangeContent}
          value={username}
          placeholder="닉네임"
        />
        <button type="submit">시작하기</button>
        {errorMessage}
      </form>
    </div>
  );
});

export default WelcomePage;
