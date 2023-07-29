// Navegação
import { AppHeader } from '../components/AppHeader';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Icons 
import IconMenu from "../assets/icon_menu.svg";
import IconDashboard from "../assets/icon_home.svg";
import IconUser from "../assets/User.svg";

import { useTheme } from 'native-base';
import Dashboard from '../screens/Dashboard';

const StackDashboard = createStackNavigator();
const Tabs = createBottomTabNavigator();

export type StackDashboard = {
    Dashboard: undefined,
}
export function StackRoutes() {
    const { colors } = useTheme();

    return (
        <>
            <Tabs.Navigator
                screenOptions={{
                    headerStatusBarHeight: 0,
                    tabBarActiveTintColor: colors.primary[900],
                    tabBarStyle: {
                        backgroundColor: colors.white, // Cor de fundo da barra de guias
                        height: 64, // Altura da barra de guias
                        paddingTop: 4, // Espaçamento inferior
                        paddingBottom: 8, // Espaçamento inferior
                        justifyContent: 'center',
                    },
                    tabBarItemStyle: {
                        width: 32,
                        borderRadius: 16,
                        marginHorizontal: 8
                    }
                }}

            >
                <Tabs.Screen
                    name="Menu"
                    component={Dashboard}
                    options={{
                        header: () => <AppHeader />,
                        tabBarIcon: ({ color }) => (
                            <IconMenu fill={color} width={32} height={32}/>
                        )
                    }}
                />

                <Tabs.Screen
                    name="Home"
                    component={Dashboard}
                    options={{
                        header: () => <AppHeader />,
                        tabBarIcon: ({ color }) => (
                            <IconDashboard fill={color} width={32} height={32}/>
                        )
                    }}
                />

                <Tabs.Screen
                    name="Usuário"
                    component={Dashboard}
                    options={{
                        header: () => <AppHeader />,
                        tabBarIcon: ({ color }) => (
                            <IconUser fill={color} width={32} height={32}/>
                        )
                    }}
                />

            </Tabs.Navigator >
        </>
    )
}