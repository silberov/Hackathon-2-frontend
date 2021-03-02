import useInputState from "../../hooks/useInput";
import { P } from "../Typography";

export const TextInput = ({
    initialValue = '',
    editable = true,
    //inputRef,
    ...props
}) => {
    const [userInput, setUserInput] = useInputState(initialValue);
    // console.log(inputRef);
    return !editable ? (
        <P style={{ width: '90%', cursor: 'pointer' }}>{userInput}</P>
    ) : (
        <TextInput
            //ref={inputRef}
            value={userInput}
            onChange={setUserInput}
            {...props}
        ></TextInput>
    );
};