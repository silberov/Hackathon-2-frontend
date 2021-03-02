import styled from "styled-components";
import Category from "../components/Category/Category";
import Personal from "../components/Personal/Personal";

function Profile({ person, isEditable }) {
  console.log("person", person);
  const name = person.last_name + " ," + person.name;
  const details = [
    { company: [person.position, person.office] },
    { contact: [person.email, person.phone] },
    { education: person.education },
  ];
  const ProfileWrap = styled.div`
    margin: 20px 200px;
    display: flex;
  `;

  return (
    <ProfileWrap>
      <Personal name={name} details={details} />
      <div>
        <Category title={"Skill"} data={person.skill} oneLine={false} />
        <Category
          title={"Experience"}
          data={person.experience}
          oneLine={true}
        />
      </div>
    </ProfileWrap>
  );
}

export default Profile;
