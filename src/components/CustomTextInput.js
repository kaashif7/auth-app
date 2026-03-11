import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function CustomTextInput({
  iconName,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  showToggle = false,
  onTogglePress,
  isPasswordVisible,
  keyboardType = 'default',
  autoCapitalize = 'none',
}) {
  return (
    <View style={styles.container}>
      {iconName && (
        <Ionicons
          name={iconName}
          size={22}
          color="#6b7280" // Gray-500 color
          style={styles.icon}
        />
      )}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry && !isPasswordVisible}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        placeholderTextColor="#9ca3af" // Gray-400
      />
      {showToggle && (
        <TouchableOpacity onPress={onTogglePress} style={styles.toggleIcon}>
          <Ionicons
            name={isPasswordVisible ? 'eye-off' : 'eye'}
            size={22}
            color="#6b7280"
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ede9fe', // Light purple background
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginVertical: 8,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#374151', // Gray-700 text
    paddingVertical: 0,
  },
  toggleIcon: {
    marginLeft: 8,
  },
});