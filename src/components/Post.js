import React from 'react'
import { SortableElement } from 'react-sortable-hoc'


const SortablePost = React.memo(({post, imgStyle}) => {
  return (
      <div>
        {post.albumId === 2 && <div>Album 2</div>}
        <img src={post.url} alt={post.title} style={imgStyle}/>
        <h3>{post.title}</h3>
      </div>
    )
  });

export const Post = SortableElement(SortablePost); 
