export const App = ({ data }) => {
  return (
    <ul>
      {data.map(({ name, mark }) => (
        <li key={name}>
          {name} - {mark}
        </li>
      ))}
    </ul>
  )
}

const data = [
  { name: 'TypeScript', mark: '4.9' },
  { name: 'JavaScript', mark: '4.8' },
  { name: 'Go', mark: '4.7' },
]

App.getServerSideProps = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, 2000)
  })
