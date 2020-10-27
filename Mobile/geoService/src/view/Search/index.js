import React, { useState, useEffect, useContext } from 'react';
import { Contextapi } from '../../hooks/authContext';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons'
import api from '../../service/api';

import {
    Container,
    Map,
    CalloutContainer,
    CalloutTitle,
    Footer,
    FooterTextInput,
    FooterButton
}
from './styles-components';
import { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';

export default function Search({ navigation }) {
    const { user } = useContext(Contextapi);
    console.log(user, 'search');


    const [establishments, setEstablishments] = useState([]);
    const [currentRegion, setCurrentRegion] = useState(null);

    useEffect(() => {
        async function loadInitialPosition() {
            const { granted } = await requestPermissionsAsync();
            if( granted ) {
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                });
                const { latitude, longitude } = coords;
                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04,
                });
            }
        }
        loadInitialPosition();
    }, []);

    console.log(establishments);

    useEffect(() => {
        api.get('/newEstablishments', {
            headers: {
                Authorization: user.id,
            }
        }).then(response => {
            setEstablishments(response.data);
        })
    }, []);

    // async function loadEstablishments(){

    // }

    function handleRegionChanged(region) {
        console.log(region, 'alteracao de lugar do mapa');
        setCurrentRegion(region);
    }

    return(
        <Container>
            <Map 
            provider={PROVIDER_GOOGLE}
            onRegionChangeComplete={handleRegionChanged} 
            initialRegion={currentRegion}>
            {establishments.map((establishment) => {
                return (
                <Marker
                key={establishment.id}
                calloutAnchor={{
                    x: 4.2,
                    y: 0.8
                }}
                coordinate={{
                    latitude: establishment.latitude,
                    longitude: establishment.longitude
                }}
                >
                    <Callout tooltip={true} onPress={() => navigation.navigate('Details')}>
                        <CalloutContainer>
                            <CalloutTitle> {establishment.name} </CalloutTitle>
                        </CalloutContainer>
                    </Callout>
                </Marker>
                )
            })}
            </Map>

            <Footer>
                <FooterTextInput 
                        placeholder='Buscar por estabelecimentos'
                        placeholderTextColor='#999'
                        autoCapitalize='words'
                        autoCorrect={false}
                />
                <FooterButton onPress={() => {}}>
                    <MaterialIcons name='my-location' size={20} color='#FFF' />
                </FooterButton>
            </Footer>
        </Container>
    );
}