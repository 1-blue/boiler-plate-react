import React from "react";
import { Link } from "react-router-dom";

// styled-components
import { Wrapper } from "./style";

const Right = () => {
  return (
    <Wrapper>
      <li>
        <Link to="/login">로그인</Link>
      </li>
      <li>
        <Link to="/signup">회원가입</Link>
      </li>
      <li>
        <a href="https://github.com/1-blue" target="_blank">
          <b>GitHub</b>
        </a>
      </li>
    </Wrapper>
  );
};

export default Right;
