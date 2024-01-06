import { ContainerEdit } from "./style";
import { COMPONENT, Item } from "../../types/type";
import { ChangeEventHandler } from "react";

export interface EditItemProps {
  itemActive: Item | null;
  handleChangeText: ChangeEventHandler<HTMLInputElement>;
  handleAlertMessage: ChangeEventHandler<HTMLInputElement>;
}

export default function EditItem(props: EditItemProps) {
  const { itemActive, handleChangeText, handleAlertMessage } = props;
  return (
    <ContainerEdit>
      {itemActive?.component === COMPONENT.PARAGRAPH && (
        <>
          <p>Paragraph text</p>
          <input
            onChange={handleChangeText}
            value={itemActive.props?.text || ""}
          />
        </>
      )}
      {itemActive?.component === COMPONENT.BUTTON && (
        <>
          <p>Button text</p>
          <input
            onChange={handleChangeText}
            value={itemActive.props.text || ""}
          />
          <p>Alert Message</p>
          <input
            onChange={handleAlertMessage}
            value={itemActive.props.message || ""}
          />
        </>
      )}
    </ContainerEdit>
  );
}
