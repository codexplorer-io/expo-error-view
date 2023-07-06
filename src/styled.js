import styled from 'styled-components/native';
import { Subheading } from 'react-native-paper';

export const ErrorRoot = styled.View`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
`;

export const Text = styled(Subheading)`
    text-align: center;
`;

export const Spacer = styled.View`
    height: 10px;
`;

export const IconContainer = styled.View`
    opacity: 0.3;
`;
