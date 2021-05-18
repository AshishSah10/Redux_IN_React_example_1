export const countReducer = (state=0, actionObj) => {
  switch(actionObj.type){
      case "INCREASE_BY_1":
        state = actionObj.payload + 1;
        return state;
      case "DECREASE_BY_1":
        state = actionObj.payload - 1;
        return state;
      default:
        return state;
  }
}