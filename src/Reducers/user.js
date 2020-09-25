const initialState = {
  username: "",
  email: "",
  isLogged: false,
  cart: [],
};

export function UserReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_LOGIN":
      return { ...state, login: action.payload };
    case "SET_USERNAME":
      return { ...state, username: action.payload };
    case "SET_CART":
      return { ...state, cart: action.payload };

    default:
      return state;
  }
}
