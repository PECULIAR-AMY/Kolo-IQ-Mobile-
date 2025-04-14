import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity  } from 'react-native';
import { useRouter } from 'expo-router';


interface FormDataTypes {
    fullName: string;
    email: string;
    password: string;
    phoneNumber: string;
}

const SignupScreen: React.FC = () => {
      const router = useRouter();


    const [formData, setFormData] = useState<FormDataTypes>({
        fullName: '',
        email: "",
        password: "",
        phoneNumber: ""
    });

    return (
        <View style={styles.container}>

<Image 
  source={{uri: 'https://www.canva.com/design/DAGj9L3gjIA/8myEbWxk0i8-5xXTe763Rw/view?utm_content=DAGj9L3gjIA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h6a2ba3e6ea'}}
  style={styles.logo}
/>
            <Text style={styles.text}>Sign up!</Text>

            {/* Form */}
            <Text style={styles.label}>Full Name</Text>
            <TextInput 
                style={styles.input}
                value={formData.fullName}
                onChangeText={(text) => setFormData({...formData, fullName: text})}
                placeholder='Enter username'
            />

<Text style={styles.label}>email</Text>
            <TextInput 
                style={styles.input}
                value={formData.email}
                onChangeText={(text) => setFormData({...formData, email: text})}
                placeholder='Enter email'
            />

<Text style={styles.label}>password</Text>
            <TextInput 
                style={styles.input}
                value={formData.password}
                onChangeText={(text) => setFormData({...formData, password: text})}
                placeholder='Enter username'
            />


<Text style={styles.label}>phone Number</Text>
            <TextInput 
                style={styles.input}
                value={formData.phoneNumber}
                onChangeText={(text) => setFormData({...formData, phoneNumber: text})}
                placeholder='Enter phone number '
            />

          
          
          {/* Button */}

          <TouchableOpacity style={styles.Button}
          onPress={()=>router.push ('/login/index')}
          >
           <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>


         <View style={styles.loginContainer}>
          <Text style= {styles.login}>Already have an Account?</Text>
          <TouchableOpacity onPress={()=>router.push('/login/index')}>
            <Text style={styles.log}>LogIn</Text>
          </TouchableOpacity>

         </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },

    text:{
      textAlign: 'center',
      marginTop: 20

    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 40,
        resizeMode: 'contain'
        
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    Button: {
        backgroundColor: 'blue',
        paddingVertical: 20,
        paddingHorizontal: 30,
        alignItems: "center", 
        marginTop:20 

     },
     buttonText: {
        textAlign:'center',
        fontSize:16,
        color:'#fff',
        fontWeight: 'bold'
     },

     loginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 50
     },
     
     login: {
 
     },

     log: {

     }
});

export default SignupScreen;