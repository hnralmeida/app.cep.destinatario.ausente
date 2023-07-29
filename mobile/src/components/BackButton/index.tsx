import { Box, Text, useTheme } from 'native-base';
import { Alert, TouchableOpacity } from 'react-native';
// Tipagem
import { ColorType } from 'native-base/lib/typescript/components/types';
import { ColorValue } from 'react-native';
import { SvgProps } from 'react-native-svg';

interface CardProps {
    IconSVG: React.FC<SvgProps>,
    label: string,
    onPress?: () => void
}
export default function BackButton({ IconSVG, label, onPress: Action }: CardProps) {

    const { colors } = useTheme();

    return (
        <Box
            flexDirection="row"
            alignItems="center"
            width="100%"
            mt="0x"
        >
            <TouchableOpacity
                onPress={Action}
            >
                <IconSVG fill={colors.secondary[900]} width={48} height={48} />
            </TouchableOpacity>
            <Text
                fontSize={20}
                marginLeft="8"
                color={colors.secondary[900]}
            >
                {label}
            </Text>
        </Box>
    )
}