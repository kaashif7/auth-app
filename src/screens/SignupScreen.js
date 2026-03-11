import React, { useState, useContext } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Text, TouchableOpacity } from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import { AuthContext } from '../context/AuthContext';

export default function SignupScreen({ navigation }) {
  const { signup } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState('');

  const handleSignup = async () => {
    if (!email.includes('@')) {
      setError('Invalid email format');
      return;
    }
    if (!name.trim()) {
      setError('Name is required');
      return;
    }
    if (!password.trim()) {
      setError('Password is required');
      return;
    }
    if (password.length < 6) {
      setError('Password should be atleast 6 characters');
      return;
    }
    const res = await signup(name, email, password);
    if (res) setError(res);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.title}>Create Account</Text>

      <CustomTextInput
        iconName="person-outline"
        placeholder="Name"
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
      />

      <CustomTextInput
        iconName="mail-outline"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <CustomTextInput
        iconName="lock-closed-outline"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        showToggle={true}
        isPasswordVisible={isPasswordVisible}
        onTogglePress={() => setPasswordVisible(!isPasswordVisible)}
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Already have an account? Login</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#f3f4f6',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4f46e5',
    textAlign: 'center',
    marginBottom: 32,
  },
  error: {
    color: 'red',
    marginBottom: 16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4f46e5',
    paddingVertical: 14,
    borderRadius: 24,
    marginVertical: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
  },
  link: {
    color: '#4f46e5',
    textAlign: 'center',
    marginTop: 8,
  },
});