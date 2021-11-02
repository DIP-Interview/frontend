import { observer } from "mobx-react";
import React, { useState } from "react";
import styled from "styled-components";
import WelcomeModal from "../components/WelcomeModal";
import { useStores } from "../Context";

const Layout = styled.div``;

const Container = styled.div``;

const MainPage = observer(() => {
  const stores = useStores();
  const [welcomeModalVisible, setWelcomeModalVisible] = useState(true);
  const [number, setNumber] = useState(1);
  return (
    <>
      <WelcomeModal
        visible={welcomeModalVisible}
        setVisible={setWelcomeModalVisible}
      />
      <Layout>
        <Container>
          {stores.userDataStore.username}님, {number}번째 문제입니다!
        </Container>
      </Layout>
    </>
  );
});

export default MainPage;
