import styled from "styled-components";
import { List } from "../List/List";
import { Healine } from "../Typography";

const CategoryinnerWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CategoryWrap = styled.div`
margin: 20px 20px 35px 20px;
`

function Category({ data, oneLine }) {
    
    const title = Object.keys(data)[0]
    //console.log(data[title])
  return (
    <CategoryWrap>
      <Healine modifiers={["primery"]}>{title}</Healine>
      <hr />
      <CategoryinnerWrap>
          {data[title].map(element => <List data={element} isLine={oneLine} />)}
      </CategoryinnerWrap>
    </CategoryWrap>
  );
}

export default Category;
