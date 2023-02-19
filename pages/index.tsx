import { GetServerSideProps } from 'next'
import { Data } from '@/pages/api/info'

type Props = {
  data: Data
}

export default function Home({ data }: Props) {
  return <>Hello</>
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/info')
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}
