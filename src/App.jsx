import { useState } from 'react'

const posts = [
  {
    id: 1,
    title: "Post 1",
  },
  {
    id: 2,
    title: "Post 2",
  },
  {
    id: 3,
    title: "Post 3",
  },
  {
    id: 4,
    title: "Post 4",
  },
  {
    id: 5,
    title: "Post 5",
  }
]

function App() {
  const [newPost, setNewPost] = useState("");

  return (
    <div className="container">
      <div className="row gy-4">
        <div className="col-12">
          <h1>React Blog Form</h1>
        </div>
        <div className="col-12">
          <ul className="list-group">
            {posts.map((post) => {
              return <li className="list-group-item" key={post.id}>{post.title}</li>
            })}
          </ul>
          <form action="">
            <input type="text" placeholder="Nuovo post" className="form-control"
              onChange={(e) => { setNewPost(e.target.value) }} />
            <button className="btn-btn-primary">Inserisci</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
