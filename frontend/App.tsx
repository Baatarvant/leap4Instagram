import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { RootStackNavigator } from "./src/navigation";
import { AuthProvider } from "./src/providers";

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <RootStackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
