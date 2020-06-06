const initialState = {
    newValue : 0
};

export const changeNumber = (state = initialState, action) => {
    switch (action.type){
        case 'DECREMENT_NUMBER_UPDATE':
            return{
                ...state,
                newValue: action.newValue - 1
            };
        case 'INCREMENT_NUMBER_UPDATE':
            return{
                ...state,
                newValue: action.newValue + 1
            }
        default:
            return state;
    }
}