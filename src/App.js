import { useState, useEffect} from 'react';
import { arrayMove } from 'array-move';
import { Feed } from './components/Feed';


function App() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos/")
    .then(response =>  response.json())
    .then(data=>{
      setPosts(data);
    })
  }, [])

  return (
    <div className="App">
     <Feed lockAxis="y" posts={posts} onSortEnd={({oldIndex, newIndex}) => {
       setPosts(arrayMove(posts,oldIndex, newIndex))
     }} />
    </div>
  );
}

export default App;
