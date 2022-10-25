import { QuranData } from "../../Data/quran-metadata" 

function ShowSurah() {

    const listItem = QuranData.Suras.map((item,index)=>
         <div key={index}>{item[4]}</div>
    )
    return(
        <div>
            {listItem}
        </div>
    )

}

export default ShowSurah

 