import React, { useState } from 'react';
import { View, ScrollView, ImageBackground, Text, TouchableOpacity, Dimensions, Image, TextInput } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Entypo from '@expo/vector-icons/Entypo';
import { Feather } from '@expo/vector-icons';



// Get the device screen width dynamically so the banner fits perfectly on any phone
const { width: SCREEN_WIDTH } = Dimensions.get('window');
// Calculate container size matching the layout padding from image_e41861.png
const BANNER_WIDTH = SCREEN_WIDTH - 30;

const BANNERS = [
    { id: '1', title: 'Feel Every Goal. Share the World Cup Passion!', subtitle: 'Fund your betting wallet with OPay.', buttonText: 'Top Up Now', tag: 'WORLD CUP 2026' },
    { id: '2', title: 'Send Money For Free Instantly', subtitle: 'Zero charges to any bank account in Nigeria.', buttonText: 'Transfer Now', tag: 'PROMO 2026' },
];

export default function ToBank() {
    const navigation = useNavigation();
    const [activeIndex, setActiveIndex] = useState(0);


    // Tracks the slide movement to update the little dot indicators
    const handleScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(scrollPosition / BANNER_WIDTH);
        setActiveIndex(currentIndex);
    };


    const RECENT_BENEFICIARIES = [
        {
            id: '1',
            name: 'YAHAYA ISAH',
            accountDetails: '9127055306 SmartCash Payment Service Bank',
            logo: 'https://placeholder.com/smartcash-logo.png', // Replace with your asset image path
            fallbackText: 'SC',
            brandColor: '#E60000',
        },
        {
            id: '2',
            name: 'OLOHUN-WA GLOBAL TECH. - OLOHUNWA COMMUNICATION',
            accountDetails: '8257975307 MONIE POINT',
            logo: 'https://placeholder.com/moniepoint-logo.png', // Replace with your asset image path
            fallbackText: 'M',
            brandColor: '#0066FF',
        },
        {
            id: '3',
            name: 'ROSE OASIS WINE AND MORE VENTURES',
            accountDetails: '5205147258 MONIE POINT',
            logo: 'https://placeholder.com/moniepoint-logo.png', // Replace with your asset image path
            fallbackText: 'M',
            brandColor: '#0066FF',
        },
    ];


    // State to manage the active tab ("Recents" or "Favourites")
    const [activeTab, setActiveTab] = useState('Recents');

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ height: 120, width: "100%", backgroundColor: '#2c2b2b', paddingHorizontal: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: 'row', marginTop: 20 }}>

                        <Entypo name="chevron-left" size={24} color="white" />
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17, }}
                        >{'  Transfer to Bank Account'}</Text>
                    </TouchableOpacity>
                    <Text
                        onPress={() => Alert.alert('Nothing to download yet')}
                        style={{ color: '#0d6528', fontWeight: '800', fontSize: 17, marginTop: 20 }}
                    >
                        History
                    </Text>
                </View>


            </SafeAreaView>
            <View style={{ flex: 1, backgroundColor: '#151414', gap: 5, }}>



                <View style={{ marginHorizontal: 15, marginVertical: 10 }}>

                    {/* 1. SLIDING CAROUSEL ENGINE */}
                    <ScrollView
                        horizontal={true}
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        onScroll={handleScroll}
                        scrollEventThrottle={16} // Keeps scroll tracking highly accurate
                        snapToInterval={BANNER_WIDTH + 10} // Width + gap spacing
                        decelerationRate="fast"
                        contentContainerStyle={{ gap: 10 }} // Sets a clean spacing gap between individual banners
                    >
                        {BANNERS.map((banner) => (
                            <View
                                key={banner.id}
                                style={{
                                    width: BANNER_WIDTH,
                                    height: 140,
                                    backgroundColor: '#111',
                                    borderRadius: 12,
                                    overflow: 'hidden',
                                    flexDirection: 'row',
                                }}
                            >
                                {/* Left Column Content (Text and Buttons) */}
                                <View style={{ flex: 1.2, padding: 15, justifyContent: 'center' }}>
                                    <Text style={{ color: '#FFF', fontSize: 16, fontWeight: 'bold', marginBottom: 4 }}>
                                        {banner.title}
                                    </Text>
                                    <Text style={{ color: '#aaa', fontSize: 12, marginBottom: 12 }}>
                                        {banner.subtitle}
                                    </Text>

                                    <TouchableOpacity style={{ backgroundColor: '#FFD700', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20, alignSelf: 'flex-start' }}>
                                        <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 12 }}>{banner.buttonText}</Text>
                                    </TouchableOpacity>
                                </View>

                                {/* Right Column Content (The Graphic Area) */}
                                <View style={{ flex: 1, backgroundColor: '#0c2310', justifyContent: 'flex-end', alignItems: 'flex-end', position: 'relative' }}>
                                    {/* Optional background overlay texture or image styling can sit here */}
                                    <View style={{ backgroundColor: '#000', paddingVertical: 4, paddingHorizontal: 8, borderRadius: 4, position: 'absolute', bottom: 10, right: 10 }}>
                                        <Text style={{ color: '#FFF', fontSize: 9, fontWeight: 'bold' }}>{banner.tag}</Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </ScrollView>

                    {/* 2. SLIDER DOT INDICATORS (Bottom Right Layer layout from image_e41861.png) */}
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 6,
                            position: 'absolute',
                            bottom: 15,
                            left: BANNER_WIDTH * 0.45 // Positions the indicators neatly under the divider zone
                        }}
                    >
                        {BANNERS.map((_, index) => (
                            <View
                                key={index}
                                style={{
                                    width: activeIndex === index ? 14 : 6, // Active dot stretches wider exactly like OPay
                                    height: 6,
                                    borderRadius: 3,
                                    backgroundColor: activeIndex === index ? '#00C853' : '#333'
                                }}
                            />
                        ))}
                    </View>

                </View>
                <TouchableOpacity activeOpacity={0.5} style={{ height: 40, width: BANNER_WIDTH, backgroundColor: '#999', borderRadius: 10, alignContent: 'center', flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: '#32236e', alignSelf: 'center', gap: 10, paddingStart: 20 }}>


                    <View style={{ height: 30, width: 30, justifyContent: 'center', alignItems: 'center', }}>
                        <Image resizeMode='center' source={require('../assets/naira3.png')} style={{ height: 25 }} />
                    </View>
                    <Text style={{ color: '#888', fontWeight: 'bold' }}>Free transfers for the day:
                        <Text style={{ fontSize: 16 }}> 3</Text> </Text>
                </TouchableOpacity>

                <View style={{ height: 250, width: BANNER_WIDTH, backgroundColor: '#2c2b2b', marginTop: 10, borderRadius: 20, padding: 20, alignSelf: 'center', flexDirection: 'column', gap: 4 }}>


                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Recipient Account</Text>


                    <TextInput
                        placeholder='Enter 10 digits Account Number'
                        placeholderTextColor={'#888'}
                        pl
                        style={{ color: 'white', width: '100%', fontSize: 16, marginTop: 10 }}
                        maxLength={10}
                        inputMode='numeric'
                    />
                    <View style={{ width: '100%', borderWidth: 1, borderColor: '#202020' }} />

                    <View>

                        <TextInput
                            placeholder='Select Bank'
                            placeholderTextColor={'#888'}
                            pl
                            style={{ color: 'white', width: '100%', fontSize: 16, marginTop: 20 }}
                            maxLength={10}
                            inputMode='numeric'
                        />
                        <View style={{ width: '100%', borderWidth: 1, borderColor: '#202020' }} />
                    </View>

                    <TouchableOpacity onPress={()=> navigation.navigate("TransferToBank")} activeOpacity={0.5} style={{ height: 50, width: '95%', alignSelf: 'center', backgroundColor: '#024e21', marginTop: '15', borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
                        <Text >Next</Text>

                    </TouchableOpacity>
                </View>

                <TouchableOpacity activeOpacity={0.5} style={{ height: 45, width: BANNER_WIDTH, backgroundColor: '#999', borderRadius: 10, alignContent: 'center', flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: '#2c2b2b', alignSelf: 'center', gap: 10, paddingStart: 20 }}>


                    <View style={{ height: 30, width: 30, justifyContent: 'center', alignItems: 'center', }}>
                        <Image resizeMode='center' source={require('../assets/wifi.png')} style={{ height: 25 }} />
                    </View>
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>BankTransfer Success Rate Monitor</Text>
                </TouchableOpacity>



                <View>
                    <View
                        style={{
                            backgroundColor: '#222222', // Card background container
                            borderRadius: 16,
                            paddingTop: 15,
                            paddingBottom: 15,
                            marginHorizontal: 15,
                            marginVertical: 10,
                        }}
                    >
                        {/* 1. TABS HEADER ROW */}
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                paddingHorizontal: 15,
                                borderBottomWidth: 1,
                                borderColor: '#2D2D2D',
                                paddingBottom: 12,
                            }}
                        >
                            <View style={{ flexDirection: 'row', gap: 25 }}>
                                {/* Recents Tab */}
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    onPress={() => setActiveTab('Recents')}
                                    style={{ position: 'relative', paddingBottom: 4 }}
                                >
                                    <Text
                                        style={{
                                            color: activeTab === 'Recents' ? '#00C853' : '#8E8E93',
                                            fontSize: 16,
                                            fontWeight: '600',
                                        }}
                                    >
                                        Recents
                                    </Text>
                                    {activeTab === 'Recents' && (
                                        <View
                                            style={{
                                                position: 'absolute',
                                                bottom: -13, // Aligns perfectly on top of the divider line
                                                left: 0,
                                                right: 0,
                                                height: 3,
                                                backgroundColor: '#00C853',
                                                borderRadius: 2,
                                            }}
                                        />
                                    )}
                                </TouchableOpacity>

                                {/* Favourites Tab */}
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    onPress={() => setActiveTab('Favourites')}
                                    style={{ position: 'relative', paddingBottom: 4 }}
                                >
                                    <Text
                                        style={{
                                            color: activeTab === 'Favourites' ? '#00C853' : '#8E8E93',
                                            fontSize: 16,
                                            fontWeight: '600',
                                        }}
                                    >
                                        Favourites
                                    </Text>
                                    {activeTab === 'Favourites' && (
                                        <View
                                            style={{
                                                position: 'absolute',
                                                bottom: -13,
                                                left: 0,
                                                right: 0,
                                                height: 3,
                                                backgroundColor: '#00C853',
                                                borderRadius: 2,
                                            }}
                                        />
                                    )}
                                </TouchableOpacity>
                            </View>

                            {/* Search Icon right aligned */}
                            <TouchableOpacity activeOpacity={0.6}>
                                <Feather name="search" color="#00C853" size={20} />
                            </TouchableOpacity>
                        </View>

                        {/* 2. BENEFICIARIES LIST ROW ENGINE */}
                        <View style={{ paddingHorizontal: 15 }}>
                            {RECENT_BENEFICIARIES.map((item, index) => (
                                <TouchableOpacity
                                    key={item.id}
                                    activeOpacity={0.6}
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        paddingVertical: 14,
                                        borderBottomWidth: index === RECENT_BENEFICIARIES.length - 1 ? 0 : 1, // Removes divider for last item
                                        borderColor: '#2D2D2D',
                                    }}
                                >
                                    {/* Left Texts Wrapper */}
                                    <View style={{ flex: 1, paddingRight: 15 }}>
                                        <Text
                                            numberOfLines={1}
                                            style={{
                                                color: '#FFFFFF',
                                                fontSize: 14,
                                                fontWeight: '500',
                                                marginBottom: 6,
                                            }}
                                        >
                                            {item.name}
                                        </Text>
                                        <Text
                                            numberOfLines={1}
                                            style={{
                                                color: '#8E8E93',
                                                fontSize: 12,
                                            }}
                                        >
                                            {item.accountDetails}
                                        </Text>
                                    </View>

                                    {/* Right Bank Avatar Dynamic Display */}
                                    <View
                                        style={{
                                            width: 36,
                                            height: 36,
                                            borderRadius: 18,
                                            backgroundColor: item.brandColor,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        {/* You can swap this with an Image component if remote asset URLs are loaded */}
                                        <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 14 }}>
                                            {item.fallbackText}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>

                        {/* 3. CENTERED "VIEW ALL" PILL BUTTON */}
                        <View style={{ alignItems: 'center', marginTop: 15 }}>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    backgroundColor: '#1A1A1A',
                                    paddingVertical: 6,
                                    paddingHorizontal: 16,
                                    borderRadius: 20,
                                    gap: 4,
                                }}
                            >
                                <Text style={{ color: '#8E8E93', fontSize: 13, fontWeight: '500' }}>
                                    View All
                                </Text>
                                <Feather name="chevron-right" color="#8E8E93" size={14} />
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>


            </View>
        </SafeAreaProvider>
    );
}