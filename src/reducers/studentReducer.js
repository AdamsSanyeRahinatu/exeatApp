
function studentReducer(state, action) {
    
    switch (action.type) {
        case "addstudent":
            const { name, level, date, indexNo}=action.payload;
            return [ ...state,{name, level, date,indexNo}]
            case "delete":
                return state.filter((student)=>student.indexNo !==action.indexNo);
            default:
                return state;

    }
    
 
}

export default studentReducer;
