import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import Sponsor from './Sponsor';

class SponsorSlider extends React.Component {
    ads = [
        {
            id: 0,
            image: require("../../assets/advertisings/ad_0.png")
        },
        {
            id: 1,
            image: require("../../assets/advertisings/ad_1.png")
        },
        {
            id: 2,
            image: require("../../assets/advertisings/ad_2.png")
        }
    ];
    
    renderItem = ({ item }) => (
        <Sponsor image={item.image} />
        );
        
        render() {
            return (
                <View>
                <Text style={styles.heading}>À la une</Text>
                <Text style={styles.subtitle}>Annonces payantes de nos partenaires</Text>
                <FlatList 
                data={this.ads}
                renderItem={this.renderItem}
                keyExtractor={item => item.id} 
                contentContainerStyle={styles.slider}
                horizontal
                showsHorizontalScrollIndicator="false"
                />
                </View>
                );
            }
        }
        
        const styles = StyleSheet.create({
            container: {
                marginHorizontal: 6
            },
            slider: {
                flexDirection: "row",
                paddingHorizontal: 6
            },
            heading: {
                fontWeight: "600",
                fontSize: 18,
                marginLeft: 12
            },
            subtitle: {
                marginLeft: 12,
                fontSize: 16,
                marginBottom:10
            }
        })
        
        export default SponsorSlider;