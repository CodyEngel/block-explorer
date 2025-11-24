import axios from "axios";

const SOLANA_RPC_URL = "https://api.mainnet-beta.solana.com";

export const rpcRequest = (method: string, params: any[]) => {
  return axios.post(SOLANA_RPC_URL, {
    jsonrpc: "2.0",
    id: 1,
    method,
    params,
  });
};
