import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export const useFetch = () => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  const params = useParams()

  // create query string and add to url to fetch specific data
  const createQueryString = () => {
    if(!params.category) return ""
    let queryString = `?category=${params.category}`
    if(params.slug) {
      queryString += `&slug=${params.slug}`
    }
    return queryString
  }

  const queryString = createQueryString()
  const url = 'http://localhost:3001/products' + queryString
  
  useEffect(() => {
    // abort controller for async data
    const controller = new AbortController()

    const fetchData = async () => {
      setIsPending(true)
      
      try {
        const res = await fetch(url, { signal: controller.signal })
        if(!res.ok) {
          throw new Error(res.statusText)
        }
        const data = await res.json()

        setIsPending(false)
        setData(data)
        setError(null)
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("the fetch was aborted")
        } else {
          setIsPending(false)
          setError('Could not fetch the data')
        }
      }
    }

    fetchData()

    return () => {
      controller.abort()
    }

  }, [url])

  return { data, isPending, error }
}