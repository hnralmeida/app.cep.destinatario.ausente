import { StackRoutes } from './stack.routes';
import { NavigationContainer } from "@react-navigation/native"
import { NativeBaseProvider } from 'native-base';
import { theme } from '../../theme';
import { LogBox } from "react-native"
import { useAuth } from '../context/Auth/AuthProvider';

export function Routes() {
    // Esse erro acontece porque em node_modules é importado node_modules/native-base/src/core/NativeBaseProvider.tsx
    // com o componente <SSRProvider></SSRProvider> that wraps {children} 
    LogBox.ignoreLogs(['In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.',])

    return (
        <NativeBaseProvider theme={theme}>
            <NavigationContainer>
                <StackRoutes />
            </NavigationContainer>
        </NativeBaseProvider>
    )
}