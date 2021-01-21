import styled from "styled-components";
import { List } from "../List/List";
import { Healine } from "../Typography";

const CategoryinnerWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CategoryWrap = styled.div`
margin: 20px 20px 35px 20px;
`

function Category({ data, oneLine }) {
    console.log(oneLine)
  return (
    <CategoryWrap>
      <Healine modifiers={["primery"]}>{data.categoryname}</Healine>
      <hr />
      <CategoryinnerWrap>
        {data.categorydata.map((item) => (
          <List isLine={oneLine} title={item.title} elements={item.elements} />
        ))}
      </CategoryinnerWrap>
    </CategoryWrap>
  );
}

export default Category;
