import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Home() {
    const [data, setData] = useState()

    useEffect(() => {
        const tabData = async () => {
            try {
                const response = await axios({
                    method: 'get',
                    url: 'http://localhost:4000/api/add/',
                    status: 201
                  })
                console.log("response data is here =>> ", response.data.data)
                setData(response.data.data);
            } catch (error) {
                console.error("Ooops sorry ! try again ", error);
            }
        }
        tabData();
    },[])

    




  return (
    <div className='w-full h-svh flex justify-center items-center p-8 relative'>
            <table> 
              <tr className='flex justify-center items-center rounded-md bg-orange-300 shadow-md shadow-slate-400'>
                <th className='w-40 p-4 text-white rounded-t-sm'>ID</th>
                <th className='w-40 p-4 text-white rounded-t-sm'>Name</th>
                <th className='w-40 p-4 text-white rounded-t-sm'>Phone No.</th>
                <th className='w-40 p-4 text-white rounded-t-sm'>City</th>
              </tr>
              {data?.map((itm) => {
                  return(
                    <tr className='flex justify-center items-center bg-gray-400 shadow-md shadow-orange-300 border-b border-orange-300'>
                    <td className='w-40 p-3 text-white flex justify-center items-center'>{itm.id}</td>
                    <td className='w-40 p-3 text-white flex justify-center items-center'>{itm.name}</td>
                    <td className='w-40 p-3 text-white flex justify-center items-center'>{itm.phone}</td>
                    <td className='w-40 p-3 text-white flex justify-center items-center'>{itm.city}</td>
                  </tr>
                  )
              })}
            </table>

    </div>
  )
}

export default Home





