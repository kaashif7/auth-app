import React from 'react';
import {AuthProvider} from './src/context/AuthContext';
import AppNavigator from './src/navigation/AppNavigator';
import {Provider as PaperProvider} from 'react-native-paper';
import {AppTheme} from './src/theme/Theme';

export default function App() {
  return (
    <AuthProvider>
      <PaperProvider theme={AppTheme}>
        <AppNavigator />
      </PaperProvider>
    </AuthProvider>
  );
}