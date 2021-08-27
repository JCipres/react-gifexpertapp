import React from 'react'

export const GifGridItem = ({id,titles, url}) => {
    //console.log(id,titles, url);
    return (
        <div className='card animate__animated animate__bounce'>
           <img src={url}alt={titles} />
           <p>{titles}</p>
        </div>
    )
}
