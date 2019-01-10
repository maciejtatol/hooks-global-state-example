export default (state, action) => {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.name };
    case "setSurname":
      return { ...state, surname: action.surname };
    default:
      return state;
  }
};
