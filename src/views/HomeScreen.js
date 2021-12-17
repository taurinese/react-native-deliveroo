import React, { Component, setState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderHome from '../components/HeaderHome';
import { SearchBar } from 'react-native-elements';
import CategoriesSlider from '../components/CategoriesSlider';
import AdvertisingSlider from '../components/AdvertisingSlider';
import SponsorSlider from '../components/SponsorSlider';

class HomeScreen extends React.Component {
    state = {    
        search: '',  
    };
    updateSearch = (search) => {    
        this.setState({ search });  
    };
    render() {
        const { search } = this.state;

        return (
        <View>
            <HeaderHome/>
            <SearchBar        
                placeholder="Type Here..."        
                onChangeText={this.updateSearch}        
                value={search} 
                platform="ios"
                containerStyle={styles.searchBarContainer}
                inputContainerStyle={styles.searchBarInputContainer}     
            />
            <CategoriesSlider />
            <AdvertisingSlider />
            <SponsorSlider />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    searchBarContainer: {
        backgroundColor:"transparent",
        marginTop: -37,
    },
    searchBarInputContainer: {
        borderRadius: 50,
        backgroundColor: "#FFF",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.15,
        shadowRadius: 2,

        elevation: 5,
    }
})

export default HomeScreen;
