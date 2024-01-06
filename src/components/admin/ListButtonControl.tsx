import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Item } from "../../types/type";
import { useContext } from "react";

export interface ListButtonControlProps {
  listItem: Item[];
}
export const ButtonControlContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
  gap: 15px;
  button {
    background-color: #f85c33;
    border: none;
    color: white;
    padding: 10px 15px;
    cursor: pointer;
  }
`;
export default function ListButtonControl(props: ListButtonControlProps) {
  const { listItem } = props;

  return (
    <ButtonControlContainer>
      <button
        onClick={() => {
          localStorage.setItem("items", JSON.stringify(listItem));
        }}
      >
        Save
      </button>
      <button onClick={() => window.open("/consumer", "_blank")}>View</button>
    </ButtonControlContainer>
  );
}
