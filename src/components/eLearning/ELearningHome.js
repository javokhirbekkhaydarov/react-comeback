import {useDispatch, useSelector} from "react-redux";

export default function ELearningHome() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch()
  return (
    <>
      <div>
        <h1>Counter: {counter}</h1>
          <button onClick={() => dispatch({type:'INC'})}>inc</button>
          <button onClick={() => dispatch({type:'DEC'})}>dec</button>
      </div>
    </>
  );
}
