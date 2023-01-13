import { useEffect, useState } from "react"

type ConnectionChangeEvent = Event & { currentTarget: NetworkInformation }

export function useNetworkInformation(
  onConnectionChange?: (event: Event) => void
): NetworkInformation | null {
  const [networkInfo, setNetworkInfo] = useState<NetworkInformation | null>(null)

  useEffect(() => {
    const connection = navigator.connection

    if (!("connection" in navigator)) return

    function onConnectionChangeWrapper(event: Event): void {
      if (isConnectionChangeEvent(event)) {
        setNetworkInfo(event.currentTarget)
        onConnectionChange?.(event)
      }
    }

    connection.addEventListener("change", onConnectionChangeWrapper)
    return () => {
      connection.removeEventListener("change", onConnectionChangeWrapper)
    }
  }, [onConnectionChange])

  return networkInfo
}

function isConnectionChangeEvent(event: Event): event is ConnectionChangeEvent {
  return "currentTarget" in event && event.currentTarget === navigator.connection
}

function isNetworkInformation(obj: unknown): obj is NetworkInformation {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "type" in obj &&
    "effectiveType" in obj &&
    "downlinkMax" in obj &&
    "downlink" in obj &&
    "rtt" in obj &&
    "onchange" in obj
  )
}
