import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useCallback, useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';
import { useSSO } from '@clerk/clerk-expo';

export const useWarmUpBrowser = () => {
  useEffect(() => {
    // Preloads the browser for Android devices to reduce authentication load time
    // See: https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync();
    return () => {
      // Cleanup: closes browser when component unmounts
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

// Handle any pending authentication sessions
WebBrowser.maybeCompleteAuthSession();

const Login = () => {
  useWarmUpBrowser();

  // Use the `useSSO()` hook to access the `startSSOFlow()` method
  const { startSSOFlow } = useSSO();

  const onPress = useCallback(async () => {
    try {
      // Start the authentication process by calling `startSSOFlow()`
      const { createdSessionId, setActive, signIn, signUp } = await startSSOFlow({
        strategy: 'oauth_google',
        // For web, defaults to current path
        // For native, you must pass a scheme, like AuthSession.makeRedirectUri({ scheme, path })
        // For more info, see https://docs.expo.dev/versions/latest/sdk/auth-session/#authsessionmakeredirecturioptions
        redirectUrl: AuthSession.makeRedirectUri(),
      });
      // If sign in was successful, set the active session
      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      } else {
        // If there is no `createdSessionId`,
        // there are missing requirements, such as MFA
        // Use the `signIn` or `signUp` returned from `startSSOFlow`
        // to handle next steps
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  }, []);

  // const { signIn, setActive, isLoaded } = useSignIn();
  // const router = useRouter();

  // const [emailAddress, setEmailAddress] = useState('');
  // const [password, setPassword] = useState('');

  // Handle the submission of the sign-in form
  // const onSignInPress = async () => {
  //   if (!isLoaded) return;

  //   // Start the sign-in process using the email and password provided
  //   try {
  //     const signInAttempt = await signIn.create({
  //       identifier: emailAddress,
  //       password,
  //     });

  //     // If sign-in process is complete, set the created session as active
  //     // and redirect the user
  //     if (signInAttempt.status === 'complete') {
  //       await setActive({ session: signInAttempt.createdSessionId });
  //       router.replace('/');
  //     } else {
  //       // If the status isn't complete, check why. User might need to
  //       // complete further steps.
  //       console.error(JSON.stringify(signInAttempt, null, 2));
  //     }
  //   } catch (err) {
  //     // See https://clerk.com/docs/custom-flows/error-handling
  //     // for more info on error handling
  //     console.error(JSON.stringify(err, null, 2));
  //   }
  // };
  return (
    <View className="mt-4 flex h-[70%]  items-center">
      <Image
        source={require('../../../assets/login.png')}
        height={40}
        className="mt-6  h-full w-[60%] rounded-3xl border border-gray-800 object-cover"
      />
      <View className=" -mt-8 h-[80%] w-[99%]  rounded-t-3xl bg-purple-600">
        <Text className="px-4 py-2 text-center text-[22px] font-medium text-gray-100">
          {`Let's Find`}
          {''}
          <Text className="text-[26px] font-bold"> Professional Cleaning and repair</Text> Services
        </Text>
        <Text className="my-4 px-3 text-center text-[16px] font-medium text-gray-300">
          Best App to find Services near you, which delivers you a professional service
        </Text>

        <TouchableOpacity onPress={onPress} className="mx-8 mt-4 rounded-full bg-gray-50  py-3">
          <Text className="text-center text-lg font-semibold text-purple-600">Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
