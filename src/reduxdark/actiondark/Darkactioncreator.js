import { DARK_MODE } from "../actiondark/Darktype";

export const Darkcreatot =(mode)=> async(dispatch)=>{
    dispatch({
        type:DARK_MODE,
        payload:mode
    })
    
}
