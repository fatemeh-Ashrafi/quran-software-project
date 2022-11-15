import { useSelector, useDispatch } from "react-redux";
import { addFont,removeFont,addtranslate,removetranslate } from './FontSizeSlice';
import './FontSize.css'

const FontSize =()=> {
  const dispatch = useDispatch();
  const fontSizee = useSelector((state) =>state.fontSize.value.font);

  const fontSizetarjomeh= useSelector((state) =>state.fontSize.value.fonttarjom);

  console.log(fontSizee)
  return (
    <div className="fontsize">
      {/* <div className="qq"> */}
      {/* <div className="textsurah">
            <h1> سایز فونت سوره: </h1>
            <p>{fontSizee}</p>
      </div> */}
      {/* <div className="texttranslate">
            <h1>سایز فونت ترجمه: </h1>
            <p>{fontSizee}</p>
      </div> */}
      {/* </div> */}
        <div className="buttonsize">
          <div className="textsurah">
            <h1> سایز فونت سوره: </h1>
            <p>{fontSizee}</p>
          </div>
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

        <div className="qq">
          <div className="texttranslate">
            <h1> سایز فونت ترجمه: </h1>
            <p>{fontSizetarjomeh}</p>
          </div>
          <div className="addfontsize">
              <button onClick={()=> dispatch(addtranslate())}>Add</button>
          </div>

          <div className="removefontsize">
              <button onClick={()=> dispatch(removetranslate())}>Remove</button>
          </div>

            <div className="textsize">
                <p style={{fontSize : `${fontSizetarjomeh}px`}}></p>
            </div>
        </div>
    </div>
  )
}
export default FontSize;