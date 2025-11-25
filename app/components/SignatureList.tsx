import { useSignatures } from "../hook/useSignatures";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

type Props = {
  walletAddress?: string;
};

export const SignatureList = ({ walletAddress }: Props) => {
  const { isLoading, signatures } = useSignatures(walletAddress);
  const navigation = useNavigation<any>();

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
          <TouchableOpacity
            style={{ paddingVertical: 8 }}
            onPress={() => {
              navigation.navigate("Details", { signature: item.signature });
            }}
          >
            <View style={{ paddingVertical: 8 }}>
              <Text>{item.signature.slice(0, 25)}</Text>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={() => (
          <Text>No signatures found, try searching for a wallet address.</Text>
        )}
      />
      {signatures ? <Text>{`Signatures: ${signatures?.length}`}</Text> : null}
    </View>
  );
};
