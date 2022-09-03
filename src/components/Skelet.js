 import React from 'react'
 import Skeleton from 'react-loading-skeleton'
 
 function Skelet({ cards }) {
   return (
      Array(cards).fill(0).map((_, index) => (
        <div className='card-skeleton' key={index}>
          <div className='left-col'>
              <Skeleton circle width={40} height={40}/>
          </div>
          <div className='right-col'>
              <Skeleton count={4} style={{ marginBottom: '.6rem' }} />
          </div>
      </div>
      ))

   )
 }
 
 export default Skelet