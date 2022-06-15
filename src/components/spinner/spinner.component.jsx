import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./spinner.styles";

export default function SpinnerComponent() {
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
}
