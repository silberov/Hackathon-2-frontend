import useInputState from "../../hooks/useInput";

export const TextInput = ({
    initialValue = '',
    editable = true,
    inputRef,
    ...props
}) => {
    const [userInput, setUserInput] = useInputState(initialValue);
    // console.log(inputRef);
    return !editable ? (
        <p style={{ width: '90%', cursor: 'pointer' }}>{userInput}</p>
    ) : (
        <TextInput
            ref={inputRef}
            value={userInput}
            onChange={setUserInput}
            {...props}
        ></TextInput>
    );
};