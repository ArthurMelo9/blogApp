import React from 'react'

/**
* @author
* @function Post
**/

const Post = (props) => {
    const post=props.post;
  return <div>{post.title} </div>
   
  }


export default Post;