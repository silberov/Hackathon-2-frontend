import styled from "styled-components";
import Details from "../Details/Details";
import { P } from "../Typography";

const ProfileImg = styled.img`
    width: 300px;
    height: 300px;
`


function Personal ({name, details}) {
//console.log(Object.keys(details)[0],details[Object.keys(details)[0]] );
    return(
        <>
        <ProfileImg />
        <P modifiers={["primery","bold"]}>{name}</P>
        <Details headline={Object.keys(details)[0]} elements={details[Object.keys(details)[0]]}/>
        <Details headline={Object.keys(details)[1]} elements={details[Object.keys(details)[1]]}/>
        <Details headline={Object.keys(details)[2]} elements={details[Object.keys(details)[2]]}/>
        </>
    );

}


export default Personal;