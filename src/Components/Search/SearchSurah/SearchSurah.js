import './SearchSurah.css'
import JsonData from "../../Data/quran-text-emla.json";
import { QuranData } from "../../Data/quran-metadata";
import { useParams } from "react-router-dom";

export default function SearchSurah() {

    const param = useParams();
    const [data] = QuranData.Suras.filter((item)=>{
        return item[4] === param.id;
    })
    const surah = JsonData.slice(data[0],data[0] + data[1])
    
    return(
        <div className='surahtext' >
            
            <div className='headerquran'>بسم الله الرحمن الرحیم</div>
            {surah.map((item,index)=>{
                return( 
                <div className="itemsurah">
                <div key={index } >{item}</div> 
                </div>
                )
            })}
            
        </div>
    )
    
}
