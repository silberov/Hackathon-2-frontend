import styled from "styled-components";
import { ListElements, ListSingleLine, SubHeader } from "../Typography"

const ListWrap = styled.div`
    margin: 20px 40px;
`;

export function List ({title, elements, isLine}){
    return(
        <ListWrap>
            <SubHeader>{title}</SubHeader>
            <ListSingleLine>
                {elements.map(item => <ListElements >{isLine ? item + ", " : item}</ListElements>)}
            </ListSingleLine>
        </ListWrap>

    );

    //isLine && modifiers={["line"]}
}


export function LineList ({title, elements}){
    return(
        <ListWrap>
            <SubHeader>{title}</SubHeader>
            <ListSingleLine>
                {elements.map(item => <ListElements modifiers={["line"]}>{item}, </ListElements>)}
            </ListSingleLine>
        </ListWrap>

    );
}

