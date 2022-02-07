import styled, { css } from "styled-components";

export const Wrapper = styled.button`
  /* 일반 로그인 스타일 */
  ${({ $local }) =>
    $local &&
    css`
      position: relative;
      width: 60%;
      padding: 0.5rem;
      background: var(--main-color);
      color: white;
      margin-bottom: 0.3rem;
      opacity: 0.9;

      &:hover {
        opacity: 1;
      }
    `}

  /* 페이스북 로그인 스타일 */
  ${({ $facebook }) =>
    $facebook &&
    css`
      position: relative;
      width: 60%;
      padding: 0.5rem;
      background: var(--facebook-color);
      color: white;
      margin-bottom: 0.3rem;
      opacity: 0.9;

      &:hover {
        opacity: 1;
      }
    `}

  /* 네이버 로그인 스타일 */
  ${({ $naver }) =>
    $naver &&
    css`
      position: relative;
      width: 60%;
      padding: 0.5rem;
      background: var(--naver-color);
      color: white;
      margin-bottom: 0.3rem;
      opacity: 0.9;

      &:hover {
        opacity: 1;
      }
    `}

  /* 카카오 로그인 스타일 */
  ${({ $kakao }) =>
    $kakao &&
    css`
      position: relative;
      width: 60%;
      padding: 0.5rem;
      background-color: var(--kakao-color);
      color: white;
      margin-bottom: 1rem;
      opacity: 0.9;

      &:hover {
        opacity: 1;
      }
    `}
`;
