import React from 'react'
import MySelect from './UI/select/MySelect'

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <input
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Поиск..."
      />
      <MySelect
        onChange={filter.sort}
        value={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
        defaultValue="Сортировка По"
        option={[
          { value: 'title', name: 'По заголовку' },
          { value: 'body', name: 'По описанию' },
        ]}
      />
    </div>
  )
}

export default PostFilter
