const withdrawAction = (amount) => {
  if (amount > 100000) {
    throw new Error("Withdrawn amount should be less than 100000!");
  }
  return {
    type: "withdraw",
    body: {
      amount,
    },
  };
};

const depositAction = (amount) => {
  if (amount > 100000) {
    throw new Error("Deposited amount should be less than 100000!");
  }
  return {
    type: "deposit",
    body: {
      amount,
    },
  };
};

module.exports = { withdrawAction, depositAction };
