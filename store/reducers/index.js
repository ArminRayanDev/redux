const { combineReducers } = require("redux");
const accountReducer = require("./account");
const clientReducer = require("./client");

const rootReducer = combineReducers({
  account: accountReducer,
  client: clientReducer,
});

module.exports = rootReducer;
