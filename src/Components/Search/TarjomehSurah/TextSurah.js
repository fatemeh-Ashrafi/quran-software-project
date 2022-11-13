// import TextTranslation from '../../Data/quran-translate.fa.makarem.json';
// import { QuranData } from '../../Data/quran-metadata';
// import { useParams } from 'react-router-dom';

// function TextSurah() {

//   const param = useParams();

//   const [data] = QuranData.Suras.filter((item)=>{
//       return item[4] === param.id
//   })

//   const text = TextTranslation.slice(data[0],data[0]+data[1])


//   console.log(TextTranslation)


//   return (
//     <div>
      
//         {
//           TextTranslation.map((item,index)=>{
//             return(
//               <div>
//                 <div key={index}>{item}</div>
//               </div>
//             )
//           })
//         }


//     </div>
//   )
// }

// export default TextSurah
