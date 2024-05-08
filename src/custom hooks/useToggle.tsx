import {useState} from "react";

export const useToggle = (defaultValue: boolean) => {
    const [value, setValue] = useState<boolean>(defaultValue);

    function toggleValue(newValue: boolean) {
        setValue(prevState => !newValue);
    }

    return [value, toggleValue];
};

