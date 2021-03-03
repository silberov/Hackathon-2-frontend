import styled from "styled-components";
import { P } from "../Typography";

const SmallImage = styled.img`
  width: 250px;
  height: 250px;
  margin: 15px;
`;

function EmployeeCard({ name, url, position, location, department }) {
  return (
    <>
      <SmallImage src={url} />
      <P modifiers={["primery", "bold"]}>{name}</P>
      <P>{position}</P>
      <P>
        {location}, {department}
      </P>
    </>
  );
}

export default EmployeeCard;
