import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Box, useTheme } from 'native-base';
import IconLogo from '../../assets/icon_correios.svg';
import { useAuth } from '../../context/Auth/AuthProvider';

export function AppHeader() {

    const [press, setPress] = React.useState(false);
    const { colors } = useTheme();

    const { signOut } = useAuth();

    function handlePress() {
        setPress(!press);
    }

    return (
        <Box
            style={styles.container}
            backgroundColor={colors.white}
            shadow="9"
        >
            {/* Logo no meio */}
            <TouchableOpacity
                style={styles.touchableOpacity}
                onPress={signOut}
            >
                <IconLogo width={160} height={48} fill={colors.primary[900]} />
            </TouchableOpacity>

        </Box>
    );
}