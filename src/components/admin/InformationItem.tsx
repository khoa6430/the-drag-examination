import * as React from "react";
import { InformationColumn } from "./style";
import useMousePosition from "../../hooks/useMousePosition";

export interface InformationItemProps {
  instances: number;
  configs: string | null;
  itemDragging: string;
}

export default function InformationItem(props: InformationItemProps) {
  const { instances, configs, itemDragging } = props;
  const coords = useMousePosition();

  return (
    <InformationColumn>
      <p>
        Mouse : ({coords.x}, {coords.y})
      </p>
      <p>Instances : {instances}</p>
      <p>Dragging : {itemDragging}</p>
      <p>Configs : {configs}</p>
    </InformationColumn>
  );
}
