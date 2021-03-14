import React from 'react'
import { SortableContainer } from 'react-sortable-hoc'
import Post from './Post'

export const Feed = SortableContainer(({ posts}) => {
  return (
     <ul>
      {posts.map((post, index) => (
        <Post key={index}  index={index} imgStyle={{maxHeight: 200}} />      
      ))}
    </ul>
  )
});
