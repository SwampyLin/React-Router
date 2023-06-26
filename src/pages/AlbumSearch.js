import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'
import List from '../components/List'

const api = 'https://api.unsplash.com/search/photos'
const accessId = process.env.REACT_APP_UNSPLASH_ACCESS

export default function AlbumSearch() {
  const [search, setSearch] = useState('')
  const [list, setList] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  // useEffect(() => {
  //   setSearchParams({ query: 'building' })
  // }, [])

  useEffect(() => {
    if (search !== '') {
      ;(async () => {
        const response = await axios.get(
          `${api}?client_id=${accessId}&query=${search}`
        )
        // console.log('search改變了,即將更新list')
        const { results } = response.data
        setList(results)
      })()
    }
  }, [search])

  useEffect(() => {
    // console.log('searchParams改變了')
    setSearch(searchParams.get('query'))
  }, [searchParams])

  return (
    <>
      這是搜尋頁面 目前搜尋的關鍵字為{search}
      <input
        type='text'
        className='form-control'
        defaultValue={search}
        onKeyUp={(e) => {
          if (e.code === 'Enter') {
            setSearchParams({ query: e.target.value })
            // console.log('按下ENTER')
          }
        }}
      />
      <List list={list}></List>
    </>
  )
}
