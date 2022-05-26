interface NetworkInformation {
  readonly effectiveType: string;
  readonly downlink: number;
  readonly rtt: number;
  readonly saveData: boolean;
  onchange: (
    e: Event & {
      currentTarget: NetworkInformation;
    }
  ) => void;
}

interface NetworkInformation extends NetworkInformation {}
