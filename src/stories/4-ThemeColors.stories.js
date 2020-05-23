import React from "react";
import StyleGuildColor from "../ui/particles/Colors";
import Color from "../ui/atoms/Color";
import Text from "../ui/atoms/Text";
import styled from "styled-components";

export default {
  title: `Couleurs/ Thèmes et modes de couleurs`,
  component: Color,
};



export const ThemesEtModesDeCouleurs =  () => {

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
      <Text text="xl">Thèmes et modes de couleurs</Text>
      <Text text="xl">AEtant une plateforme très utilisée la nuit, Twitch propose 2 thèmes de couleurs : 1 thème clair et 1 thème sombre, sur lesquels il est possible de basculer à tout moment. Ainsi, de nombreux éléments d’interface peuvent prendre 2 apparences différentes.</Text>
    </>
  )
}
