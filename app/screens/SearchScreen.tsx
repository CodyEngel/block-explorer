import { TextInput, View } from "react-native";
import { SignatureList } from "../components/SignatureList";
import { useState } from "react";
import { useDebounce } from "../hook/useDebounce";

export const SearchScreen = () => {
  const [walletAddress, setWalletAddress] = useState<string | undefined>();
  const debouncedWalletAddress = useDebounce(walletAddress, 500);

  // 3vxheE5C46XzK4XftziRhwAf8QAfipD7HXXWj25mgkom
  return (
    <View>
      <TextInput
        placeholder="Enter wallet address"
        onChangeText={setWalletAddress}
        style={{ height: 40, padding: 10 }}
      />
      <SignatureList walletAddress={debouncedWalletAddress} />
    </View>
  );
};
