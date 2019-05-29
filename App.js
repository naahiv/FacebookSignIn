import React from 'react';
import { StyleSheet, Text, View, Button
 } from 'react-native';
import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBiPUF-VbY4NEeKO-_HjH1LTh0O708Pvo8",
    authDomain: "facebooksignin-6f9c5.firebaseapp.com",
    databaseURL: "https://facebooksignin-6f9c5.firebaseio.com",
    projectId: "facebooksignin-6f9c5",
    storageBucket: "facebooksignin-6f9c5.appspot.com",
    messagingSenderId: "215335632992",
    appId: "1:215335632992:web:8007db4765f07ba1"
  };

firebase.initializeApp(firebaseConfig);

var provider = new firebase.auth.FacebookAuthProvider();

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.mainText}>This is the login with Facebook test</Text>
        <Button
          onPress={loginButtonTapped}
          title="Login with Facebook"
          color="blue"
        />
      </View>
    );
  }
}

function loginButtonTapped() {
  firebase.auth().signInWithRedirect(provider);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    color: 'white',
    paddingBottom: 20,
  },
});
