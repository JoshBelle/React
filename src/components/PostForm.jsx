import React, { useState } from 'react'
import MyInput from './UI/input/MyInput'
import MyButton from './UI/button/MyButton'
import { v4 as uuidv4 } from 'uuid'

const PostForm = ({create}) => {
  const [post, setPost] = useState({ title: '', body: '' })
  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
        ...post, id: uuidv4()
    }
    create(newPost)
    setPost({title: '',body: ''})
  }
  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        placeholder="Название поста"
      />
      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        placeholder="Описание поста"
      />
      <MyButton onClick={addNewPost}> Создать пост </MyButton>
    </form>
  )
}

export default PostForm
