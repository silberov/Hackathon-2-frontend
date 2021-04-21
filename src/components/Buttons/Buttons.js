import styled from "styled-components";
import colors from "../../utils/colors";

const NoBorderButton = styled.input`
  border: none;
  background-color: white;
  color: ${colors.lightGray};
  font-style: normal;
  font-weight: 600;
`;

export default function AddButton() {
  return (
    <>
      <NoBorderButton type="submit" value="+ Add" />
    </>
  );
}
