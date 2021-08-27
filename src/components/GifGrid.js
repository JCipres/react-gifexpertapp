import React from 'react'
//import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

  //  const [images, setImages] = useState([]);
 // const {loading} = useFetchGifs();
 const { data:images, loading }= useFetchGifs(category);
 //console.log(loading);
    //const [count, setCount]= useState(0);
    //solo se ejecuta la intruccion cuando el componente es renderizado por primera vez
  /*  useEffect(() => {
        getGifs(category)
        .then(setImages);
    }, [category])
*/


   

    //getGifs();

    return (
        <>
        <h3 className='animate__animated animate__bounce'>{category}</h3>
        {loading && <p className='animate__animated animate__bounce'>Loading</p>}
        <div className="card-grid">
           
            
           {
               images.map(img=>(
                   <GifGridItem 
                   key={img.id}
                   {...img}/>
               ))
           }
         
   
   </div>


      
        </>
    )
}

/*


        { 
        loading ? 'Cargando...aa' : 'Data terminada' }

        --------------------


 <div className="card-grid">
           
            
                {
                    images.map(img=>(
                        <GifGridItem 
                        key={img.id}
                        {...img}/>
                    ))
                }
              
        
        </div>
*/
