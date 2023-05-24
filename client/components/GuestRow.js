import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


export default function GuestRow({ guest }) {

    return (
        <View style={styles.view32}>

            <Icon name="account" size={35} style={{}} />
            <View style={{ flexDirection: 'column', justifyContent : 'space-around'}}>
                <Text>
                    {guest.title} {guest.name}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view32: {
        borderColor: 'grey',
        borderWidth: 0.5,
        height: 50,
        flexDirection: "row",
        paddingLeft: 8,
        paddingTop: 8,
        borderRadius: 10,
        marginVertical: 10,
    }

})