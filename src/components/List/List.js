import styled from "styled-components";
import { ListElements, ListContainer, SubHeader } from "../Typography"

const ListWrap = styled.div`
    margin: 0 50px 10px 0;
`;

export function List ({data, isLine}){
    console.log(data)
    const title = Object.keys(data);
    const elements = Object.values(data)[0];
    //title, elements
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
    console.log(title, elements, isLine)
    const list = listBuilder()
    return(
        <ListWrap>
            <SubHeader>{title}</SubHeader>
            <ListContainer>
                {list.map(item => <ListElements modifiers={isLine && ["line"]} >{item}</ListElements>)}
            </ListContainer>
        </ListWrap>

    );
}


