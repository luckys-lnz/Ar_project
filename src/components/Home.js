import React from 'react'
import Search from './Search'
import { Link } from 'react-router-dom';


export const Home = () => {
  return (
    <>
      <div className='rtl p-4 bg-gray-500 rounded mx-20'>

        <div className=" flex justify-between w-75 bg-white mx-20">

          <div><Search /></div>

          <span className="flex justify-between">

            <p className="bg-black text-white p-2 m-5 ">التصفية حسب التاريخ</p>

            <p className="bg-black text-white p-2 m-5">البحث حسب الموقع</p>
            
          </span>

        </div>

        <ListInfo />

      </div>

    </>

  )
}

const ListInfo = () => {

  return (

    <div className=''>

        <div className='flex justify-between my-4 bg-white p-2 rounded-full'>

          <Link to='/MapData'>بقي 10 أيام</Link> <Link to='/MapData'>مرحبا، كيف حالك</Link>

        </div>

    </div>
  )
}

