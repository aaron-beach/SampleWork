import { Spinner as BootstrapSpinner } from "react-bootstrap";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  align-items: center;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 0.25rem;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

function Spinner({ isFetching }) {
  return (
    <Wrapper>
      <BootstrapSpinner animation="border" role="status" variant="primary">
        <span className="sr-only">Loading...</span>
      </BootstrapSpinner>
    </Wrapper>
  );
}

export default Spinner;
