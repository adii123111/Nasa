// import React from 'react'
// import mars from '../Images/mars.jpg'

export default function Main(props) {
  const {data}=props
  return (
    <div className='img-container'>
      <img className='bg-img' src={data.hdurl} alt={data.title || "bgimg"} />
    </div>
    
  )
}
