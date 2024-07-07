import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    //this below code was classic react practice1 - modifying a more optimised version with useLoaderData hook
    // const [data, setData] = React.useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/akshayrx')
    //     .then((response) => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])

    const data = useLoaderData()

  return (
    <div className='text-center m-4 bg-gray-500 text-3xl p-4'>Github repositories {data.public_repos}
    <img src={data.avatar_url} width={300} alt="" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/akshayrx')
    return response.json()

}