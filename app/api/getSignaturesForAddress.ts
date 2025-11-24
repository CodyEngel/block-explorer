import { rpcRequest } from "./solanaApi";

export const getSignaturesForAddress = async (address: string) => {
  return rpcRequest("getSignaturesForAddress", [address, { limit: 100 }]);
};
