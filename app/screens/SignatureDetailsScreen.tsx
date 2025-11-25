import { useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";

export const SignatureDetailsScreen = () => {
  const route = useRoute<any>();
  const { signature } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signature Details</Text>
      <Text style={styles.label}>Signature</Text>
      <Text style={styles.value}>{signature}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  label: {
    fontSize: 16,
    color: "#666",
  },
  value: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
