import React, { useState } from "react";
import {
  DragDropContext,
  DragStart,
  Draggable,
  DropResult,
  Droppable,
  ResponderProvided,
} from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
import { ButtonDrag, COMPONENT, Item } from "../../types/type";
import EditItem from "./EditItem";
import InformationItem from "./InformationItem";
import ListItem from "./ListItem";
import {
  ButtonItem,
  ButtonList,
  Container,
  ContainerItem,
  ContainerLeft,
  ContainerRight,
  ShowItemColumn,
} from "./style";
import ListButtonControl from "./ListButtonControl";
const columns1: ButtonDrag[] = [
  {
    content: "Paragraph",
    component: COMPONENT.PARAGRAPH,
  },
  {
    content: "Button",
    component: COMPONENT.BUTTON,
  },
];
const Drag: React.FC = () => {
  const [itemDragging, setItemDragging] = useState<string>("");
  const [columns2, setColumns2] = useState<Item[]>([]);
  const [itemActive, setItemActive] = useState<Item | null>(null);
  const onDragEnd = ({ result }: { result: DropResult }) => {
    const { source, destination } = result;
    const itemHasDrag = columns1[source.index];

    if (source.droppableId !== destination?.droppableId) {
      setColumns2([...columns2, { id: uuidv4(), ...itemHasDrag, props: {} }]);
    }
  };

  const handleEditItem = (item: Item) => {
    setItemActive(item);
  };

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!itemActive) return;
    const newItem = {
      ...itemActive,
      props: {
        ...itemActive.props,
        text: e.currentTarget.value,
      },
    };
    const newColumn = columns2.map((obj) =>
      obj.id === itemActive.id ? newItem : obj
    );
    setItemActive(newItem);
    setColumns2(newColumn);
  };

  const handleAlertMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!itemActive) return;
    const newItem = {
      ...itemActive,
      props: {
        ...itemActive.props,
        message: e.currentTarget.value || "",
      },
    };
    const newColumn = columns2.map((obj) =>
      obj.id === itemActive.id ? newItem : obj
    );
    setItemActive(newItem);
    setColumns2(newColumn);
  };

  return (
    <DragDropContext
      onDragEnd={(result) => onDragEnd({ result })}
      onDragStart={(start: DragStart, provided: ResponderProvided) => {
        setItemDragging(start.draggableId);
      }}
    >
      <ListButtonControl listItem={columns2} />
      <Container>
        <ContainerLeft>
          <Droppable key={"idcolumn1"} droppableId={"idcolumn1"}>
            {(provided, snapshot) => (
              <ButtonList ref={provided.innerRef} {...provided.droppableProps}>
                {columns1.map((item, index) => (
                  <Draggable
                    key={item.component}
                    draggableId={item.component}
                    index={index}
                  >
                    {(provided, snapshot) => {
                      return (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <ButtonItem>
                            <div />
                            <p>{item.content}</p>
                          </ButtonItem>
                        </div>
                      );
                    }}
                  </Draggable>
                ))}
              </ButtonList>
            )}
          </Droppable>
        </ContainerLeft>

        <ContainerRight>
          <Droppable
            key={"idcolumn2"}
            droppableId={"idcolumn2"}
            isDropDisabled={true}
          >
            {(provided, snapshot) => {
              return (
                <ShowItemColumn
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <InformationItem
                    instances={columns2.length}
                    itemDragging={itemDragging}
                    configs={itemActive && JSON.stringify(itemActive)}
                  />
                  <ContainerItem>
                    {columns2.map((item, index) => (
                      <ListItem
                        component={item.component}
                        handleClick={() => handleEditItem(item)}
                        text={item.props?.text || ""}
                      />
                    ))}
                  </ContainerItem>
                </ShowItemColumn>
              );
            }}
          </Droppable>
          <EditItem
            itemActive={itemActive}
            handleChangeText={handleChangeText}
            handleAlertMessage={handleAlertMessage}
          />
        </ContainerRight>
      </Container>
    </DragDropContext>
  );
};

export default Drag;
