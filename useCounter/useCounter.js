import { useState } from "react"

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue);

    const incrementar = () => setCounter(counter+1);

    const decrementar = () => setCounter(counter-1);

    const reset = () => setCounter(initialValue);

    return {
        counter,
        setContador: (value) => setCounter(value),
        incrementar,
        decrementar,
        reset
    }

}