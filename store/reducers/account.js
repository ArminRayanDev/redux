const accountInitState = {
  balance: 0,
};

const accountReducer = (state = accountInitState, action) => {
  switch (action.type) {
    case "deposit": {
      console.log("deposit");
      return { ...state, balance: state.balance + action.body.amount };
    }
    case "withdraw": {
      console.log("withdraw");
      return { ...state, balance: state.balance - action.body.amount };
    }
    default: {
      return state;
    }
  }
};

module.exports = accountReducer;
