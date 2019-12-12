import React, { useEffect, useState } from "react";
import Layout from "./layout/layout";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/home/home";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
}

export default App;

// function App() {
//   const [posts, setPosts] = useState([]);
//   const [randomPost, setRandomPost] = useState("");

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const fetchingPosts = await fetch("http://localhost:5000/posts");
//         const posts = await fetchingPosts.json();

//         setPosts(posts);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchPosts();
//   }, []);

//   const handleClick = () => {
//     const random = posts[Math.floor(Math.random() * posts.length)];

//     setRandomPost(random);
//   };
//   console.log(posts);
//   return (
//     <div>
//       <button onClick={handleClick}>Click me</button>
//       <span>{randomPost.quote}</span>
//     </div>
//   );
// }
