
import {useSelector, useDispatch} from 'react-redux';
import {orderedIceCream, restockedIceCream} from './iceCreamSlice.js'
import { useState } from "react";
export const IceCreamView = () => {
  // allow the user to input restock value
  const [value, setValue] = useState(1)
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams)
  const dispatch = useDispatch();
  const handleChangeRestockValue = (e) => {
    //console.log(e.target.value);
    setValue(parseInt(e.target.value));
  }
  return(
    <div>
      <h2>Number of ice creams - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(orderedIceCream())}>Order ice cream</button>
      <input type="number" value={value} onChange={handleChangeRestockValue} />
      <button onClick={() => dispatch(restockedIceCream(value))}>restock ice cream</button>
    </div>
  )
}
