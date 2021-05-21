import { useState } from "react";
import "./styles.css";

import {Provider} from "react-redux";
import {store} from "./store.js";

import {connect} from "react-redux";
import { increaseCountAction, decreaseCountAction } from "./count/actions.js";
import Component1 from "./Component1";

function App2(props) {
  //const [count, setCount] = useState(0);
  console.log(props)
  const {count, increaseCount, decreaseCount} = props;
  return (
    <div className="App">
      <button onClick={() => increaseCount(count)}>
        Up
      </button>
      <br />
      {count}
      <br />
      <button onClick={() => decreaseCount(count)}>Down</button>
      
        <Component1/>
     
    </div>
  );
}

const mapStateToProps = (state) => ({
  count: state.count,
  
}); // here state is our root-reducer Object/store
// what-ever we are returning from mapStateToProps() it will be available to this component via props
const mapDispatchToProps = (dispatch) => ({
   increaseCount: (count) => dispatch(increaseCountAction(count)),
   decreaseCount: (count) => dispatch(decreaseCountAction(count))
});
// here dispatch is dispatch method provided to you by redux-library, it is the method which lets us update state in our store
// what-ever we are returning from mapDispatchToProps() it will be available to this component via props
// we generally return method with actionObject as argument from mapDispatchToProps
export default connect(mapStateToProps,mapDispatchToProps)(App2)
// if we don't provide mapDispatchToProps to connectHOC then dispatch method will be automatically available 
// props and we need to call dispatch method with every eventOperation and it will be confusing which dipatch is doing what
// so we write mapDispatchProps here and it reutrn specific actionMethod(which is 
// nothing but specific name of dispatch({key: "", payload: ""})) from it.

