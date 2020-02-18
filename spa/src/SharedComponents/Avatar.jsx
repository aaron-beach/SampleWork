import React from "react";
import person from "images/person.jpg";
import styled from "styled-components";

const Wrapper = styled.div`
  width: ${({ size }) => size}px;

  & > img {
    border-radius: 100%;
  }
`;

function Avatar({
    className,
    name,
    size,
}) {
  return <Wrapper className={className} size={size}>
      <img src={person} alt={`${name} avatar`} width={size} height={size} />
  </Wrapper>;
}

export default Avatar;
