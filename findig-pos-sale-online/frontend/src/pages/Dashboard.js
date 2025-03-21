import { useEffect, useState } from "react"
import {
  Container,
  Button,
  TextField,
  List,
  ListItem,
  ListItemText
} from "@mui/material"
import axios from "axios"

const Dashboard = () => {
  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState("")

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:5555/api/posts")
    setPosts(res.data)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const addPost = async () => {
    await axios.post("http://localhost:5555/api/posts", { content: newPost })
    setNewPost("")
    fetchPosts()
  }

  const deletePost = async (id) => {
    await axios.delete(`http://localhost:5555/api/posts/${id}`)
    fetchPosts()
  }

  return (
    <Container>
      <TextField
        label="New Post"
        fullWidth
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
      />
      <Button variant="contained" onClick={addPost}>
        Add
      </Button>
      <List>
        {posts.map((post) => (
          <ListItem key={post.id}>
            <ListItemText primary={post.content} />
            <Button variant="outlined" onClick={() => deletePost(post.id)}>
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  )
}

export default Dashboard
