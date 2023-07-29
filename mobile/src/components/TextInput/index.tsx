// Logica e Conexão 
import React, { useEffect, useState } from "react";
import { Input, IInputProps, Box, useTheme, Text, FormControl } from "native-base";
import { Controller } from 'react-hook-form';

type InputsProps = IInputProps & {
    controlLabel: string;
    fieldLabel: string;
    control: any;
    errors: any;
    type?: string
    offset?: string;
    mask?: Function;
}

export default function TextInputField({ controlLabel, fieldLabel, control, errors, isInvalid, type, offset, mask, ...rest }: InputsProps) {

    const { colors } = useTheme();

    const maskFuntion = mask ? mask : ((arg0: any)=> arg0);

    return (
        <Controller
            control={control}
            name={controlLabel}
            render={({ field: { onChange } }) => (
                <FormControl mb={4} isInvalid={controlLabel in errors}>
                    <Box
                        width="100%"
                        px="32px"
                    >
                        <FormControl.Label
                            textDecorationColor={colors.secondary[900]}
                        >
                            {fieldLabel}
                        </FormControl.Label>

                        <Input
                            value={maskFuntion(control._formValues[controlLabel])}
                            onChangeText={onChange}
                            placeholder={fieldLabel}
                            bgColor={colors.white}
                            color={colors.secondary[900]}
                            borderColor={colors.secondary[900]}
                            fontSize="20"
                            borderRadius={"8"}
                            type={type || "text"}
                            h="48px"
                            mt="4px"
                        />
                        <FormControl.ErrorMessage>
                            {errors[controlLabel]?.message}
                        </FormControl.ErrorMessage>
                    </Box>
                </FormControl>
            )
            } />
    )
}