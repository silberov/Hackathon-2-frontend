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
    //console.log(title, data[title], data.skills)
  return (
    <CategoryWrap>
      <Healine modifiers={["primery"]}>{title}</Healine>
      <hr />
      <CategoryinnerWrap>
        {data[title].map((item) => (
          <List isLine={oneLine} title={Object.keys(item)[0]} elements={item[Object.keys(item)[0]]} />
        ))}
      </CategoryinnerWrap>
    </CategoryWrap>
  );
}

export default Category;
