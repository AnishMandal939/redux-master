
//import {useSelector, useDispatch} from 'react-redux';
import {useAppSelector, useAppDispatch} from '../../app/hooks.ts';
import {orderedIceCream, restockedIceCream} from './iceCreamSlice.js'
import { useState } from "react";
export const IceCreamView = () => {
  // allow the user to input restock value
  const [value, setValue] = useState(1)
  const numOfIceCreams = useAppSelector((state) => state.iceCream.numOfIceCreams)
  const dispatch = useAppDispatch();
  const handleChangeRestockValue = (e:React.ChangeEvent<HTMLInputElement>) => {
    //console.log(e.target.value);
    setValue(parseInt(e.target.value));
  }
  return(
    <div>
      <h2>Number of ice creams - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(orderedIceCream())}>Order ice cream</button>
      <input type="number" value={value} onWheel={(e: React.WheelEvent<HTMLInputElement>) => (e.target as HTMLInputElement).blur()} onChange={handleChangeRestockValue} />
      <button onClick={() => dispatch(restockedIceCream(value))}>restock ice cream</button>
    </div>
  )
}
