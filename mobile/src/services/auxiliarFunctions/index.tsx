// Componentes
import { Alert } from 'react-native';

export function handleBack(action: () => void) {
    Alert.alert(
        "Abandonar alterações?",
        "Ao pressionar Confirmar todas as informações inseridas serão perdidas.",
        [
            {
                text: "Cancelar",
                onPress: null,
                style: "cancel", // Estilo para indicar que é o botão de cancelamento (cor diferente em algumas plataformas)
            },
            {
                text: "Confirmar",
                onPress: () => action(),
            },
        ]
    );
}