// React e Funcoes
import React from 'react';

// Componentes
import { View, Image, TouchableOpacity } from 'react-native';

// Estilização
import { styles } from './styles';

// Imagens importadas de assets
import IconDashboard from "../../assets/icon_dashboard.svg";
import IconFunnel from "../../assets/icon_funnel.svg";
import IconCustomers from "../../assets/icon_customers.svg";
import IconWallet from "../../assets/icon_wallet.svg";
import { Box, Text, useTheme } from 'native-base';

interface PropsFooterbar {
    navigation: any,
    screen: string
    handle?: ( any ) => void;
}

export function AppFooter({ navigation, screen, handle }: PropsFooterbar) {
    const { colors } = useTheme();

    const actionhandle = handle ? handle : ((obj: ()=>void )=> obj());

    // Estados para armazenar botão selecionado
    const pressed1 = (screen == "Dashboard" ? true : false);
    const pressed2 = (screen == "Funnel" ? true : false);
    const pressed3 = (screen == "Customers" ? true : false);
    const pressed4 = (screen == "Wallet" ? true : false);

    // Alterar estados para só um ficar selecionado 
    function handlePressed1() {
        return navigation.navigate('Dashboard')
    }
    function handlePressed2() {
        return navigation.navigate('Funnel')
    }
    function handlePressed3() {
        return navigation.navigate('Customers')
    }
    function handlePressed4() {
        return navigation.navigate('Wallet')
    }

    return (
        <Box
            backgroundColor={colors.white}
            shadow="9"
            paddingBottom="4"
            style={styles.container}
        >
            {/* Ícone de Dashboard */}
            <Box>
                <TouchableOpacity
                    onPress={()=>actionhandle(handlePressed1)}
                    style={[styles.notPressed, pressed1 && styles.pressed]}
                >
                    <IconDashboard fill={pressed1 ? colors.white : colors.primary[900]} width={64} height={64} />
                </TouchableOpacity>
            </Box>

            {/* Icone de Funil de Vendas */}
            <Box>
                <TouchableOpacity
                    onPress={() => actionhandle(handlePressed2)}
                    style={[styles.notPressed, pressed2 && styles.pressed]}
                >
                    <IconFunnel fill={pressed2 ? colors.white : colors.primary[900]} width={64} height={64} />
                </TouchableOpacity>
            </Box>

            {/* Ícone de Clientes */}
            <Box>
                <TouchableOpacity
                    onPress={() => actionhandle(handlePressed3)}
                    style={[styles.notPressed, pressed3 && styles.pressed]}
                >
                    <IconCustomers fill={pressed3 ? colors.white : colors.primary[900]} width={64} height={64} />
                </TouchableOpacity>
            </Box>

            {/* Ícone de Carteira */}
            <Box>
                <TouchableOpacity
                    onPress={() => actionhandle(handlePressed4)}
                    style={[styles.notPressed, pressed4 && styles.pressed]}
                >
                    <IconWallet fill={pressed4 ? colors.white : colors.primary[900]} width={64} height={64} />
                </TouchableOpacity>
            </Box>

        </Box>
    );
}