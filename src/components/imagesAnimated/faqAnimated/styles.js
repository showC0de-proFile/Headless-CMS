import styled from "styled-components";

export const ButtonMenuIcon = styled.div`
  z-index: 9999999;
  color: #fff;
  line-height: 0;
`;

export const TitleSideBar = styled.div`
  position: relative;
  top: ${(props) => props.top || 0}px;
  color: #4f4f4f;
`;
