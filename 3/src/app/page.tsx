export const generateMetadata = async () => {
  const res = await fetch('http://localhost:3000/metadata', {
    next: { revalidate: 5 },
  })
  const data = await res.json()
  return {
    title: data.title,
  }
}

export default function Home() {
  return <main>Content</main>
}

