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
  `,
};

const SIZE_MODIFIERS = {
  small: () => css`
    font-size: 0.875rem; //14
  `,
  normal: () => css`
    font-size: 1rem; //16
  `,
  large: () => css`
    font-size: 1.125rem; //18
  `,
  xlarge: () => css`
    font-size: 1.25rem; //20
  `,
};

const ALIGNMENT_MODIFIERS = {
  center: () => css`
    text-align: center;
  `,
};

const LIST_TYPE_MODIFIERS = {
  line: () => css`
    display: inline;
  `,
};

// const LINE_MODIFIERS = {
//   line: () => css`

//   `
// }

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
  color: ${(props) => (props.color ? props.color : colors.lightGray)};
  margin: ${(props) => (props.margin ? props.margin : 0)};
  ${applyStyleModifiers(FONT_WEIGHT_MODIFIERS)};
  ${applyStyleModifiers(ALIGNMENT_MODIFIERS)};
  ${applyStyleModifiers(COLOR_MODIFIERS)};
`;

export const SubHeader = styled.h3`
  font-family: ${primaryFont};
  font-size: 3rem;
  line-height: 1.25;
  letter-spacing: 0.2px;
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
`;

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
  ${applyStyleModifiers(COLOR_MODIFIERS)};
  ${applyStyleModifiers(SIZE_MODIFIERS)};
`;

export const Input = styled.input`
  width: 100%;
  font-size: 1.2rem;
  line-height: 1.5;
  font-weight: 400;
  text-align: left;
  margin: 5px 0;
  padding: 3px 7px;
  border: none;
  background-color: ${colors.lightBG};
  &:focus {
    background-color: ${colors.hoverBG};
    border: none;
    outline: none;
  }
`;

const LineContainer = styled.div`
  width: 100%;
  border-bottom: solid 1px ${colors.primeryGray};
  margin-bottom: 20px;
`;

export function LineHeader(props) {
  return (
    <LineContainer>
      <Healine modifiers={["primery"]}>{props.children}</Healine>
    </LineContainer>
  );
}

export const Select = styled.select`
  font-size: 1.2rem;
  line-height: 1.5;
  font-weight: 400;
  text-align: left;
  margin: 5px 0;
  padding: 7px 5px;
  border: none;
  background-color: ${colors.lightBG};
  &:focus {
    background-color: ${colors.hoverBG};
    border: none;
    outline: none;
  }
  &.disabled {
    color: red; //not working
  }
`;
