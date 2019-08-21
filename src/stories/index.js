import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";

import Button from "../Button";
import Container from "../Container";

storiesOf("Container", module)
  .addDecorator(withInfo)
  .add("with text", () => <Container>Container</Container>);

storiesOf("Button", module)
  .addDecorator(withInfo)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ));
