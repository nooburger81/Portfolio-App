import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#ddd9d9] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/cb4030cd-5a59-4438-b827-1f089dedf710" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 pt-28'>
                <p className='text-4xl font-bold inline border-b-4 border-[#ffe74c] text-[#80cfa9]'>
                    Contact
                </p>
                <p className='text-[#000000] py-4'>// Submit the form below so we can connect!</p>
            </div>
            <input className='bg-[#ccd6f6] my-4 p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] my-4 p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white bg-[#8892b0] border-2 hover:bg-[#ffe74c] hover:border-[#ff5964] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact