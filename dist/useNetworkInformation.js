"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNetworkInformation = void 0;
const react_1 = require("react");
const connection = navigator.connection;
function useNetworkInformation(onChange) {
    // Lazy init network info state
    const [networkInformation, setNetworkInformation] = (0, react_1.useState)(() => ({
        effectiveType: connection.effectiveType,
        rtt: connection.rtt,
        downlink: connection.downlink,
        saveData: connection.saveData
    }));
    const networkInformationHistory = (0, react_1.useRef)([]);
    (0, react_1.useEffect)(() => {
        connection.onchange = (event) => {
            // Set the history to the previous connection state
            networkInformationHistory.current = networkInformationHistory.current.concat({
                effectiveType: networkInformation.effectiveType,
                rtt: networkInformation.rtt,
                downlink: networkInformation.downlink,
                saveData: networkInformation.saveData
            });
            // Derive new state from current connection
            setNetworkInformation({
                effectiveType: event.currentTarget.effectiveType,
                rtt: event.currentTarget.rtt,
                downlink: event.currentTarget.downlink,
                saveData: event.currentTarget.saveData
            });
            if (onChange)
                onChange();
        };
    }, [networkInformation, onChange]);
    return {
        networkInformation,
        networkInformationHistory: networkInformationHistory.current
    };
}
exports.useNetworkInformation = useNetworkInformation;
