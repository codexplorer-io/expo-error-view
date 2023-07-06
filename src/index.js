import React from 'react';
import { Button, useTheme } from 'react-native-paper';
import {
    ErrorRoot,
    IconContainer,
    Text,
    Spacer
} from './styled';

export const ErrorView = ({
    icon,
    iconSize = 150,
    message,
    onReload,
    reloadLabel = 'Reload'
}) => {
    const theme = useTheme();

    const { Icon } = theme;

    return (
        <ErrorRoot>
            {icon && (
                <IconContainer>
                    <Icon
                        name={icon}
                        size={iconSize}
                        color={theme.colors.foreground}
                    />
                </IconContainer>
            )}
            {!!message && (
                <>
                    <Text>{message}</Text>
                    <Spacer />
                    {onReload && (
                        <Button
                            icon='reload'
                            mode='contained'
                            onPress={() => onReload()}
                        >
                            {reloadLabel}
                        </Button>
                    )}
                </>
            )}
        </ErrorRoot>
    );
};
