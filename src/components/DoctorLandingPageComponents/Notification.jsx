import { useState } from 'react'
import * as React from 'react'
import DataTable from 'react-data-table-component'

// imported icons from react-icons ===>
import {AiOutlineSearch} from 'react-icons/ai'
import {BiMessageDetail} from 'react-icons/bi'

function Notification() {

  const columns = [
    {
        name: 'Name',
        selector: row => row.name,

    },
    {
        name: 'Number',
        selector: row => row.number,

    },
    {
        name: 'Description',
        selector: row => row.description
    },
    {
        name: 'Date',
        selector: row => row.date
    }
  ]

  const data = [
    {
      customerID: 1001,
      name: 'Danica Sesles',
      number: '09283203466',
      description: 'nirav@gmail.com',
      date: 'March 6, 2022 09:21'

    },
    {
      CustomerID: 1002,
       name: 'Danica Sesles',
      number: '09283203466',
      description: 'nirav@gmail.com',
      date: 'March 6, 2022 09:21'
    },
    {
      CustomerID: 1003,
       name: 'Danica Sesles',
      number: '09283203466',
      description: 'nirav@gmail.com',
      date: 'March 6, 2022 09:21'
    },
    {
      CustomerID: 1002,
       name: 'Danica Sesles',
      number: '09283203466',
      description: 'nirav@gmail.com',
      date: 'March 6, 2022 09:21'
    },
    {
      CustomerID: 1004,
       name: 'Danica Sesles',
      number: '09283203466',
      description: 'nirav@gmail.com',
      date: 'March 6, 2022 09:21'
    },
   {
    CustomerID: 1005,
     name: 'Danica Sesles',
    number: '09283203466',
    description: 'nirav@gmail.com',
    date: 'March 6, 2022 09:21'
    },
    {
      CustomerID: 1002,
       name: 'Danica Sesles',
      number: '09283203466',
      description: 'nirav@gmail.com',
      date: 'March 6, 2022 09:21'
    },
    {
      CustomerID: 1003,
       name: 'Danica Sesles',
      number: '09283203466',
      description: 'nirav@gmail.com',
      date: 'March 6, 2022 09:21'
    },
    {
      CustomerID: 1002,
       name: 'Danica Sesles',
      number: '09283203466',
      description: 'nirav@gmail.com',
      date: 'March 6, 2022 09:21'
    },
    {
      CustomerID: 1004,
       name: 'Danica Sesles',
      number: '09283203466',
      description: 'nirav@gmail.com',
      date: 'March 6, 2022 09:21'
    },
   {
    CustomerID: 1005,
     name: 'Danica Sesles',
    number: '09283203466',
    description: 'nirav@gmail.com',
    date: 'March 6, 2022 09:21'
    },
    {
      CustomerID: 1002,
       name: 'Danica Sesles',
      number: '09283203466',
      description: 'nirav@gmail.com',
      date: 'March 6, 2022 09:21'
    },
    {
      CustomerID: 1003,
       name: 'Danica Sesles',
      number: '09283203466',
      description: 'nirav@gmail.com',
      date: 'March 6, 2022 09:21'
    },
    {
      CustomerID: 1002,
       name: 'Danica Sesles',
      number: '09283203466',
      description: 'nirav@gmail.com',
      date: 'March 6, 2022 09:21'
    },
    {
      CustomerID: 1004,
       name: 'Danica Sesles',
      number: '09283203466',
      description: 'nirav@gmail.com',
      date: 'March 6, 2022 09:21'
    },
   {
    CustomerID: 1005,
     name: 'Danica Sesles',
    number: '09283203466',
    description: 'nirav@gmail.com',
    date: 'March 6, 2022 09:21'
    },
    {
      CustomerID: 1002,
       name: 'Danica Sesles',
      number: '09283203466',
      description: 'nirav@gmail.com',
      date: 'March 6, 2022 09:21'
    },
    {
      CustomerID: 1003,
       name: 'Danica Sesles',
      number: '09283203466',
      description: 'nirav@gmail.com',
      date: 'March 6, 2022 09:21'
    },
    {
      CustomerID: 1002,
       name: 'Danica Sesles',
      number: '09283203466',
      description: 'nirav@gmail.com',
      date: 'March 6, 2022 09:21'
    },
    {
      CustomerID: 1004,
       name: 'Danica Sesles',
      number: '09283203466',
      description: 'nirav@gmail.com',
      date: 'March 6, 2022 09:21'
    },
   {
    CustomerID: 1005,
     name: 'Danica Sesles',
    number: '09283203466',
    description: 'nirav@gmail.com',
    date: 'March 6, 2022 09:21'
    }
  
  ]

  const [records, setRecords] = useState(data);

  function handleFilter(event) {
    const newData = data.filter(row => {
        return row.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setRecords(newData)
  }
  return (
    <>


        <div className='flex justify-center'>
        
            <div className='container justify-center text-center text-textColor border-[1px]'>
                
                <div className='flex items-center ms-5 mt-5' >
                    <BiMessageDetail className='text-[20px] me-2 icon '/>
                    <h4 className='text-greenColor text-[30px]'>INBOX</h4>
                </div>

                <div className='grid grid-cols-2 items-center justify-between border-b-[1px]'>

                    <div className='flex justify-start'>
                        <div className=' bg-blueColor  justify-center rounded-full hover:bg-slate-200 m-2'>
                            <button className='text-white text-[13px] p-2  hover:text-textColor'>Compose Message</button>
                        </div>

                        <div className=' justify-center bg-red-500 rounded-full hover:bg-slate-200 m-2'>
                            <button className='text-white text-[13px] p-2  hover:text-textColor'>Delete Message</button>
                        </div>
                    </div>
                
                    <div className='flex justify-end items-center me-5' >
                        <AiOutlineSearch className='text-[20px] me-1 icon'/>
                        <input className='ps-3 w-[50%] pt-2 pb-2 text-[13px] border-[1px] border-textColor p-1 rounded-[10px]' type="text" placeholder='Search Appointment Here...' onChange={handleFilter} />
                        
                    </div>

                </div>
                

                <div className='flex h-[450px] w-[100%] shadow-lg'>
                    <DataTable   
                        columns = {columns}
                        data = {records}
                        selectableRows
                        fixedHeader
                        // pagination
                    >
                    </DataTable>
                </div>

                
            </div>
        </div>
    </>
    
  )
}

export default Notification;