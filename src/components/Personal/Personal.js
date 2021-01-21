import styled from "styled-components";
import Details from "../Details/Details";
import { P } from "../Typography";

const ProfileImg = styled.img`
    width: 300px;
    height: 300px;
`


function Personal ({name}) {
    
    // const titles = Object.keys(data)
    // console.log(data[titles[3]])
    return(
        <>
        <ProfileImg />
        <P modifiers={["primery","bold"]}>{name}</P>
        {/* <Details elements={data[titles[3]]} headline={titles[3]} />
        <Details elements={data[titles[4]]} headline={titles[4]+ "info"} />
        <Details elements={data[titles[5]]} headline={titles[5]} /> */}
        
        </>
    );

}


export default Personal;