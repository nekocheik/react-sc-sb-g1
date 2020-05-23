import React from "react";
import StyleGuildColor from "../ui/particles/Colors";
import Color from "../ui/atoms/Color";
import Text from "../ui/atoms/Text";
import SubText from "../ui/atoms/SubText";
import styled from "styled-components";

export default {
  title: `Couleurs/ Thèmes et modes de couleurs`,
  component: Color,
};


export const DarkModeThemeSombre =  () => {
  const ColorBlock = styled.div`
    background: ${ props => props.black ? "black" : "white" };
    padding: 20px 15px;
    color: white;
    display: flex;
    margin: 0 auto;
    border-radius: 10px;
    justify-content: space-around;
    margin : 10px 0px;
    `;

  return(
    <>
      <Text weight="big" size="xl">Dark Mode - Thème sombre</Text>
      <Text text="xl">Afin de ne pas abîmer les yeux des utilisateurs, le thème sombre de Twitch propose une apparence avec des dominance de noirs et de gris foncés.</Text>
      <ColorBlock>
        <Color color="#000000">Black</Color>
        <Color color="#040109">Dark purple</Color>
        <Color color="#0e0e10">Dark blue</Color>
      </ColorBlock>

      <ColorBlock>
        <Color color="#18181B">Darkest grey</Color>
        <Color color="#18181B">Dark Grey</Color>
        <Color color="#18181B">Medium grey</Color>
      </ColorBlock>

      <ColorBlock black >
        <Color  textColor="black" color="#ADADB8">Blue grey</Color>
        <Color  textColor="black" color="#9F9F9F">Medium grey</Color>
        <Color  textColor="black" color="#FFFFFF" opacity="20">White opacity</Color>
      </ColorBlock>

      <ColorBlock black >
        <Color textColor="black" color="#DEDEE3">Light grey</Color>
        <Color textColor="black" color="#EFEFF1">Lightest grey</Color>
        <Color  textColor="black" color="#FFFFFF">White opacity</Color>
      </ColorBlock>
    </>
  )
}