enum ConnectionType {
  "bluetooth",
  "cellular",
  "ethernet",
  "mixed",
  "none",
  "other",
  "unknown",
  "wifi",
  "wimax"
}

enum EffectiveConnectionType {
  "2g",
  "3g",
  "4g",
  "slow-2g"
}

interface NetworkInformation extends EventTarget {
  readonly type: ConnectionType
  readonly effectiveType: EffectiveConnectionType
  readonly downlinkMax: number
  readonly downlink: number
  readonly rtt: number
  onchange: Event
}

type Megabit = number
type Millisecond = number

interface NavigatorNetworkInformation {
  readonly connection: NetworkInformation
}

interface Navigator extends NavigatorNetworkInformation {}
interface WorkerNavigator extends NavigatorNetworkInformation {}
