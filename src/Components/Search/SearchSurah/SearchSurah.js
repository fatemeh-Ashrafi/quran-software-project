import './SearchSurah.css'
import JsonData from "../../Data/quran-text-emla.json";
import { QuranData } from "../../Data/quran-metadata";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import Theme from '../../Setting/Theme/Theme';
import TextTranslation from '../../Data/quran-translate.fa.makarem.json';
import { IconTextSurah } from '../../Svg/IconTextSurah';
// import { ImgQuran } from '../../Svg/ImgQuran';

export default function SearchSurah() {

    const param = useParams();

    const [data] = QuranData.Suras.filter((item)=>{
        return item[4] === param.id;
    })

    const surah = JsonData.slice(data[0],data[0] + data[1]);

    const fontSizee = useSelector((state) =>state.fontSize.value.font);

    // console.log(TextSurah)

    return(
        <div className='surahtext'  style={{fontSize : `${fontSizee}px` , backgroundColor: `${Theme}`}}>

            <div className='headerquran'>
            {/* <div className='imgqran'><ImgQuran/>/</div> */}
            {/* <div >بسم الله الرحمن الرحیم</div> */}
            <div className='icontextsurah'><IconTextSurah/></div>

            </div>

            {surah.map((item,index)=>{
                return( 
                <div className="itemsurah">
                <div className='surah' >{item}</div> 
                <div className='translation'>{TextTranslation[index]}</div>
                </div>
                )
            })}
            
        </div>
    )
    
}
