import { SafeAreaView } from 'react-native-safe-area-context';
import './global.css';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from 'App/Navigations/TabNavigation';
import Login from 'App/Screens/LoginScreen/Login';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  const clerkKey =
    Constants?.expoConfig?.extra?.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY ||
    Constants?.manifest?.extra?.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY ||
    process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

  if (!clerkKey) {
    throw new Error('Missing Clerk Publishable Key in app config');
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ClerkProvider tokenCache={tokenCache} publishableKey={clerkKey}>
        <SafeAreaView className="flex-1 p-1" edges={['bottom', 'top']}>
        <SignedOut>
          <Login />
        </SignedOut>

        <SignedIn>
          {/* <Slot /> */}
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </SignedIn>
        </SafeAreaView>
      </ClerkProvider>
    </GestureHandlerRootView>
  );
}
