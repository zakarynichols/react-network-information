declare enum EffectiveConnectionType {
  "2g",
  "3g",
  "4g",
  "slow-2g"
}

declare enum ConnectionType {
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

/**
 * Some browsers do not support network information or only specific keys.
 * To prevent a runtime error for the consumer; set all properties as optional.
 */
type NetworkInformation = Partial<{
  readonly type: ConnectionType
  readonly effectiveType: EffectiveConnectionType
  readonly downlink: number
  readonly rtt: number
  readonly saveData: boolean
  onchange: ((event: Event & { currentTarget: NetworkInformation }) => void) | null
  addEventListener(
    type: "change",
    callback: (ev: Event & { currentTarget: NetworkInformation }) => void | null,
    options?: AddEventListenerOptions | boolean
  ): void
  dispatchEvent(event: Event): boolean
  removeEventListener(
    type: "change",
    callback: (ev: Event & { currentTarget: NetworkInformation }) => void | null,
    options?: EventListenerOptions | boolean
  ): void
}>

declare interface NavigatorNetworkInformation {
  readonly connection: NetworkInformation
}

declare interface Navigator extends NavigatorNetworkInformation {}
declare interface Worker extends NavigatorNetworkInformation {}
