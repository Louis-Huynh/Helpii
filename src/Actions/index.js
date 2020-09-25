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

const receiveEmail = (email) => {
  return {
    type: "SET_EMAIL",
    payload: email,
  };
};

const setCart = (cart) => {
  return {
    type: "SET_CART",
    payload: cart,
  };
};

export { setLogin, setUsername, receiveEmail, setCart };
