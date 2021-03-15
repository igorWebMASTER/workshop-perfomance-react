import React from 'react'
import { SortableElement } from 'react-sortable-hoc'

const SortablePost = React.memo(({post, imgStyle}) => {
  if(post.albumId === 2){
    return (
      <div>
        <div>Album 2</div>
        <img src={post.url} alt={post.title}/>
        <h3>{post.title}</h3>
      </div>
    )
  }  
  
  return (
      <div>
        <img src={post.url} alt={post.title} style={imgStyle}/>
        <h3>{post.title}</h3>
      </div>
    )
  });

export const Post = SortableElement(SortablePost); 
