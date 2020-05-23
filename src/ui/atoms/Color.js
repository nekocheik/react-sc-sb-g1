import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';


const Color = ({ color = "black",textColor = "white" ,children , opacity = "100"}) => {

const ColorBlock = styled.div`
color: ${textColor};
padding: 30px 30px;
width: 100%;
text-align: center;
margin: 0 10px;
flex-shrink: 1;
font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
position: relative;
`;
const Background = styled.div`
width: 100%;
height: 100%;
position absolute;
top: 0px;
left: 0px;
border-radius: 10px;
background: ${props => color};
z-index: 0;
opacity: ${opacity}%;
`;

const Wording = styled.div`
z-index: 2;
position: relative;
`;

  return (
    <ColorBlock >
      <Background></Background>
      <Wording>      
      <span>{children}</span>
      { children && color ? <br/> : null  }
      <span>{color}</span>
      { opacity && color ? <br/> : null  }
      { opacity !== "100" && <span>{opacity} %</span> }
      </Wording>
    </ColorBlock>
  )
}


Color.propTypes = {
  name: PropTypes.string,
};


export default Color