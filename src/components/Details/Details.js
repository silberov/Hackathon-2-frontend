import { Healine, ListContainer, ListElements } from "../Typography";

function Details({headline, elements}) {
    return(
        <>
            <Healine>{headline}</Healine>
            <ListContainer>
                {elements.map(item => <ListElements>{item}</ListElements>)}
            </ListContainer>
        </>
    );
}

export default Details