import React from 'react'
import { supabase } from '../api'
import { useState, useEffect } from 'react'

export default function Third() {

    const [getCategory, setGetCategory] = useState([])

    const getBookCategory = async (e) => {

        let { data, error } = await supabase
            .rpc('get_books_by_category')

        if (error) console.error(error)
        else console.log(data)
    }

    useEffect(() => {
        getBookCategory()
    }, [])

    return (
        <div>
            <div className="flex flex-col pt-6 mt-[150px] ml-[50px]">
                <input name="category[]"  type="radio" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                <label className="ml-3 p-2 text-sm text-gray-600">Mystery</label>
                <input name="category[]"  type="radio" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                <label className="ml-3 text-sm text-gray-600">Sci-fi</label>
                <input name="category[]"  type="radio" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                <label className="ml-3 text-sm text-gray-600">Romantic</label>
                <input name="category[]"  type="radio" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                <label className="ml-3 text-sm text-gray-600">Detective</label>
                <input name="category[]"  type="radio" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                <label className="ml-3 text-sm text-gray-600">Adventure</label>
            </div>
        </div>
    )
}
