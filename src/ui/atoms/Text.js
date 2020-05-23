import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import TextSize from '../particles/TextSize';



const Text = ({ children, size = "base", weight = "midel" ,color = "white", }) => {
  const WarpperText = styled.p`
  color:  ${color};
  font-size:  ${TextSize[size]};
  font-weight: ${weight !== "big" ? "200" : "800"};
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  `;
  
  return(<WarpperText>{children}</WarpperText>)
}

export default Text


Text.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.object,
  weight: PropTypes.string,
};
