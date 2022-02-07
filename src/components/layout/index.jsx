import React from "react";
import { Outlet } from "react-router-dom";

// navigation
import Navivation from "@src/components/navigation";

// styled-components
import { Wrapper, MainContainer } from "./style";

const AppLayout = () => {
  return (
    <Wrapper>
      <Navivation />

      <MainContainer>
        <Outlet />
      </MainContainer>
    </Wrapper>
  );
};

export default AppLayout;
