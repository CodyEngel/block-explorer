import { useQuery } from "@tanstack/react-query";
import { rpcRequest } from "../api/solanaApi";

type Signature = {
  blockTime: number;
  confirmationStatus: string;
  signature: string;
  slot: number;
  memo?: string;
  err?: any;
};

export const useSignatures = (walletAddress?: string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["signatures", walletAddress],
    queryFn: async () => {
      return rpcRequest("getSignaturesForAddress", [
        walletAddress,
        { limit: 100 },
      ]);
    },
    enabled: !!walletAddress,
  });

  return {
    data,
    isLoading,
    isError,
    signatures: data?.data?.result as Signature[],
  };
};
