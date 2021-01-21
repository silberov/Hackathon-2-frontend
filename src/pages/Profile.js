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
    // const categorydata = {
    //     skills: person.skill, experience: person.experience, intrests: person.hobby
    // }
    //console.log(categorydata)
    return(
        <>
            <Personal name={name} details={details}  />
            {/* {categorydata.map(item => <Category data={item} oneLine={false}/>)} */}
      
            <Category data={{skills: person.skill}} oneLine={false}/>
            <Category data={{skills: person.skill}} oneLine={true}/>
      
{/* 
            <Category data={categorydata.experience} oneLine={true}/> */}
        </>
    );
}

export default Profile;