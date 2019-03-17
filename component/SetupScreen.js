import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableWithoutFeedback, Keyboard, Alert, 
    Linking, Platform} from 'react-native';

export default class SetupScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state  = { 
            name: '',
            phone: ''
        }
    }

    _pressCall=()=>{
        console.log("Start")
        let phone = this.state.phone
        let name = this.state.name
        if (name == null || name.length == 0) {
            Alert.alert("Name is incorrect !")
            return;
        }
        if (phone == null || phone.length == 0) {
            Alert.alert("Phone number is incorrect !")
            return;
        }
        this.props.navigation.navigate('LiveStream', {username: name, phonenumber: phone})
        // let phoneNumber = phone
        // if (Platform.OS == 'android') {
        //     phoneNumber = `telprompt:${phone}`;
        // } else {
        //     phoneNumber = `tel:${phone}`;
        // }
        // Linking.openURL(phoneNumber)
    }

    static navigationOptions = {
        title: "Setup",
      };

    render(){
        const { params } = this.props.navigation.state;
        //const name = params ? params.name : "No Data"
        return (
            <TouchableWithoutFeedback style={{flex: 1}} onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.container}>
                    <View style={{
                        alignSelf: 'stretch',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        margin: 8
                        }}>
                    <TextInput
                    onChangeText={ (name) => this.setState({name})}
                        style={{
                            height: 40,
                            backgroundColor: '#EEEEEE', 
                            padding:2, 
                            marginTop: 2, 
                            marginRight: 4,
                            marginLeft: 4,
                            marginBottom: 8
                        }}
                        placeholder="Enter name"/>
                    <TextInput
                        keyboardType="phone-pad"
                        onChangeText={ (phone) => this.setState({phone})}
                        style={{
                            height: 40,
                            backgroundColor: '#EEEEEE', 
                            padding:2, 
                            marginTop: 2, 
                            marginRight: 4,
                            marginLeft: 4,
                            marginBottom: 4
                        }}
                        placeholder="Enter phone number"/>
                    </View>
                    <View style={styles.bottom}>
                        <View style={{
                            alignSelf: 'stretch',
                            backgroundColor: '#0091EA',
                            margin: 16,
                            padding: 8
                        }}>
                            <Button 
                                title = "Start"
                                color = 'white'
                                onPress={this._pressCall}
                            />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F5F5F5'
    },
    bottom: {
        flex: 1,
        height: 40,
        margin: 8,
        justifyContent: 'flex-end'
    },
});