import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
        title: 'Example Live Streaming',
        };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
            <Text style={{
                marginLeft: 8,
                marginRight: 8,
                marginTop: 8,
                fontSize: 16,
                fontWeight: 'bold'
            }}>
                Video Live Streaming
            </Text>
            <Text style={{
                marginLeft: 8,
                marginRight: 8,
                marginBottom: 8,
                marginTop: 8
            }}>
                Stream with confidence using patented Wowza software designed specifically 
                for live-streaming performance and scaling.
            </Text>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                backgroundColor: '#0091EA',
                margin: 8,
            }}>
                <Button 
                onPress={() => navigate('Setup', {name: 'Setup'})}
                title = "Go to livestream"
                color = "white"
                style = {{backgroundColor: 'red'}}
                />
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  cardContainer: {
      alignSelf: 'stretch',
      height: 160,
      margin: 8,
      backgroundColor: '#FAFAFA',
      shadowColor: "#000000",
      shadowOpacity: 0.8,
      shadowRadius: 1,
      elevation: 2,
      shadowOffset: {
        height: 1,
        width: 0
      }
  }
});
