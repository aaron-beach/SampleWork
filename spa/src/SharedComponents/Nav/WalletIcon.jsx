import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  align-items: center;
  display: flex; 
  font-size: 1.3125rem;
  height: 24px;
`;
const Value = styled.span`
  display: block;
  font-weight: 700;
`;

function WalletIcon({className}) {
  return (
    <Wrapper className={className}>
      <Value className="text-body">$9.07</Value>
    </Wrapper>
  );
}

export default WalletIcon;
