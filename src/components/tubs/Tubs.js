import { Link, NavLink, Router } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/colors";
import { Healine } from "../Typography";

const FlexTubs = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const TubBox = styled.li`
  text-align: center;
  display: inline-block;
  width: 25%;
`;

const activeClassName = "nav-item-active";
const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
  display: inline-block;
  font-weight: 500;
  color: ${colors.lightGray};
  border-bottom: 2px solid ${colors.lightGray};
  padding-bottom: 5px;
  width: 100%;
  text-decoration: none;
  &.${activeClassName} {
    color: ${colors.primeryGray};
    border-bottom: 2px solid ${colors.primeryGray};
  }
  &:hover {
    cursor: pointer;
    //border-bottom: 2px solid ${colors.primeryGray};
    color: ${colors.primeryGray};
  }
`;

export function Tubs() {
  return (
    <>
      <nav>
        <FlexTubs>
          <TubBox>
            <StyledNavLink exact to="/skills">
              Skills
            </StyledNavLink>
          </TubBox>
          <TubBox>
            <StyledNavLink exact to="/experience">
              Experience
            </StyledNavLink>
          </TubBox>
          <TubBox>
            <StyledNavLink exact to="/">
              {/* to="/intrests"  to="/wishes"*/}
              Intrests
            </StyledNavLink>
          </TubBox>
          <TubBox>
            <StyledNavLink exact to="/">
              Wishes
            </StyledNavLink>
          </TubBox>
        </FlexTubs>
      </nav>
    </>
  );
}
