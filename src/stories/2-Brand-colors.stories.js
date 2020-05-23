import React from "react";
import StyleGuildColor from "../ui/particles/Colors";
import Color from "../ui/atoms/Color";
import Text from "../ui/atoms/Text";
import SubText from "../ui/atoms/SubText";
import styled from "styled-components";;

export default {
  title: `Couleurs/Brand Colors-Couleurs de Marque`,
  component: Color,
};




export const BrandColor =  () => {

  const ColorBlock = styled.div`
    background: ${ StyleGuildColor.black };
    padding: 20px 15px;
    color: white;
    display: flex;
    max-width: 600px;
    margin: 0 auto;
    border-radius: 10px;
    justify-content: space-around;
    `;

  return(
    <>
      <Text weight="big" size="xl">Brand Colors</Text>
      <Text color="#858585" size="small">Couleurs de Marque</Text>
      <Text text="xl">L’unique couleur de marque de Twitch est le violet électrique, accompagné de ses différentes nuances. Il est utilisé pour accentuer l’identité graphique de Twitch et rendre la plateforme reconnaissable.</Text>
      <ColorBlock>
        <Color color="#772CE8">Brand dark</Color>
        <Color color="#9146FF">Brand base</Color>
        <Color color="#A970FF">brand light</Color>
      </ColorBlock>
    </>
  )
}