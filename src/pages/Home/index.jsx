import { useState, useEffect } from "react"

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

export function Home() {
  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies = async (url) => {
    
  }


  return (
    <div>
      Home
    </div>
  )
}