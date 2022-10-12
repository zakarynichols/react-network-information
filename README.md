# React Network Information

Hook to provide information about the connection a device is using to communicate with the network, connection speed, and changes to the network.

### Installation

```sh
$ npm install react-network-information
```

### Examples

```ts
/*
 * Get the current network information and network history for convenience.
 * `networkInformation` is subscribed to the network event change under the hood
 * and will return the updated value as it changes.
 */
const { networkInfo, networkInfoHistory } = useNetworkInformation()
})
```

### References

- https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API
