import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native';
import { useState, useEffect, useCallback } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { fetchHotels } from '../store/actions/actionCreator'
import { useDispatch, useSelector } from "react-redux"
import { RadioButton } from 'react-native-paper'
import GuestRow from '../components/GuestRow'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'




export default function Home() {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const { hotel } = useSelector(state => state.hotel)
    const [checked, setChecked] = useState('second');
    const { guests } = useSelector(state => state.guests)


    useEffect(() => {
        dispatch(fetchHotels())
    }, [])


    function convertDate(dateString) {
        const months = [
            'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
            'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
        ];

        const [year, month, day] = dateString.split('-');
        const monthIndex = parseInt(month) - 1;
        const monthName = months[monthIndex];

        return `${day} ${monthName} ${year}`;
    }






    return (
        <View style={styles.container} >
            <View style={styles.view1}>

                <Icon name='numeric-1-circle' size={18} />
                <Text style={styles.text1}>
                    Detail Pesanan
                </Text>

            </View>
            <View style={styles.view2}>
                <Text style={styles.text2}>

                    Detail Pesanan
                </Text>
                <View style={styles.view21}>
                    <Image source={{ uri: hotel.chosen_hotel_detail?.images[3].thumbnail }} style={{ flex: 1, borderRadius: 10 }} resizeMode='contain' />
                    <View style={{ flex: 3, paddingHorizontal: 10, flexDirection: 'column' }}>
                        <Text style={{ color: "#325897" }}>{hotel.chosen_hotel_detail?.hotel_name}</Text>
                        <Text style={{ color: "grey" }}>{hotel.chosen_hotel_room?.room_name} with {hotel.chosen_hotel_room?.meal}</Text>
                        <Text style={{ color: "grey" }}>
                            {hotel.chosen_hotel_params?.total_room} Kamar + {hotel.chosen_hotel_params?.guest_adult + hotel.chosen_hotel_params?.guest_children} Tamu
                        </Text>

                    </View>

                </View>
                <View style={styles.view22}>
                    <Text>Check-In </Text>
                    <Text style={{ color: 'grey' }}>{hotel.chosen_hotel_params ? convertDate(hotel.chosen_hotel_params?.check_in) : ""} </Text>
                </View>
                <View style={styles.view22}>
                    <Text>Check-Out </Text>
                    <Text style={{ color: 'grey' }}>{hotel.chosen_hotel_params ? convertDate(hotel.chosen_hotel_params?.check_out) : ""}  </Text>
                </View>
                <View style={styles.view23}>
                    <Text style={{ color: 'orange' }}> Dapat direfund jika dibatalkan
                    </Text>
                    <Icon name="cash" size={20} style={{ color: 'orange' }} />
                </View>

            </View>
            <View style={styles.view3}>
                <View style={{ flex: 1, margin: 15 }}>
                    <Text> Detail Pemesan</Text>
                    <View style={styles.view31}>
                        <View style={{ flex: 5, paddingHorizontal: 10, flexDirection: 'column' }}>
                            <Text style={{ color: "black" }}> Tn. Andreas Andreas</Text>
                            <Text style={{ color: "grey" }}>andreasandreas@gmail.com</Text>
                            <Text style={{ color: "grey" }}>+628 22 2222 2222</Text>


                        </View>
                        <View style={{ flexDirection: "column", justifyContent: 'center' }}>

                            <Text style={{ color: "#325897", textDecorationLine: 'underline', }}>
                                Ubah
                            </Text>
                        </View>

                    </View>
                    <View style={{ flex: 5, flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <RadioButton
                                value="first"
                                status={checked === 'first' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('first')}
                                color='#325897'
                            />
                            <Text style={{ marginTop: 7 }}>Saya memesan untuk sendiri</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>

                            <RadioButton
                                value="second"
                                status={checked === 'second' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('second')}
                                color='#325897'
                            />
                            <Text style={{ marginTop: 7 }}>Saya memesan untuk orang lain</Text>

                        </View>
                        <Text> Data Tamu</Text>
                        <ScrollView style={{ marginTop: 5 }}>
                            {guests.map((guest, i) => {
                                return <GuestRow guest={guest} key={i} navigation={navigation} />
                            })}

                        </ScrollView>
                        <View style={{flexDirection:'row-reverse'}}>
                            <Pressable onPress={()=>{
                                navigation.navigate('AddGuest');
                            }}>
                                <Text style={{ color: "#325897", textDecorationLine: 'underline', }}>Ubah Data Tamu</Text>

                            </Pressable>


                        </View>

                    </View>

                </View>

            </View>

        </View >


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    view1: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'grey',
        borderWidth: 0.5,
        flexDirection: 'row'
    },
    view21: {
        borderColor: 'grey',
        borderWidth: 0.5,
        height: 50,
        flex: 3,
        flexDirection: "row",
        padding: 8,
        borderRadius: 10,
        marginVertical: 5
    },
    view22: {
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row"
    },
    view23: {
        flex: 1,
        flexDirection: "row-reverse",
    },
    text1: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    text2: {
        marginTop: 10,
        flex: 1
    },
    view2: {
        flex: 5,
        backgroundColor: 'white',
        marginHorizontal: 15,
    },
    view3: {
        flex: 10,
        backgroundColor: 'white',
        borderColor: 'grey',
        borderWidth: 0.5
    },
    view31: {
        borderColor: 'grey',
        borderWidth: 0.5,
        height: 50,
        flex: 1,
        flexDirection: "row",
        padding: 8,
        borderRadius: 10,
        marginVertical: 10
    },
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
