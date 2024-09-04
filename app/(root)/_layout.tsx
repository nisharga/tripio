/* eslint-disable prettier/prettier */
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="./(tabs)/home.tsx" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
