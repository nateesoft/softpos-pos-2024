import { useEffect, useState } from "react"
import {
  Container,
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  Grid,
  Grid2
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
    <Grid spacing={1} padding={1} margin={1}>
      <Grid xs={12}>
        <TextField
          label="New Post"
          fullWidth
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
      </Grid>
      <Grid xs={12}>
        <Button variant="contained" onClick={addPost}>
          Add
        </Button>
      </Grid>
      <Grid xs={12}>
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
      </Grid>
    </Grid>
  )
}

export default Dashboard
