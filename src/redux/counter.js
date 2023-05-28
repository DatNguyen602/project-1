const INCREMENT = "increment";
const DECREMENT = "decrement";

const init = {
    count: 0,
}

export const increment = () => ({
    type: INCREMENT
})
export const decrement = () => ({
    type: DECREMENT
})

function counterReducer(state = init,action){
    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state;
    }
}

export default counterReducer;