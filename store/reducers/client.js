const clientInitState = {
  name: "",
  mobile: "",
};

const clientReducer = (state = clientInitState, action) => {
  switch (action.type) {
    case "changeMobile": {
      return { ...state, mobile: action.body.mobile };
    }
    default: {
      return state;
    }
  }
};

module.exports = clientReducer;
