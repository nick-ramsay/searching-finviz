import { useState } from 'react';

export const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    function handleChange(e) {
        setValue(e.target.value);
    }

    return [value, handleChange];
} //This dynamicaly sets react hooks as respective form inputs are updated...


export const goBack = () => {
    window.history.back();
};

export const commaFormat = (num) => {
    return num.toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
};

