// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import os from 'os'

export type Data = {
  operatingSystem: string
  architecture: string
  kernel: string
  uptimeFormatted: string
  cpu: string
  memory: string
  localIP: string
  osUsername: string
  hostname: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // GET DATA
  const operatingSystem =
    os.platform() === 'win32'
      ? 'Windows'
      : os.platform() === 'darwin'
      ? 'MacOS'
      : 'Linux'

  const architecture = os.arch()

  const kernel = os.release()

  const uptime = os.uptime()
  const days = Math.floor(uptime / 86400)
  const hours = Math.floor((uptime % 86400) / 3600)
  const minutes = Math.floor(((uptime % 86400) % 3600) / 60)
  const uptimeFormatted = `${days} days, ${hours} hours, ${minutes} minutes`

  const cpu = os.cpus()[0].model

  const totalMemory = Number((os.totalmem() / 1024 / 1024 / 1024).toFixed(2))
  const freeMemory = Number((os.freemem() / 1024 / 1024 / 1024).toFixed(2))
  const usedMemory = (totalMemory - freeMemory).toFixed(2)
  const memory = `${usedMemory} GB / ${totalMemory} GB`

  const addresses = Object.values(os.networkInterfaces())
    .flat()
    .filter((details) => details?.family === 'IPv4' && !details.internal)
    .map((details) => details?.address)
  const localIP = addresses[0] || ''

  const osUsername = os.userInfo().username

  const hostname = os.hostname()

  // SEND RESPONSE
  res.status(200).json({
    operatingSystem,
    architecture,
    kernel,
    uptimeFormatted,
    cpu,
    memory,
    localIP,
    osUsername,
    hostname,
  })
}
