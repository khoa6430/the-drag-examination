import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  /* max-height: 100svh; */
  overflow: hidden;
`;

export const ButtonList = styled.div`
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;
  min-width: 341px;
  padding: 15px;
  border: 1px solid #ecece7;
  :hover {
    background: #e8e8e8;
  }
  :active {
    background: #e8e8e8;
  }
`;
export const ShowItemColumn = styled.div`
  min-height: 100px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 20px;
  width: auto;
  height: calc(100svh - 300px);
  padding: 15px;
  border: 1px solid #ecece7;
  overflow-y: scroll;
`;

export const ContainerLeft = styled.div`
  display: flex;
  width: 100%;
  max-height: 100svh;
`;

export const ButtonItem = styled.div`
  div {
    min-height: 100px;
    min-width: 100px;
    border: 1px solid #d9d9da;
    margin-top: 15px;
  }
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const InformationColumn = styled.div`
  width: 100%;
  /* background-color: green; */
  p {
    font-weight: bold;
    word-break: break-all;
    white-space: normal;
  }
`;

export const ItemContainer = styled.div`
  p {
    width: 100px;
    cursor: pointer;
    text-align: left;
  }
  button {
    width: fit-content;
  }
`;
export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100svh;
`;
export const ContainerItem = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 500px;
  overflow-y: auto;
  height: auto;
`;
export const ContainerEdit = styled.div`
  height: auto;
  min-height: 300px;
  width: 100%;
  min-width: 100vw;
  padding: 15px;
`;
