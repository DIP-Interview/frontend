import React, { useState } from 'react';

import useStore from '../useStore';
import { UserData } from '../stores/user';

interface Props {
  data: UserData;
}

const WelcomePage = () => {
  const { user } = useStore();
  const [username, setUsername] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    user.addUsername(username);
    console.log(user.userData);
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  return (
    <div>
      <h1>Welcome to Developer Interview Program!</h1>
      <p>앞으로 10개의 인터뷰가 진행됩니다 닉네임을 적은후, 준비가 되셨다면 시작하기 버튼을 클릭해주세요!</p>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChangeContent} value={username} placeholder="닉네임" />
        <button type="submit">시작하기</button>
      </form>
    </div>
  );
};

export default WelcomePage;