const Redux = require("redux");

const depositReducer = (state = { balance: 0 }, action) => {
  console.log("hey there!!!!");
  state.balance = state.balance + 10000;
  return state;
};

const subscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

const store = Redux.createStore(depositReducer);

store.subscribe(subscriber);

store.dispatch({ type: "" });
