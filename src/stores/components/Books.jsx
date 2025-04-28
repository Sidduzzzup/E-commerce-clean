import React from 'react'
import { booksData } from '../data/books'

const Books = () => {
  return (
    <> 
   
          <div className="proTitle">
            <h2>World of Stories</h2>
          </div>


          <div  className="proSection">

         { booksData.map((item)=>{
            return( 
            <div  className="imgBox" key={item.id}>
                <img className="proImagebooks"  src={ item.image } />
            </div>


          )})}

          </div>

 
          </>
  )
}

export default Books