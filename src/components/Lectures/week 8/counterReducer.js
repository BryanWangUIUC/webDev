const count = 234;

const counterReducer = (state = count, action ) => {
    switch (action.type) {
        case "increment-counter":
            return state + 1;
            break;
        case "decrement-counter":
            return state - 1;
            break;
        default:
            return count;
    }
};

export default counterReducer;