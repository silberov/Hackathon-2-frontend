import styled from "styled-components";
import colors from "../../utils/colors";
import { Healine } from "../Typography";

const FlexTubs = styled.div`
  display: flex;
  justify-content: space-between;
`;

export function Tubs({ titles, active }) {
  return (
    <FlexTubs>
      {titles.map((tub) => (
        <SingleTub text={tub} />
      ))}
    </FlexTubs>
  );
}

const TubBox = styled.div`
  //padding: 0 50px 1px;
  width: 25%;
  border-bottom: 2px solid ${colors.lightGray};
  color: ${colors.primeryGray};
  &:hover {
    cursor: pointer;
    //padding: 0 50px;
    border-bottom: 2px solid ${colors.primeryGray};
    color: ${colors.primeryGray};
  }
`;

function SingleTub({ text }) {
  return (
    <TubBox>
      <Healine modifiers={["center"]}>{text}</Healine>
    </TubBox>
  );
}
