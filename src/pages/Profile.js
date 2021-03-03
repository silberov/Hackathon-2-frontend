import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Category from "../components/Category/Category";
import Personal from "../components/Personal/Personal";
import { Tubs } from "../components/tubs/Tubs";

function Profile({ person, isEditable }) {
  //console.log("person", person);

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
      <Personal
        firstName={person.name}
        lastName={person.last_name}
        details={details}
        isEditable={isEditable}
      />
      {isEditable ? (
        <EditMain person={person} />
      ) : (
        <Main person={person} />
        // <div>
        //   <Category title={"Skill"} data={person.skill} oneLine={false} />
        //   <Category
        //     title={"Experience"}
        //     data={person.experience}
        //     oneLine={true}
        //   />
        // </div>
      )}
    </ProfileWrap>
  );
}

function Main({ person }) {
  return (
    <div>
      <Category title={"Skill"} data={person.skill} oneLine={false} />
      <Category title={"Experience"} data={person.experience} oneLine={true} />
    </div>
  );
}

function EditMain({ person }) {
  return (
    <div>
      <Tubs />
      <Switch>
        <Route path="/skills">
          <Category title={"Skill"} data={person.skill} isEditable={true} />
        </Route>
        <Route path="/experience">
          <Category
            title={"Experience"}
            data={person.experience}
            isEditable={true}
          />
        </Route>
        {/* <Route path="/">
            <Home />
          </Route> */}
      </Switch>
    </div>
  );
}

export default Profile;
