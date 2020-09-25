const setLogin = (isLogged) => {
  return {
    type: "SET_LOGIN",
    payload: isLogged,
  };
};

const setUsername = (user) => {
  return {
    type: "SET_USERNAME",
    payload: user,
  };
};

const setEmail = (pass) => {
  return {
    type: "SET_EMAIL",
    payload: pass,
  };
};

const setCart = (cart) => {
  return {
    type: "SET_CART",
    payload: cart,
  };
};

export { setLogin, setUsername, setEmail, setCart };
