import * as React from "react";

import styled from "@emotion/styled";

interface FlexProps {
  style?: React.CSSProperties;
  vertical?: boolean;
  children: React.ReactElement[];
}

const FlexStyled = styled.div<Pick<FlexProps, "vertical">>`
  display: flex;
  flex-direction: ${(p) => (p.vertical ? "column" : "row")};
`;

export const Flex = ({ children, vertical, style }: FlexProps) => (
  <FlexStyled style={style} vertical={vertical}>
    {children}
  </FlexStyled>
);
