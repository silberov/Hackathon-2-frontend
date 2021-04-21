import styled from "styled-components";
import Details from "../Details/Details";
import { TextInput } from "../Input/Input";
import { P } from "../Typography";

const ProfileImg = styled.img`
  width: 300px;
  height: 300px;
`;
const Wrap = styled.div`
  width: 285px;
  margin: 50px 20px 35px 20px;
`;

function NameInput({ firstName, lastName }) {
  // console.log("name", firstName, lastName);
  return (
    <>
      <form>
        <TextInput initialValue={firstName} />
        <TextInput initialValue={lastName} />
      </form>
    </>
  );
}

function Personal({ firstName, lastName, details, isEditable = true }) {
  console.log("details", details);
  return (
    <Wrap>
      <ProfileImg />
      {isEditable ? (
        <NameInput firstName={firstName} lastName={lastName} />
      ) : (
        <P modifiers={["primery", "bold"]}>
          {lastName}, {firstName}
        </P>
      )}

      {details.map((item, index) => (
        <Details key={index} isEditable={isEditable} data={item} />
      ))}
    </Wrap>
  );
}

export default Personal;
