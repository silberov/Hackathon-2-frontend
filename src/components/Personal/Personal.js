import styled from "styled-components";
import Details from "../Details/Details";
import { P } from "../Typography";

const ProfileImg = styled.img`
    width: 300px;
    height: 300px;
`
const Wrap = styled.div`
margin: 50px 20px 35px 20px;
`


function Personal ({name, details}) {
console.log("details", details)
    return(
        <Wrap>
        <ProfileImg />
        <P modifiers={["primery","bold"]}>{name}</P>
        {details.map(item => <Details data={item}/>)}
        </Wrap>
    );

};


export default Personal;