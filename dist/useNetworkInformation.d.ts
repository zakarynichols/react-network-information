export declare type NetworkInfo = Pick<NetworkInformation, "effectiveType" | "downlink" | "rtt" | "saveData">;
export declare function useNetworkInformation(onChange?: () => void): {
    networkInformation: NetworkInfo | null;
    networkInformationHistory: NetworkInfo[];
};
//# sourceMappingURL=useNetworkInformation.d.ts.map