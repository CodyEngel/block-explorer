import { useSignatures } from "../hook/useSignatures";
import { View, Text, FlatList } from "react-native";

type Props = {
  walletAddress?: string;
};

export const SignatureList = ({ walletAddress }: Props) => {
  const { isLoading, signatures } = useSignatures(walletAddress);

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{ padding: 16, width: "90%", height: "90%" }}>
      <FlatList
        data={signatures}
        keyExtractor={(item) => item.signature}
        renderItem={({ item }) => (
          <View style={{ paddingVertical: 8 }}>
            <Text>{item.signature.slice(0, 25)}</Text>
          </View>
        )}
        ListEmptyComponent={() => (
          <Text>No signatures found, try searching for a wallet address.</Text>
        )}
      />
      {signatures ? <Text>{`Signatures: ${signatures?.length}`}</Text> : null}
    </View>
  );
};
