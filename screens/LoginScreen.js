import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { login } from "../util/auth";
import { Alert } from "react-native";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signinHandler({ email, password }) {
    setIsAuthenticating(true);

    try {
      await login(email, password);
    } catch (email) {
      Alert.alert(
        "Authentication failed!",
        "Could not log you in. Please check your credenctials or try again later!"
      );
    }

    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent isLogin onAuthenticate={signinHandler} />;
}

export default LoginScreen;
