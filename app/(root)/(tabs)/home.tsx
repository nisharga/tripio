/* eslint-disable prettier/prettier */
import { SignedIn, SignedOut, useClerk, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { Button, Text, View } from "react-native";
import { House } from "lucide-react-native";

export default function Page() {
  const { user } = useUser();

  const { signOut } = useClerk();

  return (
    <View>
      <Link href="/(auth)/sign-in">
        <Text>Sign In</Text>
      </Link>
      <Button title="log out" onPress={() => signOut()} />
      <SignedIn>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
      </SignedIn>
      <SignedOut>
        <Link href="/(auth)/sign-in">
          <Text>Sign In</Text>
        </Link>
        <Link href="/(auth)/sign-up">
          <Text>Sign Up</Text>
        </Link>
      </SignedOut>

      <House color="#ff0000" size={48} />
    </View>
  );
}

// /* eslint-disable prettier/prettier */
// import { Text } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// const Home = () => {
//   return (
//     <SafeAreaView>
//       <Text>Home Page</Text>
//     </SafeAreaView>
//   );
// };

// export default Home;
