
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useRouter} from 'expo-router'



const AiChats: React.FC = () => {
    const router= useRouter();

    return (
        <View style={styles.container}>
           <View style={styles.singleCard}>
                <Text>I love playing football, can you give me a budget for something</Text>
            </View>

            {/* Additional Card 1 - Shopping */}
            <View style={styles.singleCard}>
                <Text>i want to ask about budgeting</Text>
            </View>

            <View style={styles.singleCard}>
               <Text>This is the best budgeting and investment referral tool like</Text>
            </View>

            {/* Additional Card 2 - Taxi */}
            <TouchableOpacity onPress={() =>router.push('/taxi expense')}>
            <View style={styles.messageCard}>
               <Text>Send Message</Text>
            </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 16,
    },
   
    all: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    card: {
        flexDirection: 'column',
        backgroundColor: '#F0F0F0',
        borderRadius: 10,
        marginTop: 20,
        padding: 10,
    },
    cardItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    textGroup: {
        flex: 1,
        marginLeft: 10,
    },
    cardTitle: {
        fontSize: 14,
        color: '#333',
        fontWeight: 'bold',
    },
    cardDescription: {
        fontSize: 12,
        color: '#777',
        marginTop: 2,
    },
    amountText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1C1C1E',
    },
    hSeparator: {
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 5,
    },
    singleCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F0F0F0',
        borderRadius: 10,
        padding: 12,
        marginTop: 12,
        height: 100
    },

    text:{
      marginTop: 20

    },

    messageCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F0F0F0',
        borderRadius: 10,
        padding: 12,
        marginTop: 300,
        height: 100

    },
});

export default AiChats;
