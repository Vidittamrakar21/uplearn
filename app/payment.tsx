import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
//@ts-ignore
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function payment(){
    const [selectedMethod, setSelectedMethod] = useState('');
  const [upiId, setUpiId] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = () => {
    if (selectedMethod === 'UPI' && upiId) {
      alert(`Paying via UPI: ${upiId}`);
    } else if (selectedMethod === 'Card' && cardNumber && expiryDate && cvv) {
      alert(`Paying via Card: ${cardNumber}`);
    } else {
      alert('Please complete the payment details.');
    }
  };

  return (
    <View style={styles.container}>
        <Text  style={styles.text1}><Text  style={styles.text1a}>UpLearn</Text></Text>
        <Text  style={styles.text2}>One Stop Learning Platform !</Text>
      <Text style={styles.header}>Choose Payment Method</Text>
      <TouchableOpacity
        style={[styles.option, selectedMethod === 'UPI' && styles.selectedOption]}
        onPress={() => setSelectedMethod('UPI')}>
        <Icon name="qrcode-scan" size={24} color={selectedMethod === 'UPI' ? 'black' : 'gray'} />
        <Text style={styles.optionText}>Pay with UPI</Text>
      </TouchableOpacity>
      {selectedMethod === 'UPI' && (
        <TextInput
          style={styles.input}
          placeholder="Enter UPI ID"
          value={upiId}
          onChangeText={setUpiId}
        />
      )}
      <TouchableOpacity
        style={[styles.option, selectedMethod === 'Card' && styles.selectedOption]}
        onPress={() => setSelectedMethod('Card')}>
        <Icon name="credit-card" size={24} color={selectedMethod === 'Card' ? 'black' : 'gray'} />
        <Text style={styles.optionText}>Pay with Card</Text>
      </TouchableOpacity>
      {selectedMethod === 'Card' && (
        <View>
          <TextInput
            style={styles.input}
            placeholder="Card Number"
            keyboardType="numeric"
            value={cardNumber}
            onChangeText={setCardNumber}
          />
          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="MM/YY"
              value={expiryDate}
              onChangeText={setExpiryDate}
            />
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="CVV"
              keyboardType="numeric"
              secureTextEntry
              value={cvv}
              onChangeText={setCvv}
            />
          </View>
        </View>
      )}
  
  
      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.payButtonText}>Proceed to Pay</Text>
      </TouchableOpacity>
     
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
    backgroundColor: '#F5F7F8',
    padding: 20,
    justifyContent: 'flex-start',
  },
  header: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'left',
    marginBottom: 20,
    marginTop: 20
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
  },
  selectedOption: {
    borderWidth: 2,
    borderColor: 'black',
  },
  optionText: {
    marginLeft: 10,
    fontSize: 18,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    fontSize: 16,
    marginBottom: 10
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
  },
  payButton: {
    backgroundColor: 'black',
    // padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: "center",
    marginTop: 20,
    position: "absolute",
    bottom: 10,
    left: 15,
    right: 0,
    width: "100%",
    height: 40
   
  },
  payButtonText: {
    color: 'white',
    fontSize: 15,
    // fontWeight: 'bold',
   
  },

  text1:{
    fontSize: 23,
    fontWeight: "600",
    marginTop: 30,
    textAlign: "center"
    },
    
    text1a:{
    color: "#FFCD38"
    },
    
    text2:{
        marginTop: 10,
        color: "gray",
        textAlign: "center"
    
    },
});


