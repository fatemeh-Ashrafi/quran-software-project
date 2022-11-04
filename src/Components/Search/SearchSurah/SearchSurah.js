import JsonData from '../../Data/quran-text-emla.json';
import { QuranData } from "../../Data/quran-metadata"; 
import { useParams } from 'react-router-dom';

export default function SearchSurah() {

    // console.log(JsonData);
    const param = useParams()
    const data = QuranData.Suras.map((item,index)=>{
      if(param.id === index){
       JsonData.slice(index)
        return(<div>{item}</div>)
      }
      console.log(param)
      // console.log(JsonData)
        // console.log(item)
      // console.log(index)
    })
    // const data = JsonData.slice().map((item,index)=>{
    //   return(<div key={index}>{item}</div>)
    // })
  return (
    <div>
      {data}
    </div>
  )
}
