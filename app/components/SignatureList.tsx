import { useSignatures } from "../hook/useSignatures";
import { View, Text, FlatList } from "react-native";

export const SignatureList = () => {
  const { isLoading, signatures } = useSignatures(
    "3vxheE5C46XzK4XftziRhwAf8QAfipD7HXXWj25mgkom",
  );

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{ padding: 16, width: "90%", height: "90%" }}>
      <Text>{`Signatures: ${signatures?.length}`}</Text>
      <FlatList
        data={signatures}
        keyExtractor={(item) => item.signature}
        renderItem={({ item }) => (
          <View style={{ paddingVertical: 8 }}>
            <Text>{item.signature.slice(0, 25)}</Text>
          </View>
        )}
        ListEmptyComponent={() => <Text>No signatures found</Text>}
      />
    </View>
  );
};
