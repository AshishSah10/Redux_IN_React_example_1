
import {connect} from "react-redux";
import {increaseMultiplyAction, decreaseMultiplyAction} from "./multiply/actions.js"

const Component1 = (props) => {
  return(
    <div>
      inside Component1
      <div>{props.multiply}</div>
      <button onClick={() => props.increaseMultiply(props.multiply)}>IncreaseMultiply</button>
      <button onClick={() => props.decreaseMultiply(props.multiply)}>DecreaseMultiply</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  multiply: state.multiply,
  
}); // here state is our root-reducer Object/store
// what-ever we are returning from mapStateToProps() it will be available to this component via props
const mapDispatchToProps = (dispatch) => ({
   increaseMultiply: (multiply) => dispatch(increaseMultiplyAction(multiply)),
   decreaseMultiply: (multiply) => dispatch(decreaseMultiplyAction(multiply))
});
// here dispatch is dispatch method provided to you by redux-library, it is the method which lets us update state in our store
// what-ever we are returning from mapDispatchToProps() it will be available to this component via props
// we generally return method with actionObject as argument from mapDispatchToProps
export default connect(mapStateToProps,mapDispatchToProps)(Component1)