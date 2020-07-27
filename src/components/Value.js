import React from 'react';
import styled from 'styled-components';

const StyledValue = styled.h1`
  font-size: 15rem;
`;

const Value = ({ value }) => {
  return <StyledValue>{value}</StyledValue>;
};

export default Value;
