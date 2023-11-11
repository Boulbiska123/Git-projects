// import { useState } from 'react'
import axios from 'axios'
import { useEffect, useState } from "react"

function App() {
  const [quotes,setquotes]=useState([])
  const[quote,setquote]=useState('')

  useEffect(()=>{
    const fetchdata= async ()=>{
      try{
        const res = await axios.get('https://type.fit/api/quotes')
        console.log(res.data)
        setquotes(res.data);
      }catch(err){
        console.error(err)
      }
    }
    fetchdata();
  },[])
  // console.log(quotes[2])
  
  const randomquote = ()=>{
    // get random  number 
    const randomindex= Math.floor(Math.random() * quotes.length)
    setquote(quotes[randomindex])
    // console.log("new quote",quote)
  }

  return (
    <>
      <div className="container position-absolute top-50 start-50 translate-middle">
        <h1 className='d-block mx-5 text-uppercase w-100 fw-bold'>Random Quote Generator</h1>
        <div class="d-block card my-4 w-60 bg-info bg-gradient">
        <div class="card-body text-center">
          <blockquote class="blockquote mb-0">
            <p>{quote.text}</p>
            <footer class="blockquote-footer">{quote.author}<cite title="Source Title">Source Title</cite></footer>
          </blockquote>
        </div>
        </div>
        <div className="position-absolute top-90 start-50 translate-middle">
          <button className='btn btn-dark ' onClick={randomquote}>Get Random Quote!</button>
        </div>
      </div>
    </>
  )
}

export default App
