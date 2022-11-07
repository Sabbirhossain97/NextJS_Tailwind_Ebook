import React from 'react'
import { supabase } from '../api'
import { useEffect } from 'react';

export default function Slider() {

  const getBooks=async(e)=>{
     let { data,count, error } = await supabase
       .from("books_duplicate")
       .select(`*,categories(id)`,{count: 'exact'})
       .range(0,19)
       if(error){
        console.log(error)
       } else {
        console.log(count)
        console.log(data)
       }
  }
useEffect(()=>{
  getBooks();
},[])


  return (
    <div>
      
    </div>
  )
}
