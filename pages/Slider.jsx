import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "../api";

export default function First() {
  //const [searchQuery, setSearchQuery] = useState("");

  const getAuthors = async (e) => {
    let { data, error } = await supabase
      .from("books_duplicate")
      .select(`author_id,authors ("*")`);
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  };

  useEffect(() => {
    getAuthors();
  }, []);
  return <div></div>;
}
