import {DARK_MODE} from '../actiondark/Darktype'
const intialState={
    theme: false
}
const Darkreducer =(state=intialState,action)=>{

    switch (action.type) {
        case DARK_MODE:
            return {...state, theme:action.payload };
        default:
            return state;
    }

}

export default Darkreducer;