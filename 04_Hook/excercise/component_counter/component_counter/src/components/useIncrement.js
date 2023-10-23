import { useState } from "react";

export const useIncrement = (iniValue) => {
    const [value, setValue] = useState(iniValue);
    const changeValue = () => {
        setValue(prev => prev + 1);
    }
    return [value, changeValue];
}