export const multiplyReducer = (state = 2, actionObject) => {
  switch(actionObject.type){
    case "MULTIPLY_BY_2":
      state = actionObject.payload * 2;
      return state;
    case "Divide_BY_2":
      state = actionObject.payload / 2;
      return state;
    default:
      return state;
  }
}