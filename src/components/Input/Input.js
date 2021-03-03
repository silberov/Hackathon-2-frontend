import useInputState from "../../hooks/useInput";
import { Input } from "../Typography.js";

export const TextInput = ({ initialValue = "", ...props }) => {
  const [userInput, handleUserInput] = useInputState(initialValue);

  return <Input value={userInput} onChange={handleUserInput} {...props} />;
};
