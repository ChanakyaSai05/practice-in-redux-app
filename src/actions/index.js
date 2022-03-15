export const increment = (num) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};
export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
export const signin = () => {
  return {
    type: "SIGN_IN",
  };
};
export const search = (e) => {
  return {
    type: "EVENT",
    payload: e,
  };
};
