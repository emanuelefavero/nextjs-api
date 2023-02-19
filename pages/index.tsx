import { GetServerSideProps } from 'next'
import { Data } from '@/pages/api/info'

type Props = {
  data: Data
}

export default function Home({ data }: Props) {
  return (
    <>
      <ul>
        <li>
          <span className='title'>OS</span>
          <span className='colon'>:</span>
          <span className='value'>{data.operatingSystem}</span>
        </li>
        <li>
          <span className='title'>Architecture</span>
          <span className='colon'>:</span>
          <span className='value'>{data.architecture}</span>
        </li>
        <li>
          <span className='title'>Kernel</span>
          <span className='colon'>:</span>
          <span className='value'>{data.kernel}</span>
        </li>
        <li>
          <span className='title'>Uptime</span>
          <span className='colon'>:</span>
          <span className='value'>{data.uptimeFormatted}</span>
        </li>
        <li>
          <span className='title'>CPU</span>
          <span className='colon'>:</span>
          <span className='value'>{data.cpu}</span>
        </li>
        <li>
          <span className='title'>Memory</span>
          <span className='colon'>:</span>
          <span className='value'>{data.memory}</span>
        </li>
        <li>
          <span className='title'>Local IP</span>
          <span className='colon'>:</span>
          <span className='value'>{data.localIP}</span>
        </li>
        <li>
          <span className='title'>User</span>
          <span className='colon'>:</span>
          <span className='value'>{data.osUsername}</span>
        </li>
        <li>
          <span className='title'>Hostname</span>
          <span className='colon'>:</span>
          <span className='value'>{data.hostname}</span>
        </li>
      </ul>
    </>
  )
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
