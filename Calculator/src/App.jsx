import React, { useState } from 'react'

const App = () => {
 const [data, setdata] = useState("");
 
  const getValue = (event)=>{
    console.log(event.target.value);
    setdata(data.concat(event.target.value));
  }
  const acValue = ()=>{
    setdata("");
  }

  const cValue = ()=>{
    setdata(data.slice(0,-1));
  }

  const evlValue = ()=>{
    setdata(eval(data).toString());
  }
  return (
    <section>
      <div className='bg-gray-500 max-w-[350px] mx-auto flex flex-col gap-4 p-[10px] mt-[100px] h-[500px] rounded-xl shadow-[0px_0px_10px_4px_rgba(0,_0,_0,_0.9)]'>
      <div>
        <input type="text" value={data} placeholder='0' className='bg-white w-full px-[10px] pl-[21px] py-[5px] text-[2.5rem] font-bold rounded-2xl shadow-xl shadow-[inset_0px_0px_10px_4px_rgba(0,_0,_0,_0.9)]'/>
      </div>
      <div className='flex flex-col'>
      <div className='flex flex-row my-[4%]'>
        <button onClick={acValue} className='text-[1.4rem] bg-orange-600 rounded-[100%] w-[50px] h-[50px] font-semibold text-gray-800 hover:bg-black hover:text-white mx-auto shadow-[0px_0px_7px_2px_rgba(0,_0,_0,_0.9)]'>AC</button>
        <button onClick={cValue} className='text-[1.4rem] bg-orange-600 rounded-[100%] w-[50px] h-[50px] font-semibold text-gray-800 hover:bg-black hover:text-white mx-auto shadow-[0px_0px_7px_2px_rgba(0,_0,_0,_0.9)]'>C</button>
        <button onClick={getValue} value='%' className='text-[1.4rem] bg-gray-300 rounded-[100%] w-[50px] h-[50px] font-semibold text-gray-800 hover:bg-black hover:text-white mx-auto shadow-[0px_0px_7px_2px_rgba(0,_0,_0,_0.9)]'>%</button>
        <button onClick={getValue} value='/' className='text-[1.4rem] bg-gray-300 rounded-[100%] w-[50px] h-[50px] font-semibold text-gray-800 hover:bg-black hover:text-white mx-auto shadow-[0px_0px_7px_2px_rgba(0,_0,_0,_0.9)]'>/</button>
      </div>

      <div className='flex flex-row my-[4%]'>
        <button onClick={getValue} value='1' className='text-[1.4rem] bg-slate-400 rounded-[100%] w-[50px] h-[50px] font-semibold text-gray-800 hover:bg-black hover:text-white mx-auto shadow-[inset_0px_0px_7px_2px_rgba(0,_0,_0,_0.9)]'>1</button>
        <button onClick={getValue} value='2' className='text-[1.4rem] bg-slate-400 rounded-[100%] w-[50px] h-[50px] font-semibold text-gray-800 hover:bg-black hover:text-white mx-auto shadow-[inset_0px_0px_7px_2px_rgba(0,_0,_0,_0.9)]'>2</button>
        <button onClick={getValue} value='3' className='text-[1.4rem] bg-slate-400 rounded-[100%] w-[50px] h-[50px] font-semibold text-gray-800 hover:bg-black hover:text-white mx-auto shadow-[inset_0px_0px_7px_2px_rgba(0,_0,_0,_0.9)]'>3</button>
        <button onClick={getValue} value='*' className='text-[1.4rem] bg-gray-300 rounded-[100%] w-[50px] h-[50px] font-semibold text-gray-800 hover:bg-black hover:text-white mx-auto shadow-[0px_0px_7px_2px_rgba(0,_0,_0,_0.9)]'>X</button>
      </div>

      <div className='flex flex-row my-[4%]'>
        <button onClick={getValue} value='4' className='text-[1.4rem] bg-slate-400 rounded-[100%] w-[50px] h-[50px] font-semibold text-gray-800 hover:bg-black hover:text-white mx-auto shadow-[inset_0px_0px_7px_2px_rgba(0,_0,_0,_0.9)]'>4</button>
        <button onClick={getValue} value='5' className='text-[1.4rem] bg-slate-400 rounded-[100%] w-[50px] h-[50px] font-semibold text-gray-800 hover:bg-black hover:text-white mx-auto shadow-[inset_0px_0px_7px_2px_rgba(0,_0,_0,_0.9)]'>5</button>
        <button onClick={getValue} value='6' className='text-[1.4rem] bg-slate-400 rounded-[100%] w-[50px] h-[50px] font-semibold text-gray-800 hover:bg-black hover:text-white mx-auto shadow-[inset_0px_0px_7px_2px_rgba(0,_0,_0,_0.9)]'>6</button>
        <button onClick={getValue} value='+' className='text-[1.4rem] bg-gray-300 rounded-[100%] w-[50px] h-[50px] font-semibold text-gray-800 hover:bg-black hover:text-white mx-auto shadow-[0px_0px_7px_2px_rgba(0,_0,_0,_0.9)]'>+</button>
      </div>

      <div className='flex flex-row my-[4%]'>
        <button onClick={getValue} value='8' className='text-[1.4rem] bg-slate-400 rounded-[100%] w-[50px] h-[50px] font-semibold text-gray-800 hover:bg-black hover:text-white mx-auto shadow-[inset_0px_0px_7px_2px_rgba(0,_0,_0,_0.9)]'>8</button>
        <button onClick={getValue} value='7' className='text-[1.4rem] bg-slate-400 rounded-[100%] w-[50px] h-[50px] font-semibold text-gray-800 hover:bg-black hover:text-white mx-auto shadow-[inset_0px_0px_7px_2px_rgba(0,_0,_0,_0.9)]'>7</button>
        <button onClick={getValue} value='9' className='text-[1.4rem] bg-slate-400 rounded-[100%] w-[50px] h-[50px] font-semibold text-gray-800 hover:bg-black hover:text-white mx-auto shadow-[inset_0px_0px_7px_2px_rgba(0,_0,_0,_0.9)]'>9</button>
        <button onClick={getValue} value='-' className='text-[1.4rem] bg-gray-300 rounded-[100%] w-[50px] h-[50px] font-semibold text-gray-800 hover:bg-black hover:text-white mx-auto shadow-[0px_0px_7px_2px_rgba(0,_0,_0,_0.9)]'>-</button>
      </div>

      <div className='flex flex-row my-[4%]'>
      <button onClick={getValue} value='0' className='text-[1.4rem] bg-slate-400 rounded-[100%] w-[50px] h-[50px] font-semibold text-gray-800 hover:bg-black hover:text-white mx-auto shadow-[inset_0px_0px_7px_2px_rgba(0,_0,_0,_0.9)]'>0</button>
        <button onClick={getValue} value='00' className='text-[1.4rem] bg-slate-400 rounded-[100%] w-[50px] h-[50px] font-semibold text-gray-800 hover:bg-black hover:text-white mx-auto shadow-[inset_0px_0px_7px_2px_rgba(0,_0,_0,_0.9)]'>00</button>
        <button onClick={getValue} value='.' className='text-[1.4rem] bg-slate-400 rounded-[100%] w-[50px] h-[50px] font-semibold text-gray-800 hover:bg-black hover:text-white mx-auto shadow-[inset_0px_0px_7px_2px_rgba(0,_0,_0,_0.9)]'>•</button>
        <button onClick={evlValue} className='text-[1.4rem] bg-green-600 rounded-[100%] w-[50px] h-[50px] font-semibold text-gray-800 hover:bg-black hover:text-white mx-auto shadow-[0px_0px_7px_2px_rgba(0,_0,_0,_0.9)]'>=</button>
      </div>
      </div>
      </div>
    </section>
  )
}

export default App