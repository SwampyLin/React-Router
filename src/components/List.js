import { Link } from 'react-router-dom'
export default function List({ list }) {
  return (
    <ul>
      {list.map((item) => {
        return (
          <li key={item.id}>
            <Link to={`/album/${item.id}`}>{item.id}</Link>
          </li>
        )
      })}
    </ul>
  )
}
