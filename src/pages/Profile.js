import styled from "styled-components";
import Category from "../components/Category/Category";
import Personal from "../components/Personal/Personal";

function Profile ({person}) {
    console.log(person)
    const name = person.last_name+" ,"+person.name;
    const details = {
        company:[person.position, person.office],
        contact:[person.email, person.phone],
        education: person.education
    }
    const ProfileWrap = styled.div`
    margin: 20px 200px;
        display: flex;
    `
    // const categorydata = {
    //     skills: person.skill, experience: person.experience, intrests: person.hobby
    // }
    //console.log(categorydata)
    return(
        <ProfileWrap>
            <div>
            <Personal name={name} details={details}  />
            </div>
            
            {/* {categorydata.map(item => <Category data={item} oneLine={false}/>)} */}
            <div>
                <Category data={{skills: person.skill}} oneLine={false}/>
                <Category data={{experience: person.experience}} oneLine={true}/>

            </div>

      
{/* 
            <Category data={categorydata.experience} oneLine={true}/> */}
        </ProfileWrap>
    );
}

export default Profile;