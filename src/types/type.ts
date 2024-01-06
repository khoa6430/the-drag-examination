export enum COMPONENT {
  BUTTON = "ElementButton",
  PARAGRAPH = "ElementParagraph",
}
export interface ButtonDrag {
  content: string;
  component: COMPONENT;
}
export interface Item {
  id: string;
  content: string;
  component: COMPONENT;
  props: { text?: string; message?: string };
}
