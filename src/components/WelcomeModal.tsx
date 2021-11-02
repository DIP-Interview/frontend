import { observer } from "mobx-react";
import React, { useState } from "react";
import styled from "styled-components";

import { useStores } from "../Context";

const DivContainer = styled.div<{ visible: boolean }>`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: ${(props) => (props.visible ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fdff93;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputUsername = styled.input`
  border: none;
  width: 300px;
  height: 30px;
  padding: 5px 10px;
  margin-bottom: 30px;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px red;
  }
`;

const Button = styled.button`
  background: #2295e9;
  padding: 5px 10px;
  color: #fff;
  width: 100px;
`;

type WelcomeModalProps = {
  visible: boolean;
  setVisible: (value: boolean) => void;
};

const WelcomeModal = ({ visible, setVisible }: WelcomeModalProps) => {
  const { userDataStore } = useStores();

  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username) {
      userDataStore.addUsername(username);
      setVisible(false);
    } else {
      setErrorMessage("닉네임을 입력해주세요~");
    }
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  return (
    <DivContainer visible={visible}>
      <h1>DIP - 프론트앤드 기술면접</h1>
      <p>
        DIP를 방문해주셔서 감사합니다🙆‍♀️
        <br /> 앞으로 10개의 인터뷰가 진행됩니다. <br />
        닉네임을 적은후, 준비가 되셨다면 시작하기 버튼을 클릭해주세요!
      </p>
      <FormContainer onSubmit={onSubmit}>
        <InputUsername
          type="text"
          onChange={onChangeContent}
          value={username}
          placeholder="닉네임"
        />
        <Button type="submit">시작하기</Button>
        {errorMessage}
      </FormContainer>
    </DivContainer>
  );
};

export default WelcomeModal;
