export  const increment = (incrementcount) => {

    return {
        type:"INCREMENT",
        payload:incrementcount
    }
}


export const decrement = () => {
    return {
        type:'DECREMENT'
    }
}

