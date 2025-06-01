import React, { useEffect, useState } from 'react'

function useDebounce(value,delay){
    const [debouncedValue,setDebouncedValue]=useState(value)
    useEffect(()=>{
        const timer=setTimeout(()=>{
            setDebouncedValue(value)
        })
        return clearTimeout(timer)

    },[value,delay])

}

const Searching = () => {
    const [search,setSearch]=useState('')
    const bounce=useDebounce(search,500)
  return (
    <div>
      <input value={search} onChange={(e)=>{setSearch(e.target.value)}}></input>
    </div>
  )
}

export default Searching
