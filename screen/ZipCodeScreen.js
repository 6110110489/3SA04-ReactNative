import React from 'react'
import { FlatList, View, Text, StyleSheet, ImageBackground, Linking } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const AvailableZipItems = [
    { place: 'Chiangmai', code: '50000'},
    { place: 'Chonburi', code: '20000'},
    { place: 'Hatyai', code: '90110'},
    { place: 'Khonkaen', code: '40000'},
    { place: 'Pattni', code: '94000'},
    { place: 'Trang', code: '92000'},
       
]

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather', {zipCode: code})
    }}>
        <View style={styles.zipItem}>
            <Text style={styles.zipPlace}>{place}</Text>
            <Text style={styles.zipCode}>{code}</Text>
        </View>
    </TouchableHighlight>

)

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <ImageBackground source={require('../image/Sky1.jpg')} style={styles.backdrop}>
          <View style={{
            flex: 1,
            flexDirection: 'row',
        }}>
            <FlatList
                data = {AvailableZipItems}
                keyExtractor = {item =>item.code}
                renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
            />
          </View>

            <View style={{backgroundColor: "#2337f7"}}>
                <TouchableHighlight onPress={() =>Linking.openURL('https://github.com/6110110489/')}>
                    <Text style={{
                        color: '#FFFFFF',  
                        fontSize: 18,
                        paddingTop: '3%',
                        paddingBottom: '3%',
                        paddingLeft: '38%',
                    }}>GITHUB ME</Text>
                </TouchableHighlight>
            </View>
        </ImageBackground> 
    )
}

const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        width: '100%',
        height: '100%',
        opacity: 0.9,
    },

    zipItem: {
        flex: 1,
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'auto',
    },

    zipPlace: {
        color: '#000000',  
        fontSize: 20,
        paddingTop: '10%',
        paddingBottom: '10%',
        paddingLeft: '20%', 
    },

    zipCode: {
        color: '#000000',  
        fontSize: 20,
        paddingTop: '10%',
        paddingBottom: '10%',
        paddingRight: '20%',
    },

})
