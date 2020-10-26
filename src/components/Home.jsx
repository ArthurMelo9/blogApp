import React, { useState } from 'react';
import {postArray} from './Posts';
import Post from './Post';

/**
* @author
* @function Home
**/

const Home = (props) => {
  const [posts, setPosts]=useState(postArray);
  console.log (posts)  
  return(
    <div>
        {posts.map((post)=>{
            return <Post key={post.id} post=
            {post} />
           
                
           
            
        })}
        
    </div>
   )
  }


export default Home;