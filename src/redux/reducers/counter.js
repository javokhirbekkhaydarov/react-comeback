const counter = (state = 0, action) => {
  const dec = () => {
    if (state >= 1) {
      return state - 1;
    }
    return state;
  };

  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return dec();
    default:
      return state;
  }
};

export default counter;
