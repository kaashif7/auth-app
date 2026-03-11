import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Button, Title, Card} from 'react-native-paper';
import {AuthContext} from '../context/AuthContext';

export default function HomeScreen() {
  const {user, logout} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Welcome, {user.name}!</Title>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.text}>Name: {user.name}</Text>
          <Text style={styles.text}>Email: {user.email}</Text>
        </Card.Content>
      </Card>

      <Button mode="contained" onPress={logout} style={styles.button}>
        Logout
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#f3f4f6'},
  title: {fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 32, color: '#4f46e5'},
  card: {marginBottom: 32, padding: 16, backgroundColor: '#fff'},
  text: {fontSize: 18, marginBottom: 8},
  button: {paddingVertical: 4},
});