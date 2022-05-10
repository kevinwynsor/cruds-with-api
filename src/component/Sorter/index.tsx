import React, { useState } from 'react'

function Index() {

  const [sort, setSort] = useState<string>('');
  
  const handleSort = () =>{
    console.log(sort)
    const toSortArr = sort.split(',')
    console.log(toSortArr)
    const sorted = toSortArr.sort((a,b)=>a.localeCompare(b))
    setSort(sorted.toString())
  }

  return (
    <>
    <h1>WORDS SORTER</h1>
    <p>Sort words separted with comma</p>
    <textarea value={sort} onChange={(e)=>setSort(e.target.value)}></textarea>
    <br/>
    <button onClick={handleSort}>Sort</button>
    </>
  )
}

export default Index