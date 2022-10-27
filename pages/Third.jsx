import React from 'react'
import { supabase } from '../api'
import { useState, useEffect } from 'react'

export default function Third() {

    const [getCategory, setGetCategory] = useState([])

    const getBookCategory = async (e) => {

        let { data, error } = await supabase
            .from('book_category')
            .select('book_id')
            .select("*")
            
        if (error) {
            console.log(error)
        } else {
            console.log(data)
            setGetCategory(data)
        }
    }

    useEffect(() => {
        getBookCategory()
    }, [])

    return (
        <div>

        </div>
    )
}
