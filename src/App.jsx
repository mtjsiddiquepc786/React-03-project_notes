import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'

const App = () => {

const [val, setVal] = useState("")
const [copy, setCopy] = useState([])
const [btnlock, setBtnlock] = useState(false)
const [title, setTitle] = useState("")



function submitted(e){
  e.preventDefault()
  setCopy([...copy,{title:title,note:val}])
  setVal([])
  setBtnlock(true)
  setTitle("")
}


{/*///////////////////////////////////////////////////////*/}


  return (
    <div className='  w-[90vh] h-[90vh] flex   flex-col'>
<div>
  <form onSubmit={(e)=>{
    submitted(e)
    }}>

      <textarea type="text" placeholder='Title... ' value={title} onChange={(e)=>{
      setTitle(e.target.value)}}
      className='bg-amber-500 border-2 rounded-full  h-20 w-180 m-3 mx-12 px-7 text-4xl  font-serif p-5 resize-none [scrollbar-width:none] ' >

        </textarea>


      <input type="text" placeholder='write something....'
        value={val}  onChange={(e)=>{
        setVal(e.target.value)
        setBtnlock(false)
        }} 
        className='bg-amber-200 border-2 rounded-full  h-20 w-180 m-5 mx-12 px-7 text-2xl'>
      </input>

      <button disabled={btnlock} className='bg-pink-700 w-170 border-2 mx-15 rounded-2xl p-2 px-7 text-3xl  font-semibold'>Submit</button>

      

  </form>

</div>

  <div className='  w-[75vh] m-10 mx-15 rounded-2xl p-2   flex-wrap'>

  {copy.map((elem,idx)=>{
  return(

  <div className='h-65 w-40  m-1 mx-3 relative overflow-hidden flex flex-col justify-between'>

    <img className=' h-full w-full object-cover absolute inset-0 -z-10 ' src="https://png.pngtree.com/png-clipart/20220824/ourmid/pngtree-blue-notes-sticky-note-with-flower-png-image_6119172.png" alt="" />


    <div className='h-full w-full absolute  inset-0 flex items-center  flex-col  py-12 text-center font-semibold      break-all   text-xs text-blue-500 '>
    
    <h4 className='relative bottom-2 underline font-bold text-red-600 text-lg line-clamp-4 p-2'>{elem.title}
    </h4><p className='break-wordline-clamp-4 relative top-2 p-1'> {elem.note}</p>
  
  <button key={idx}  onClick={()=>{setCopy(copy.filter((_,i)=>i!==idx))}}
  className='bg-blue-100 rounded-2xl  px-3    text-red-600 relative top-22 text-sm flex justify-center '>
    <i class="ri-close-circle-line   relative right-1"></i> delete </button>  


  </div> 
  </div>

)})}


</div>



</div>
  )
}

export default App
