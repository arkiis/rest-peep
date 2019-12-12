import React, { useEffect } from "react";
import * as Styles from "./QuoteBox.styles";
import Quote from "../Quote/Quote";

const QuoteBox = () => {
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const fetchingPosts = await fetch("http://localhost:5000/posts");
  //       const posts = await fetchingPosts.json();

  //       setPosts(posts);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchPosts();
  // }, []);
  return (
    <Styles.QuoteBoxContainer>
      <Quote>wow</Quote>
    </Styles.QuoteBoxContainer>
  );
};

export default QuoteBox;
