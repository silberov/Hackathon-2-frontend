import styled, { css } from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import colors from "../utils/colors";

export const primaryFont = "TheSansOsF, sans-serif";

const FONT_WEIGHT_MODIFIERS = {
    //font-weight
    light: () => css`
      font-weight: 100;
    `,
    regular: () => css`
      font-weight: 400;
    `,
    bold: () => css`
      font-weight: 700;
    `,
  };

  const ALIGNMENT_MODIFIERS = {
    center: () => css`
    text-align: center;
    `
  }

export const MainHeader = styled.h1`
  font-family: ${primaryFont};
  font-size: 3.25rem;
  line-height: 1.25;
  letter-spacing: 1px;
  font-weight: 900;
  text-transform: uppercase;
  text-align: left;
  color: ${colors.primeryGray};
  margin: ${(props) => (props.margin ? props.margin : 0)};
  ${applyStyleModifiers(FONT_WEIGHT_MODIFIERS)};
  ${applyStyleModifiers(ALIGNMENT_MODIFIERS)};
`;

export const Healine = styled.h2`
  font-family: ${primaryFont};
  font-size: 1rem;
  line-height: 1.25;
  letter-spacing: 0.2px;
  font-weight: 700;
  text-align: left;
  color: ${colors.text};
  margin: ${(props) => (props.margin ? props.margin : 0)};
  ${applyStyleModifiers(FONT_WEIGHT_MODIFIERS)};
  ${applyStyleModifiers(ALIGNMENT_MODIFIERS)};
`;


export const SubHealine = styled.h3`
  font-family: ${primaryFont};
  font-size: 3.25rem;
  line-height: 1.25;
  letter-spacing: 0.3px;
  font-weight: 700;
  text-align: left;
  color: ${colors.primeryGray};
  margin: ${(props) => (props.margin ? props.margin : 0)};
  ${applyStyleModifiers(FONT_WEIGHT_MODIFIERS)};
  ${applyStyleModifiers(ALIGNMENT_MODIFIERS)};
`;

export const P = styled.p`
    font-size: 1.2rem;
    line-height: 1.5;
    color: ${colors.text};
    font-weight: 400;
    text-align: left;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    ${applyStyleModifiers(FONT_WEIGHT_MODIFIERS)};
    ${applyStyleModifiers(ALIGNMENT_MODIFIERS)};
`;
