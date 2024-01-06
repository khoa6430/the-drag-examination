import styled from "styled-components";
import ListItem from "../../components/admin/ListItem";
import { COMPONENT, Item } from "../../types/type";

export interface UserViewProps {}
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function UserView(props: UserViewProps) {
  const storedItemsString = localStorage.getItem("items");
  const storedItems: Item[] = storedItemsString
    ? JSON.parse(storedItemsString)
    : [];

  return (
    <Container>
      {storedItems.map((item, index) => (
        <ListItem
          component={item.component}
          handleClick={() => {
            if (item.component === COMPONENT.BUTTON && item.props.message) {
              alert(item.props.message);
            }
          }}
          text={item.props?.text || ""}
        />
      ))}
    </Container>
  );
}
