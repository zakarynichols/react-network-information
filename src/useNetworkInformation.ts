import { useEffect, useRef, useState } from "react"

export type NetworkInfo = Pick<
  NetworkInformation,
  "effectiveType" | "downlink" | "rtt" | "saveData"
>

const connection = navigator.connection

export function useNetworkInformation(): {
  networkInformation: NetworkInfo | null
  networkInformationHistory: NetworkInfo[]
} {
  // Lazy init network info state
  const [networkInformation, setNetworkInformation] = useState<NetworkInfo>(() => ({
    effectiveType: connection.effectiveType,
    rtt: connection.rtt,
    downlink: connection.downlink,
    saveData: connection.saveData
  }))

  const networkInformationHistory = useRef<NetworkInfo[]>([])

  useEffect(() => {
    connection.onchange = (event: Event & { currentTarget: NetworkInformation }) => {
      // Set the history to the previous connection state
      networkInformationHistory.current = networkInformationHistory.current.concat({
        effectiveType: networkInformation.effectiveType,
        rtt: networkInformation.rtt,
        downlink: networkInformation.downlink,
        saveData: networkInformation.saveData
      })

      // Derive new state from current connection
      setNetworkInformation({
        effectiveType: event.currentTarget.effectiveType,
        rtt: event.currentTarget.rtt,
        downlink: event.currentTarget.downlink,
        saveData: event.currentTarget.saveData
      })
    }
  }, [networkInformation])

  return {
    networkInformation,
    networkInformationHistory: networkInformationHistory.current
  }
}
