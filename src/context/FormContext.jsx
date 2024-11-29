import React, {createContext, useContext, useState} from 'react'

const FormProvider = createContext();

export function useCallForm(){
    return useContext(FormProvider);
}


export const FormValuesProvider = ({children}) => {
    const [idx, setIdx] = useState(0)
    const [expense, setExpense] = useState("");
    const [category, setCategory] = useState("");
    const [cost, setCost] = useState("");
    const [date, setDate] = useState("");

    return (
        <FormProvider.Provider value={{idx, setIdx, expense, setExpense, category, setCategory, cost, setCost, date, setDate}}>
            {children}
        </FormProvider.Provider>
    )
}

export default FormProvider