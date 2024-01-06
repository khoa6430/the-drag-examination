import * as React from "react";
import { ItemContainer } from "./style";
import { COMPONENT } from "../../types/type";

export interface ListItemProps {
  component: COMPONENT;
  handleClick: () => void;
  text: string;
}

export default function ListItem(props: ListItemProps) {
  const { component, handleClick, text } = props;
  return (
    <ItemContainer>
      {component === COMPONENT.PARAGRAPH && (
        <p
          onClick={() => {
            handleClick();
          }}
        >
          {text || "Paragraph"}
        </p>
      )}
      {component === COMPONENT.BUTTON && (
        <button
          onClick={() => {
            handleClick();
          }}
        >
          {text || "Button"}
        </button>
      )}
    </ItemContainer>
  );
}
