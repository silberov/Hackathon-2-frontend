import styled from "styled-components";
import { P } from "../Typography";

const SmallImage = styled.img`
  width: 250px;
  height: 250px;
  margin: 15px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 350px;
  margin: 10px;
`;

const TextContainer = styled.div`
  padding-left: 15px;
`;


function EmployeeCard({ id, name, url, position, location, department }) {
  return (
    <>

    <CardContainer>
      <SmallImage 
      src={url} />
      <TextContainer>
      <P modifiers={["primery", "bold"]}>{name}</P>
      <P>{position}</P>
      <P>
        {location}, {department}
      </P>
      </TextContainer>
      </CardContainer>
    </>
  );
}

export default EmployeeCard;
