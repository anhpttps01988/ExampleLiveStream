import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableWithoutFeedback, Keyboard, Alert, 
    Linking, Platform, Image} from 'react-native';

export default class LiveStreamScreen extends React.Component {
    _pressCall=()=>{
        let phoneNumber = this.state.phoneNumber
        if (Platform.OS == 'android') {
            phoneNumber = `telprompt:${this.state.phoneNumber}`;
        } else {
            phoneNumber = `tel:${this.state.phoneNumber}`;
        }
        Linking.openURL(phoneNumber)
    }
    constructor(props) {
        super(props)
        this.state = {
            phoneNumber: 0
        }
    }
    static navigationOptions = {
        title: "Live Streaming",
    };
    render() {
        const { navigation } = this.props;
        const name = navigation.getParam('username', 'No Data');
        const phone = navigation.getParam('phonenumber', 'No Data');
        this.state.phoneNumber = phone
        return(
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <Text style={styles.TextTitle}>
                        Username: 
                    </Text>
                    <Text style={{
                        fontSize: 14,
                        marginLeft: 8,
                        marginRight: 8,
                    }}>
                        {JSON.parse(JSON.stringify(name))}
                    </Text>
                    <Text style={styles.TextTitle}>
                        Phone Number: 
                    </Text>
                    <Text style={{
                        fontSize: 14,
                        marginLeft: 8,
                        marginRight: 8,
                    }}>
                        {JSON.parse(JSON.stringify(phone))}
                    </Text>
                    <View style={{
                        flex:1,
                        flexDirection:'row',
                        marginTop: 4
                    }}>
                        <TouchableWithoutFeedback
                            onPress={this._pressCall}>
                            <View style={styles.button}>
                                <Image
                                style={{width: 30, height: 30}}
                                source={require('./images/ic_phone.png')}
                                />
                                <Text style={{color: 'white'}}>
                                    Call Phone
                                </Text> 
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback>
                            <View style={styles.button}>
                                <Image
                                style={{width: 30, height: 30}}
                                source={require('./images/ic_videocam.png')}
                                />
                                <Text style={{color: 'white'}}>
                                    Call Video
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F5F5F5'
    },
    button: {
        flex: 1,
        backgroundColor:'#0091EA',
        marginLeft: 8,
        marginBottom: 8,
        marginRight: 4,
        marginTop: 4,
        borderRadius: 2,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    bottom: {
        flex: 1,
        height: 40,
        margin: 8,
        justifyContent: 'flex-end'
    },
    TextTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        margin: 8
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