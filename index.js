const { getState, dispatch, subscribe } = require("./store");
const { withdrawAction, depositAction } = require("./store/actions/account");

const subscriber = () => {
  const { client, account } = getState();
  console.log(account);
};

subscribe(subscriber);

dispatch(withdrawAction(50000));

dispatch(depositAction(10000));
