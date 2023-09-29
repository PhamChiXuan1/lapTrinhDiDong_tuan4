import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.style1}> 
        <Image
          source={require('./assets/vongtron.png')}
          style={{width:'100px',height:'100px'}}
        ></Image>
      </View>
      <View style={styles.style2}> 
        <Text>GROW</Text>
        <Text>YOUR BUSINESS</Text>
      </View>
      <View style={styles.style3}> 
        <Text>We will help to grow your business using</Text>
        <Text>online server</Text>
      </View> 
      <View style={styles.style4}> 
        <Button title='LOGIN'>Login</Button>
        <Button title='SIGN UP'>Sign Up</Button>
      </View>    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage:'linear-gradient(to bottom, #D4ECEF, #00CCF9)'
  },
  style1:{
    flex: 2,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  style2:{
    flex: 1,
    alignItems: 'center'
  },
  style3:{
    flex: 1,
    alignItems: 'center'
  },
  style4:{
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});
