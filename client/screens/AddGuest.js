import { useDispatch, useSelector } from "react-redux"
import { ScrollView, TextInput, StyleSheet, Button, View, Pressable, Text } from 'react-native'
import { useEffect, useRef, useState } from "react"
import { setGuestData } from "../store/actions/actionCreator"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
// import SelectDropdown from 'react-native-select-dropdown'
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';


export default function AddGuest() {
    let { guests } = useSelector(state => state.guests)
    const dispatch = useDispatch()
    const [guest, setGuest] = useState('')
    const navigation = useNavigation();
    const [guestList, setGuestList] = useState(guests)


    const handleInputChange = (type, inputName, index) => {        
        const list = [...guestList];
        list[index][type] = inputName;
        setGuestList(list);
    };

    const handleAddClick = () => {
        setGuestList([...guestList, { name: "", title: "Tn. " }]);
    };

    const handleRemoveClick = index => {
        const list = [...guestList];
        list.splice(index, 1);
        setGuestList(list);
    };


    const honorifics = ["Tn. ", "Ny. ", "Nn. "]


    return (





        <View style={{ flex: 1 }}>
            <View style={{ flex: 25 }}>
                <View style={{ flex: 20, margin: 15 }}>
                    <Text style={{ color: "#325897", fontWeight: 'bold', fontSize: 17 }}>
                        Data Tamu
                    </Text>
                    <View>
                        <ScrollView>
                            {guestList.map((guest, index) => {
                                return (
                                    <View style={{ flexDirection: 'row', margin: 2 }} key={index}>

                                        <SelectDropdown
                                            data={honorifics}
                                            onSelect={(selectedItem, i) => {
                                                handleInputChange('title', selectedItem, index)
                                            }}
                                            buttonTextAfterSelection={(selectedItem, index) => {
                                                return selectedItem;
                                            }}
                                            rowTextForSelection={(item, index) => {
                                                return item;
                                            }}
                                            renderDropdownIcon={isOpened => {
                                                return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
                                            }}
                                            defaultValue={guest.title ? guest.title : "Tn. "}
                                            defaultButtonText={guest.title ? guest.title : "Tn. "}
                                            buttonStyle={{ borderColor: 'black', borderWidth: 0.5, borderRadius: 15, flex: 3, }}
                                            buttonTextStyle={{ color: "#325897" }}
                                        />
                                        <TextInput onChangeText={(input) => handleInputChange('name', input, index)} style={{ flex: 9, paddingHorizontal: 10, color: "#325897", borderColor: 'black', borderWidth: 0.5, borderRadius: 15, marginLeft: 2 ,fontSize:17}}
                                            placeholder="Enter name" defaultValue={guest.name}
                                        />
                                        <Pressable onPress={() => {
                                            handleRemoveClick(index)
                                        }}
                                            style={{
                                                flex: 2,
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}
                                        >
                                            <Icon name="trash-can-outline" size={35} style={{ color: 'red' }} />

                                        </Pressable>
                                    </View>
                                )
                            })}
                            <View style={{ flex: 2, padding: 20 }}>
                                <Pressable
                                    onPress={() => {
                                        handleAddClick()
                                    }}
                                    style={{
                                        flex: 1,
                                        alignItems: "center",
                                        flexDirection: 'row',
                                        justifyContent: "space-around",
                                        borderRadius: 10
                                    }}>
                                    <Text style={{ fontWeight: 'bold', color: '#fa833b', fontSize: 17, textDecorationLine: 'underline' }}>
                                        + Tambah Data Tamu
                                    </Text>
                                </Pressable>
                            </View>


                        </ScrollView>
                    </View>
                </View>
                <View style={{ ...styles.view32, flex: 1.5 }}>
                    {/* <Icon name="account" size={35} style={{flex:1}} /> */}


                </View>

            </View>

            <View style={{ flex: 2, padding: 20 }}>
                <Pressable
                    onPress={() => {
                        dispatch(setGuestData(guestList))
                        navigation.navigate('Home')
                    }}
                    style={{
                        flex: 1,
                        alignItems: "center",
                        flexDirection: 'row',
                        justifyContent: "space-around",
                        backgroundColor: '#fa833b',
                        borderRadius: 10
                    }}>
                    <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 17 }}>
                        Simpan
                    </Text>
                </Pressable>
            </View>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 10,
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
    },
    view32: {
        height: 50,
        flexDirection: "row",
        paddingLeft: 8,
        paddingTop: 8,
        borderRadius: 10,
        marginVertical: 10,
    }

});