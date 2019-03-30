import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';
import { WebBrowser } from 'expo';
import Home from '../screens/Home';
import { MonoText } from '../components/StyledText';

export default class EmulatorScreenApps extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.emulatorContainer}>
            <View style={styles.app}>
              <Image
                source={require('../assets/images/emulatorApp/facebu.png')}
                style={styles.welcomeImage}
              />
            </View>
            <View style={styles.app}>
              <Image
                source={require('../assets/images/emulatorApp/moni.png')}
                style={styles.welcomeImage}
              />
            </View>
            <View style={styles.app}>
              <Image
                source={require('../assets/images/emulatorApp/notes.png')}
                style={styles.welcomeImage}
              />
            </View>
            <View style={styles.app}>
              <Image
                source={require('../assets/images/emulatorApp/uber.jpg')}
                style={styles.welcomeImage}
              />
            </View>
          </View>
          <View style={styles.emulatorContainer}>
            <View style={styles.app}>
              <Image
                source={require('../assets/images/emulatorApp/rappi.png')}
                style={styles.welcomeImage}
              />
            </View>
            <View style={styles.app}>
              <Image
                source={require('../assets/images/icono-app.png')}
                style={styles.welcomeImage}
              />
            </View>
            <View style={styles.app}>
              <Image
                source={require('../assets/images/emulatorApp/mail.png')}
                style={styles.welcomeImage}
              />
            </View>
            <View style={styles.app}>
              <Image
                source={require('../assets/images/emulatorApp/chrome.png')}
                style={styles.welcomeImage}
              />
            </View>
          </View>
          <View style={styles.emulatorContainer}>
            <View style={styles.app}>

            </View>
            <View style={styles.app}>

            </View>
            <View style={styles.app}>

            </View>
            <View style={styles.app}>

            </View>
          </View>
          <View style={styles.emulatorContainer}>
            <View style={styles.app}>

            </View>
            <View style={styles.app}>

            </View>
            <View style={styles.app}>

            </View>
            <View style={styles.app}>

            </View>
          </View>
          <View style={styles.emulatorContainer}>
            <View style={styles.app}>

            </View>
            <View style={styles.app}>

            </View>
            <View style={styles.app}>

            </View>
            <View style={styles.app}>

            </View>
          </View>
          <View style={styles.emulatorContainer}>
            <View style={styles.app}>

            </View>
            <View style={styles.app}>

            </View>
            <View style={styles.app}>

            </View>
            <View style={styles.app}>

            </View>
          </View>
          <View style={styles.emulatorContainer}>
            <View style={styles.app}>
              <Image
                source={require('../assets/images/emulatorApp/chrome.png')}
                style={styles.welcomeImage}
              />
            </View>
            <View style={styles.app}>
              <Image
                source={require('../assets/images/emulatorApp/mail.png')}
                style={styles.welcomeImage}
              />
            </View>
            <View style={styles.app}>
              <Image
                source={require('../assets/images/emulatorApp/phone.png')}
                style={styles.welcomeImage}
              />
            </View>
            <View style={styles.app}>
              <Image
                source={require('../assets/images/emulatorApp/was.png')}
                style={styles.welcomeImage}
              />
            </View>
          </View>


        </ScrollView>
      </View>
    );
  }

  onPressRedirect() {
    console.log('jsjs')
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  emulatorContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height:100
  },
  welcomeImage: {
    width: 50,
    height: 100,
    resizeMode: 'contain',
    marginLeft: 5,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    marginTop: 200,

  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  buttonApp: {
    width: 10,
    height: 50
  },
  app: {
    width: 80, 
    height: 80, 
    paddingHorizontal: 1,
    paddingTop: 1,
  }
});
