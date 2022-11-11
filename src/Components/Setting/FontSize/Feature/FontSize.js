import { useSelector, useDispatch } from "react-redux";
import { addFont,removeFont } from './FontSizeSlice';
const FontSize =()=> {
  const dispatch = useDispatch();
  const fontSizee = useSelector((state) =>state.fontSize.value.font);
  console.log(fontSizee)
  return (
    <div>
        <p>{fontSizee}</p>
        <div>
            <button onClick={()=> dispatch(addFont())}>+ add</button>
            <button onClick={()=> dispatch(removeFont())}>- remove</button>
            <p style={{fontSize : `${fontSizee}px`}}>
              </p>
              </div>
    </div>
  )
}
export default FontSize;