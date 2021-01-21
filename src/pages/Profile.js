import Category from "../components/Category/Category";
import Personal from "../components/Personal/Personal";

function Profile (props) {
    console.log(props.person)
    const name = props.person.last_name+" ,"+props.person.name;
    return(
        <>
            <Personal name={name} />
{/*       
            <Category data={props.data} oneLine={false}/>
      

            <Category data={props.data} oneLine={true}/> */}
        </>
    );
}

export default Profile;