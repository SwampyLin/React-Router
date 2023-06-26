import { Outlet, Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import List from '../components/List'

const api = 'https://api.unsplash.com/search/photos'
const accessId = process.env.REACT_APP_UNSPLASH_ACCESS

export default function AlbumLayout() {
  const [list, setList] = useState([])
  useEffect(() => {
    ;(async () => {
      const response = await axios.get(
        `${api}?client_id=${accessId}&query=animal`
      )
      const { results } = response.data
      setList(results)
    })()
  }, [])
  return (
    <div className='row'>
      <div className='col-4'>
        左側選單列表
        <p>
          <Link to='search'>搜尋頁面</Link>
        </p>
        <List list={list}></List>
      </div>
      <div className='col-8'>
        <Outlet context={list} />
      </div>
    </div>
  )
}
