import { useState } from "react"

export const useForm = (initialState = {}) => {

    const [formState, setFormState] = useState(initialState);

    const onResetForm = () => {
        setFormState(initialState);
    }

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        })
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}