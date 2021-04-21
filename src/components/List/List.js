import { useEffect, useState } from "react";
import styled from "styled-components";
import colors from "../../utils/colors";
import AddButton from "../Buttons/Buttons";
import { ListElements, ListContainer, SubHeader, Select } from "../Typography";

const ListWrap = styled.div`
  margin: 0 50px 30px 0;
`;

export function List({ isEditable, data, isLine }) {
  const [selectList, setSelectList] = useState([]);
  useEffect(() => {
    setSelectList([
      { id: 1, name: "Figma" },
      { id: 2, name: "Miro" },
      { id: 3, name: "Keynote" },
      { id: 4, name: "MS Office" },
      { id: 5, name: "Jira" },
      { id: 6, name: "Resource Guru" },
      { id: 7, name: "Merlin" },
      { id: 8, name: "Projektron" },
      { id: 9, name: "Maconomy" },
    ]);
    // should be from an api call
  }, []);
  const title = Object.keys(data)[0];
  const elements = Object.values(data)[0];
  const listBuilder = () => {
    if (isLine && elements.length > 1) {
      let newArray = [];
      let i = 0;
      do {
        newArray.push(elements[i] + ", ");
        i++;
      } while (i < elements.length - 1);
      newArray.push(elements[i] + ".");
      return newArray;
    } else {
      return elements;
    }
  };
  //console.log(title, elements, isLine)
  const list = listBuilder();
  //  console.log("listlist)
  return (
    <ListWrap>
      <SubHeader>{title}</SubHeader>
      <ListContainer>
        {list.map((item) => (
          <ListElements modifiers={isLine && isEditable ? ["line"] : ""}>
            {item}
          </ListElements>
        ))}
        <ListElements>
          <Select>
            <option className="disabled" selected disabled hidden>
              Choose option
            </option>
            {selectList &&
              selectList.map((item) => (
                <option value={item.id}>{item.name}</option>
              ))}
          </Select>
          <AddButton />
        </ListElements>
      </ListContainer>
    </ListWrap>
  );
}
