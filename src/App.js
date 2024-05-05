import React, { useMemo, useState } from 'react'
import './styles/App.css'
import PostList from './components/PostList'
import { v4 as uuidv4 } from 'uuid'
import PostForm from './components/PostForm'
import PostFilter from './components/PostFilter'
import MyModal from './components/modal/MyModal'
import MyButton from './components/UI/button/MyButton'

function App() {
  const [posts, setPosts] = useState([
    { id: uuidv4(), title: 'JavaScript', body: 'Description' },
    { id: uuidv4(), title: 'Python', body: 'Description' },
    { id: uuidv4(), title: 'Golang', body: 'Description' },
    { id: uuidv4(), title: 'Dart', body: 'Description' },
  ])

  // States

  const [filter, setFilter] = useState({ sort: '', query: '' })

  const [modal, setModal] = useState(false)

  // Filter and sort

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      )
    }
    return posts
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    )
  }, [filter.query, sortedPosts])

  // CRUD

  const createPost = (post) => {
    setPosts([...posts, post])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton style={{marginTop:'32px'}} onClick={() => setModal(true)}>Создать пользователя</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0px' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        post={sortedAndSearchedPosts}
        title={'Список постов 1'}
      />
    </div>
  )
}

export default App
