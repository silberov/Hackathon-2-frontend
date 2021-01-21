import { useState, useEffect } from 'react';
export default function useInputState(initialValue) {
    const [userInput, setUserInput] = useState(initialValue);

    useEffect(() => {
        if (initialValue) {
            setUserInput(initialValue);
        }
    }, [initialValue]);

    const handleUserInput = (event) => {
        setUserInput(event.target.value);
    };
    return [userInput, handleUserInput];
}