import { use } from 'react'

const List = () => {
  const data = use(
    new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { name: 'TypeScript', mark: '4.9' },
          { name: 'JavaScript', mark: '4.8' },
          { name: 'Go', mark: '4.7' },
        ])
      }, 2000)
    }),
  )

  return (
    <div>
      <ul>
        {data.map(({ name, mark }) => (
          <li key={name}>
            {name} - {mark}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List
