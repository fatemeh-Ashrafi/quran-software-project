import { useSelector, useDispatch } from "react-redux";
import { addFont,removeFont } from './FontSizeSlice';
import './FontSize.css'

const FontSize =()=> {
  const dispatch = useDispatch();
  const fontSizee = useSelector((state) =>state.fontSize.value.font);
  console.log(fontSizee)
  return (
    <div className="fontsize">

      <div className="textnumber">
        <h1>font size : </h1>
       <p>{fontSizee}</p>
      </div>

        <div className="buttonsize">
          <div className="addfontsize">
              <button onClick={()=> dispatch(addFont())}>Add</button>
          </div>

          <div className="removefontsize">
              <button onClick={()=> dispatch(removeFont())}>Remove</button>
          </div>

            <div className="textsize">
                <p style={{fontSize : `${fontSizee}px`}}></p>
            </div>
        </div>
    </div>
  )
}
export default FontSize;