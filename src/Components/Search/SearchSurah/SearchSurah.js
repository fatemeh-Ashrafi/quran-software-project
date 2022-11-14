import './SearchSurah.css'
import JsonData from "../../Data/quran-text-emla.json";
import { QuranData } from "../../Data/quran-metadata";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import Theme from '../../Setting/Theme/Theme';
import { IconTextSurah } from '../../Svg/IconTextSurah';
import Translation from '../../Data/quran-translate.fa.makarem.json';
// import fontSize from '../../Setting/FontSize/Feature/FontSize';

// import "../../Font/me-quran.ttf"
// import "../../Font/me-quran.eot"
// import '../../Font/me-quran.woff'
// import "../../Font/me-quran.woff2"
import "../../Font/IRANSansWeb_Black.ttf"

export default function SearchSurah() {

    const param = useParams();

    const [data] = QuranData.Suras.filter((item)=>{
        
        return item[4] === param.id;
    })

    const surah = JsonData.slice(data[0],data[0] + data[1]);
    const surahTranslate = Translation.slice(data[0],data[0] + data[1]);


    const fontSizee = useSelector((state) =>state.fontSize.value.font);
    console.log(fontSizee)
    return(
        <div className='surahtext
        'style={{fontSize:`${fontSizee}px` , backgroundColor: `${Theme}`}}  >


            <div className='headerquran'>
                <div className='image'>
                    {/* <img src="https://app.nasimrezvan.com/assets/quran-backdrop.7b12a1e.svg" /> */}
                </div>
                <div className='icontextsurah'><IconTextSurah/></div>
            </div>

            {surah.map((item,index)=>{
                return( 
                    <>
                        <div className="itemsurah">
                             <div className='surah' >{item}</div>
                            <div className='translate'>{surahTranslate[index]}</div>
                        </div>                    
                    </>
                )
                
            })}
            
        </div>
        
    )
    
}
