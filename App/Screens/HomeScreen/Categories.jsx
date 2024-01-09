import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import Heading from '../../Components/Heading'
import Colors from '../../Utils/Colors'

export default function Categories() {
    const [categories, setcategories] = useState([])
    useEffect(() => {
        getCate();
    }, [])

    const getCate = () => {
        GlobalApi.GetCategories().then(resp => {
            console.log(resp)
            setcategories(resp?.categories)
        })
    }

    return (
        <View>
            <Heading props="Categories" isViewAll={true} />
            <FlatList
                data={categories}
                numColumns={4}
                renderItem={({ item, index }) =>index <=3&&(

                        <View style={styles.container}>
                            <View style={styles.icons}>
                                <Image source={{ uri: item?.icon?.url }} style={{ width: 30, height: 30 }} />

                            </View>
                            <Text style={{ fontFamily: 'outfit-medium', marginTop: 5 }}>{item?.name}</Text>
                        </View>
       
    )}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    icons: {
        backgroundColor: Colors.LIGHT_Gray,
        padding: 17,
        borderRadius: 99
    },
    container: {
        flex: 1,
        alignItems: 'center'
    }
})