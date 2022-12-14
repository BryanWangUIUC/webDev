const bankAccount = {
    balance: 123,
    name: "Alice",
    dateOpened: "12/23/1988"
};

const bankAccountReducer = (state = bankAccount, action) => {
    switch (action.type) {
        case 'deposit':
            console.log("bankAccountReducer", "deposit", action.amount);
            return {
                ...state,
                balance: state.balance + action.amount
            };
            break;
        case 'withdraw':
            console.log("bankAccountReducer", "withdraw", action.amount);
            return {
                ...state,
                balance: state.balance - action.amount
            };
            break;
        default:
            return state;
    };
};

export  default bankAccountReducer;