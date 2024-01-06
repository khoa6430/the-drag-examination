import * as React from "react";
import Drag from "../../components/admin";
import styled from "styled-components";

export interface AdminViewProps {}
export const Container = styled.div`
  max-height: 100svh;
  overflow: hidden;
`;

export default function AdminView(props: AdminViewProps) {
  return (
    <Container>
      <Drag />
    </Container>
  );
}
