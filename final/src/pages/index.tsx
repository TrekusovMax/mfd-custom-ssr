import { prisma, User } from '@/server/db'
import { useEffect, useState } from 'react'

type Data = User[]

export default function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('http://localhost:3000/api/hello')
      const data = await response.json()

      setData(data)
    }
    getData()
  }, [])

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

export const getServerSideProps = async () => {
  const users = await prisma.user.findMany()

  return {
    props: {
      data: users,
    },
  }
}
