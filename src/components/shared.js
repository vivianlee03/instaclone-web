import { styled } from "styled-components";

export const BaseBox = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  border: 1px solid rgb(219, 219, 219);
  width: 100%;
`;

export const FatText = styled.span`
  font-weight: 600;
`;
