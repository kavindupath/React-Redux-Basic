export function addNumber(number){
    return{
        type:"ADD",
        payload:number
    };
}


export function SubtractNumber(number){
    return{
        type:"SUB",
        payload:number
    };
}