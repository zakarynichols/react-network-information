import { useEffect, useState } from "react"

// Declare in module scope to omit from the deps array.
const connection = navigator.connection

type OrderedNetworkInfo = {
  orderId: number
  info: NetworkInformation
}

type NetworkEventCallback = ({ currentTarget }: { currentTarget: NetworkInformation }) => void

export function useNetworkInformation(): OrderedNetworkInfo[] {
  const [networkInfo, setNetworkInfo] = useState<OrderedNetworkInfo[]>([
    {
      orderId: 0,
      info: {
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt,
        saveData: connection.saveData
      }
    }
  ])

  useEffect(() => {
    const onConnectionChange: NetworkEventCallback = ev => {
      setNetworkInfo(prevNetInfo =>
        prevNetInfo.concat([
          {
            orderId: prevNetInfo.length,
            info: {
              effectiveType: ev.currentTarget.effectiveType,
              downlink: ev.currentTarget.downlink,
              rtt: ev.currentTarget.rtt,
              saveData: ev.currentTarget.saveData
            }
          }
        ])
      )
    }
    if (typeof connection.addEventListener === "function")
      connection.addEventListener("change", onConnectionChange)
    return () => {
      if (typeof connection.removeEventListener === "function")
        connection.removeEventListener("change", onConnectionChange)
    }
  }, [])

  return networkInfo.sort((a, b) => {
    return a.orderId - b.orderId
  })
}
