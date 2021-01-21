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

  const COLOR_MODIFIERS = {
      light: () => css`
       color: ${colors.lightGray};
      `,
      text: () => css`
      color: ${colors.text};
      `,
      primery: () => css`
      color: ${colors.primeryGray};
      `
  }

  const ALIGNMENT_MODIFIERS = {
    center: () => css`
    text-align: center;
    `
  }

  const LIST_TYPE_MODIFIERS = {
    line: () => css`
    display: inline;
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
  padding: 7px 0;
  display: block;
  border-bottom: 1px soild #cdcdcd;
  font-size: 1rem;
  line-height: 1.25;
  letter-spacing: 0.2px;
  font-weight: 700;
  text-align: left;
  color: ${colors.lightGray};
  margin: ${(props) => (props.margin ? props.margin : 0)};
  ${applyStyleModifiers(FONT_WEIGHT_MODIFIERS)};
  ${applyStyleModifiers(ALIGNMENT_MODIFIERS)};
  ${applyStyleModifiers(COLOR_MODIFIERS)};
`;


export const SubHeader= styled.h3`
  font-family: ${primaryFont};
  font-size: 3rem;
  line-height: 1.25;
  letter-spacing: .2px;
  font-weight: 700;
  text-align: left;
  padding-bottom: 10px;
  color: ${colors.primeryGray};
  margin: ${(props) => (props.margin ? props.margin : 0)};
  ${applyStyleModifiers(FONT_WEIGHT_MODIFIERS)};
  ${applyStyleModifiers(ALIGNMENT_MODIFIERS)};
`;

export const ListContainer = styled.ul`
    text-align: left;
    /* display: flex;

    align-content: flex-start; */
    `

export const ListElements = styled.li`
    font-size: 1.2rem;
    list-style-type: none;
    line-height: 1.5;
    color: ${colors.text};
    font-weight: 400;
    text-align: left;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    ${applyStyleModifiers(LIST_TYPE_MODIFIERS)};
`

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
