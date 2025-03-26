import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Container, ProfileHeader } from './style';

export default function App() {
  return (
    <Container> 
      <ProfileHeader>
        <Avatar source={{uri : "https://i.pinimg.com/736x/2a/0f/4f/2a0f4f1c817c4d2345e03008a4c203ce.jpg"}}/>
      </ProfileHeader>
      <StatusBar style="auto"/>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
