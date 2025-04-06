import './App.css'
import Main from './components/Main'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import { useEffect, useState } from 'react'
function App() {
  const [showModal, setModal] = useState(false)
  const [data, setData] = useState(null)
  
  useEffect(()=>{

    const today = (new Date()).toDateString()
    const localKey = `NASA-${today}`;
    if (localStorage.getItem(localKey)){
      const apiData = JSON.parse(localStorage.getItem(localKey))
    setData(apiData) 
    console.log("fetch from cache")
    return
  }
  localStorage.clear()
    async function fetchApiData(){
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = 'https://api.nasa.gov/planetary/apod'+`?api_key=${NASA_KEY}`;
      
      try{
        const res = await fetch(url)
        const apiData = await res.json()
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData)
        console.log("fetch from url")
      }
      catch(err){
        console.log(err.message)
      }
    }
    fetchApiData()
  },[])


  const handleToggleModal=()=>{
    setModal(!showModal)
  }
  return (
    <>
    {data ? <Main data={data} /> : <div className='loadingState'><i className="fa-solid fa-spinner"></i></div>}
    {showModal &&(<Sidebar data={data} handleToggleModal={handleToggleModal}  />)}
    {data && <Footer data={data} handleToggleModal={handleToggleModal} />}
    </>
  )
}

export default App
