import styled from "styled-components";
import { Healine, ListContainer, ListElements } from "../Typography";

const DetailsWrap = styled.div`
    margin: 10px 10px 20px 0;
`

function Details({headline, elements}) {
    // console.log(elements);
    return(
        <DetailsWrap>
            <Healine>{headline}</Healine>
            <ListContainer>
                {elements.map(item => <ListElements>{item}</ListElements>)}
            </ListContainer>
        </DetailsWrap>
    );
}

export default Details