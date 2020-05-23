import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import TextSize from '../particles/TextSize';



const Text = ({ children, size = "small" ,color = "white", }) => {
  const WarpperText = styled.p`
  color:  ${props => color};
  font-size:  ${props => TextSize[size]};
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  `;

  return(<WarpperText>{children}</WarpperText>)
}

export default Text


Text.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.object,
};
