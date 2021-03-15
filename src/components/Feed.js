import React from 'react'
import {Post} from './Post'
import { SortableContainer } from 'react-sortable-hoc'
import { FixedSizeList as List} from 'react-window';

const VirtualFeed = React.memo(({ posts}) => {
  const renderedList = ({index, style}) => {
    const post =  posts[index];

    return <li style={style}>
      <Post key={post.id}  index={index} imgStyle={{maxHeight: 200}} post={post } />      
      </li>
  }  
  
  return (
    <List   
        itemCount={posts.length} 
        itemSize={270}
        width={window.innerWidth} 
        height={window.innerHeight} 
       >
      {renderedList}
    </List>
  );
});

export const Feed = SortableContainer(VirtualFeed); 