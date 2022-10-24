import React, { useEffect } from 'react'
import { supabase } from '../api'
import { useState } from 'react'

export default function index() {


  // const getBooksByAuthorId = async (e) => {

  //   let { data, error } = await supabase
  //     .from('books')
  //     .select('*')
  //     .eq('author_id',2)
  //   if (error) {
  //     console.log(error)
  //   } else {

  //     console.log(data)

  //   }

  // }
  // useEffect(() => {
  //   getBooksByAuthorId()
  // }, [])

  return (
    <div >
      hello
    </div>
  )
}
