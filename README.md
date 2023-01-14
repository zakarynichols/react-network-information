# React Network Information

A React hook that allows you to access the browser's Network Information API and handle network connection changes.

## Installation

You can install the package via npm:

`npm install react-network-information`

## Usage

The hook returns the current NetworkInformation object and can also take an optional callback function that will be called whenever the network connection changes.

```tsx
import { useNetworkInformation } from "use-network-information"

function MyComponent() {
  const networkInfo = useNetworkInformation()

  return (
    <div>
      <p>Effective Type: {networkInfo?.effectiveType}</p>
      <p>Rtt: {networkInfo?.rtt}</p>
    </div>
  )
}
```

You can also pass an optional callback function that will be called whenever the network connection changes:

```tsx
import { useNetworkInformation } from "use-network-information"

function MyComponent() {
  const handleConnectionChange = (event: Event) => {
    console.log("Network connection changed:", event.currentTarget)
  }

  const networkInfo = useNetworkInformation(handleConnectionChange)

  return (
    <div>
      <p>Effective Type: {networkInfo?.effectiveType}</p>
      <p>Rtt: {networkInfo?.rtt}</p>
    </div>
  )
}
```

## Compatibility

The Network Information API is supported by most modern browsers, but may not be supported by older browsers. To ensure compatibility, you can check if the navigator.connection property exists before using the hook.

## Example

Here is an example of how you can use the hook to show a message to the user when their connection is slow:

```tsx
import { useNetworkInformation } from "use-network-information"

function MyComponent() {
  const networkInfo = useNetworkInformation()

  return <div>{networkInfo?.effectiveType === "slow-2g" && <p>Your connection is slow</p>}</div>
}
```

## References

- https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API
