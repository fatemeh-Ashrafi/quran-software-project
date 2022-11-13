import React from 'react';
import { useParams } from 'react-router-dom';
import { QuranData } from '../../Data/quran-metadata';
import Translation from '../../Data/quran-translate.fa.makarem.json'

export default function SurahTranslation() {

    const param = useParams();

    const [text]= QuranData.Suras.filter((item)=>{
        return item[4] === param.id
    })

    
const  translateText = Translation.slice(text[0], text[0] + text[1])

  return (
    <div>

    {
     translateText.map((item,index)=>{
        return(
            <>
            <div>{item}</div>
            {/* <div>{index}</div> */}
            </>
        )
     }) 

    }

    </div>
  )
}
