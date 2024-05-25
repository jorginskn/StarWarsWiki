import React from 'react';
import { StyleSheet, Image} from 'react-native';
import logoImage from '../../../../assets/LogoEmpire.png';

export const Logo = () => {
    return (
        <Image style={styles.logo} source={logoImage}/>
     )
}

const styles = StyleSheet.create({
    logo: {
        height: 64,
        width: 64
    },
});