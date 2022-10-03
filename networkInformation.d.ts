interface NetworkInformation {
  readonly effectiveType: string
  readonly downlink: number
  readonly rtt: number
  readonly saveData: boolean
  onchange: (
    e: Event & {
      currentTarget: NetworkInformation
    }
  ) => void
}

interface Navigator extends Navigator {
  connection: NetworkInformation
}
