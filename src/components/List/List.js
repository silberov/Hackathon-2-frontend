import styled from "styled-components";
import { ListElements, ListSingleLine, SubHeader } from "../Typography"

const ListWrap = styled.div`
    margin: 20px 40px;
`;

export function List ({title, elements, isLine}){
    const listBuilder = () => {
        if (isLine && elements.length > 1) {
            let newArray = [];
            let i = 0;
            do {
                newArray.push(elements[i]+ ", ")
                i++
            }
            while (i < elements.length - 1);
            newArray.push(elements[i]+".")
            return newArray;
        } else {
            return elements;
        }
    }
    const list = listBuilder()
    console.log(list)
    return(
        <ListWrap>
            <SubHeader>{title}</SubHeader>
            <ListSingleLine>
                {list.map(item => <ListElements modifiers={isLine && ["line"]} >{item}</ListElements>)}
            </ListSingleLine>
        </ListWrap>

    );
}


