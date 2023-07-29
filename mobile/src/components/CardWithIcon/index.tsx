// Funções e Componentes
import { Box, Text, useTheme } from 'native-base';
import { Alert, GestureResponderEvent, TouchableOpacity } from 'react-native';

// Tipagem
import { ColorType } from 'native-base/lib/typescript/components/types';
import { ColorValue } from 'react-native';
import { SvgProps } from 'react-native-svg';

interface CardProps {
    IconSVG: React.FC<SvgProps>,
    label: string,
    value?: any,
    textColor?: ColorType,
    bgColor?: ColorType,
    onPress?: () => void
}

export default function CardWithIcon({ IconSVG, label, value, textColor, bgColor, onPress: Action }: CardProps) {

    const { colors } = useTheme();

    function onPress() {
        Alert.alert(label, "Função não implementada");
    }

    return (
        <TouchableOpacity
            onPress={Action ? () =>  Action() : () => onPress()}
        >

            <Box
                borderColor={colors.secondary[900]}
                borderWidth="2"
                backgroundColor={bgColor ? bgColor : colors.primary[900]}
                width="100vw"
                height="16vh"
                rounded="lg"
                marginBottom="0"
                m="4"
                p="8"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <IconSVG fill={textColor ? textColor as ColorValue : colors.white} />
                <Text
                    color={textColor ? textColor : colors.white}
                >
                    {label}
                </Text>
                <Text
                    color={textColor ? textColor : colors.white}
                >
                    {value ? value : ""}
                </Text>
            </Box>
        </TouchableOpacity>
    )
}