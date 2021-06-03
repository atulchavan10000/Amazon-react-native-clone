import React, { useState } from 'react';
import { View, Text, TextInput, Alert, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';
import countryList from 'country-list';
import Button from '../../components/Button';

const countries = countryList.getData();
const AddressScreen = () => {
    const [country, setCountry] = useState(countries[0].code);
    const [fullname, setFullname] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [addressError, setAddressError] = useState('Invalid');
    
    const onCheckout =()=>{
        if(!!addressError){
            Alert.alert('Fix all field errors, before submiting');
            return;
        }
        if(!fullname){
            Alert.alert('Please fill in the fullname field');
            return;
        }
        if(!phone){
            Alert.alert('Please fill in the phone number field');
            return;
        }

        console.warn('Success. Checkout');
    };

    const validateAddress = () =>{
        if(address.length < 3){
            setAddressError('Address is too short');
        }
        if(address.length > 50){
            setAddressError('Address is too long');
        }
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS == 'ios' ? 0: 10}
            >
            <ScrollView style={styles.root}>
            <View style={styles.row}>
                <Picker selectedValue={country} onValueChange={setCountry}>
                    {countries.map(country => (
                        <Picker.Item value={country.code} label={country.name}/>
                    ))}
                </Picker>
            </View>
           
            <View style={styles.row}>
                <Text style={styles.label}>Full name (First and Last name)</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder="Full name" 
                    value={fullname} 
                    onChangeText={setFullname}
                />
            </View>
        
            <View style={styles.row}>
                <Text style={styles.label}>Phone number</Text>
                <TextInput 
                    keyboardType={'phone-pad'}
                    style={styles.input} 
                    placeholder="Phone Number" 
                    value={phone} 
                    onChangeText={setPhone}
                />        
            </View>

            {/* Address */}
            <View style={styles.row}>
                <Text style={styles.label}>Address</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder="Address" 
                    value={address} 
                    onEndEditing={validateAddress}
                    onChangeText={(text) =>{
                        setAddress(text);
                        setAddressError('');
                    }}
                />
                {/**Need !! to convert the string to boolean expression */}
              {!!addressError && (<Text style={styles.errorLabel}>{addressError}</Text>)}
            </View>

            <View style={styles.row}>
                <Text style={styles.label}>City</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder="City" 
                    value={city} 
                    onChangeText={setCity}
                />     
            </View>
            <Button text="Checkout" onPress={onCheckout}/>
        </ScrollView>
        </KeyboardAvoidingView>
        
    );
};

export default AddressScreen;
