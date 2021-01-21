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
    //const elements = Object.values(data[title])
    console.log(data[title])
    // console.log("elements",elements)
    // const it = data[title];
    // data[title].forEach(item => console.log(item))
    //console.log(title, data[title], data.skills)
    const l = {Software: ["Englisch", "Französisch", "Türkisch"], Professional: ["Englisch", "Französisch", "Türkisch"], Languages: ["Englisch", "Französisch", "Türkisch"]}
    // Languages: (3) ["Englisch", "Französisch", "Türkisch"]

  return (
    <CategoryWrap>
      <Healine modifiers={["primery"]}>{title}</Healine>
      <hr />
      <CategoryinnerWrap>
          {l.map(element => <List data={element} isLine={oneLine} />)}
         
          <List data={{Software: data[title].Software}} isLine={oneLine}/>
          <List data={{Professional: data[title].Professional}} isLine={oneLine}/>
          <List data={{Languages: data[title].Languages}} isLine={oneLine}/>
      </CategoryinnerWrap>
    </CategoryWrap>
  );
}

export default Category;
