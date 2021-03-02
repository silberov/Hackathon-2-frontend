import styled from "styled-components";
import { Healine, ListContainer, ListElements } from "../Typography";

const DetailsWrap = styled.div`
    margin: 10px 10px 20px 0;
`

function Details({data}) {
    //console.log("data", data);

    const title = Object.keys(data)[0]
    const content = data[title] || [];
    //console.log(title, content);
    return(
        <DetailsWrap>
            <Healine>{title}</Healine>
            <ListContainer>
                {content.map(item => <ListElements>{item}</ListElements>)}
            </ListContainer>
        </DetailsWrap>
    );
}

export default Details