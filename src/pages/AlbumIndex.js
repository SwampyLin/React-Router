import { useOutletContext } from 'react-router-dom'
import List from '../components/List'

export default function AlbumIndex() {
  const list = useOutletContext()
  return (
    <div>
      這是相簿的首頁
      <List list={list}></List>
    </div>
  )
}
