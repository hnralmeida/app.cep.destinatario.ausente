// Funções
import React from 'react';

// Estilização
import { styles } from './styles';

// Componentes
import { Box, Button, Input, ScrollView, Text, VStack, useTheme } from 'native-base';

// Navegação
import { StackDashboard } from '../../routes/stack.routes';
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native';

// Imagens de Assets
import { useAuth } from '../../context/Auth/AuthProvider';
import api from '../../services/api';

type HomeScreenProp = StackNavigationProp<StackDashboard, "Dashboard">

function Dashboard() {

    // Navegação
    const navigation = useNavigation<HomeScreenProp>();

    // Dados da sessão
    const { user } = useAuth();

    // Esquema de Cores
    const { colors } = useTheme();

    // Memoria
    const [valueRead, setValue] = React.useState<any>('');
    const [memo, setMemo] = React.useState<any[]>([]);
    const [loader, setLoader] = React.useState<boolean>(false);

    // Função utilizando locator para obter CEP a partir de nome da rua e nome da cidade
    function findCEP(location: any): String {
        const endpoint = '/geocode/json?'
        const query = endpoint + 'address=' + location + '&key=' + process.env.EXPO_PUBLIC_GOOGLE_API_KEY

        // api.get(query)
        //     .then((response) => {
        //         const data = response.data.results[0].address_components[6].long_name;
        //         return data;
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //         alert(error.message);
        //     });
        return 'Unkonwn'
    }

    const handlePress = (city: string) => {

        const endpoint = '/interpreter?'
        const query = endpoint + 'data=[out:json];area[name="' + city + '"];way(area)[highway][name];out;'

        api.get(query)
            .then((response) => {
                const data = response.data;

                setMemo(response.data.elements);
            })
            .catch((error) => {
                console.log(error);
                alert(error.message);
            });
        removeDuplicates(memo);

    };

    // Função para remover tags.names repetidos em memo
    const removeDuplicates = (array: any) => {
        return array.filter((a: any, b: any) => array.indexOf(a) === b)
    }

    return (
        <>
            <Box
                backgroundColor={colors.white}
                style={styles.container}
            >
                <Box
                    width="90%"
                    paddingTop="32px"
                >
                    <Input
                        type="text"
                        value={valueRead}
                        onChangeText={setValue}
                        placeholder="Digite uma cidade..."
                    />

                </Box>

                {loader ?
                    <Button
                        marginTop="16px"
                        isLoading
                    />
                    :
                    <Button
                        onPress={() => handlePress(valueRead)}
                        marginTop="16px"
                    >
                        Pesquisar
                    </Button>
                }
                <ScrollView
                    flex="1"
                    width="100%"
                >
                    <VStack
                        flex="1"
                        width="100%"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        paddingLeft="32px"
                    >

                        {memo.length > 0 && memo.map((item: any) => {
                            return (
                                <>
                                    <Box>
                                        <Text
                                            key={item.id}
                                            fontSize="16px"
                                            color={colors.primary[900]}
                                            marginTop="16px"
                                        >
                                            {item.tags.name}
                                        </Text>
                                    </Box>
                                    <Box>
                                        <Text> {findCEP(item.tags.name + valueRead)} </Text>
                                    </Box>
                                </>
                            )
                        })}
                    </VStack>
                </ScrollView>
            </Box>
        </>
    );
}

export default Dashboard;
