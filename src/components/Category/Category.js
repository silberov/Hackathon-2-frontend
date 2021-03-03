import styled from "styled-components";
import colors from "../../utils/colors";
import { List } from "../List/List";
import { LineHeader } from "../Typography";

const CategoryinnerWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CategoryWrap = styled.div`
  margin: 20px 20px 35px 20px;
`;

function Category({ isEditable = false, title, data, oneLine = false }) {
  // {[....]}
  //onst title = Object.keys(data)[0]
  // const title = data.name;
  // ["id", "name"] === "id "
  //console.log(data[title])
  //console.log("data", data);
  return (
    <CategoryWrap>
      {!isEditable && <LineHeader>{title}</LineHeader>}
      <CategoryinnerWrap>
        {data.map((element) => (
          <List data={element} isLine={oneLine} isEditable={isEditable} />
        ))}
      </CategoryinnerWrap>
    </CategoryWrap>
  );
}

export default Category;
