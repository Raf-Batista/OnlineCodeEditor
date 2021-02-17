import { useState } from 'react';

const useForm = (initialValue = {}, callback: any) => {
    const [values, setValues] = useState(initialValue);

    const handleChange = ({ target }: any) => {
        setValues((values) => ({
            ...values,
            [target.name]: target.value
        }))
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        callback(values);
        reset();
    };

    const reset = () => {
        setValues(initialValue);
    };

    return {
        values,
        handleChange,
        handleSubmit,
    }
};

export default useForm;