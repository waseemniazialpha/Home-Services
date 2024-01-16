import { View, ScrollView } from 'react-native';
import React from 'react';
import Header from './Header';
import Slider from './Slider';
import Categories from './Categories';
import BusinessList from './BusinessList';

export default function Home() {
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <ScrollView style={{ flex: 1 }} >
                <View style={{ padding: 20 }}>
                    <Slider />
                </View>
                <Categories />
                <View style={{ paddingHorizontal: 20 }}>
                    <BusinessList />
                </View>
            </ScrollView>

        </View>
    );
}
