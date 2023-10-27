import React, { useEffect } from 'react'
import { fetchExample } from '../../api/query/exampleQuery'
import { useQuery } from 'react-query'

export default function Dashboard() {
  const exampleQuery = useQuery({
    queryKey: ['example'],
    queryFn: fetchExample,
  })
  // exampleQuery.isLoading && <div className="">Loading...</div>
  if (exampleQuery.isLoading) {
    return <div>Loading...</div>
  }
  // useEffect(() => {
  //   const data = fetchExample()
  //   console.log(data)
  // }, [])
  return (
    <div>
      <h1 className="absolute inset-0 m-0 mt-5 flex items-center justify-center p-4 text-5xl">
        Dashboard
      </h1>
    </div>
  )
}
