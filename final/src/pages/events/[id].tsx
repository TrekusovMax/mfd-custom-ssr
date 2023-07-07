import { EventDetail } from '@/entities/event/ui/detail'
import { trpc } from '@/shared/api'
import { useRouter } from 'next/router'

export default function Event() {
  const router = useRouter()
  const { data, isLoading } = trpc.event.findUnique.useQuery({
    id: Number(router.query.id),
  })
  if (isLoading) {
    return 'Loading...'
  }
  if (!data) {
    return 'No data'
  }

  return <EventDetail {...data} />
}
