import { useState } from 'react';
import React from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import { 
  Checkbox as PaperCheckbox, 
  TouchableRipple, 
  Text
} from 'react-native-paper';

type CheckboxProps = {
  label: string;
  checked: boolean;
  onPress: () => void;
  disabled?: boolean;
};

const Checkbox = ({ label, checked, onPress, disabled }: CheckboxProps) => (
  <TouchableRipple 
    onPress={onPress} 
    disabled={disabled}
    accessibilityRole="checkbox"
    accessibilityState={{ checked, disabled }}
  >
    <View style={checkboxStyles.container}>
      <View style={checkboxStyles.checkboxWrapper}>
        <PaperCheckbox
          status={checked ? 'checked' : 'unchecked'}
          disabled={disabled}
        />
      </View>
      <Text style={checkboxStyles.label}>
        {label}
      </Text>
    </View>
  </TouchableRipple>
);

interface FormDataTypes {
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
}

const LoginPage: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState<FormDataTypes>({
    fullName: '',
    email: "",
    password: "",
    phoneNumber: ""
  });

  const router = useRouter();

  const LineWithText = ({ text }: { text: string }) => (
    <View style={linestyles.lineContainer}>
      <View style={linestyles.line} />
      <Text style={linestyles.lineText}>{text}</Text>
      <View style={linestyles.line} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://www.canva.com/design/DAGj9L3gjIA/8myEbWxk0i8-5xXTe763Rw/view?utm_content=DAGj9L3gjIA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h6a2ba3e6ea' }}
        style={styles.logo}
      />

      <Text style={styles.label}>Full Name</Text>
      <TextInput 
        style={styles.input}
        value={formData.fullName}
        onChangeText={(text) => setFormData({ ...formData, fullName: text })}
        placeholder='Enter username'
      />

      <Text style={styles.label}>Email</Text>
      <TextInput 
        style={styles.input}
        value={formData.email}
        onChangeText={(text) => setFormData({ ...formData, email: text })}
        placeholder='Enter email'
        keyboardType="email-address"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput 
        style={styles.input}
        value={formData.password}
        onChangeText={(text) => setFormData({ ...formData, password: text })}
        placeholder='Enter password'
        secureTextEntry
      />

      <View style={styles.rowContainer}>
        <Checkbox
          label=""
          checked={isChecked}
          onPress={() => setIsChecked(!isChecked)}
        />
        <Text style={styles.text}>Remember Me</Text>
        <TouchableOpacity onPress={() => router.push('/signup')}>
          <Text style={styles.word}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        onPress={() => router.push('/welcome')}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>LogIn</Text>
      </TouchableOpacity>

      <LineWithText text="OR continue with" />

      <View style={styles.socialContainer}>
  <TouchableOpacity style={styles.socialButton}>
    <FontAwesome name="google" size={24} color="#DB4437" />
  </TouchableOpacity>
  
  <TouchableOpacity style={styles.socialButton}>
    <FontAwesome name="linkedin" size={24} color="#0077B5" />
  </TouchableOpacity>
  
  <TouchableOpacity style={styles.socialButton}>
    <FontAwesome name="facebook" size={24} color="#4267B2" />
  </TouchableOpacity>
</View>

   <TouchableOpacity onPress={() => router.push('/signup')}>
    <Text style={styles.create}>Or Create account</Text>
   </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
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
  word: {
    fontSize: 14,
    color: 'blue',
    alignSelf: 'center'
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15
  }, 
  text: {
    fontSize: 14,
    marginRight: 100
  }, 
  buttonContainer: {
    backgroundColor: 'blue',
    borderRadius: 8,
    paddingVertical: 12,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },

  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginTop: 20
  },
  socialButton: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0'
  },

  create:{
    fontSize: 14,
    color: 'blue',
    alignSelf: 'center',
    marginTop: 30
}

});

const checkboxStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4
  },
  checkboxWrapper: {
    transform: [{ scale: 0.8 }]
  },
  label: {
    marginLeft: 4,
    fontSize: 14,
    alignSelf: 'center',
    paddingVertical: 4
  },
});

const linestyles = StyleSheet.create({
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
  },
  lineText: {
    marginHorizontal: 10,
    color: 'gray',
    fontSize: 14,
  },
});


export default LoginPage;