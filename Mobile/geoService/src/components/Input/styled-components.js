import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  margin-top: 8px;
  width: 100%;
  height: 58px;
  background: #232129;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
`;


export const TextInput = styled.TextInput`
    flex: 1;
    color: #fff;
    font-size: 16px;
    /* font-family: 'RobotoSlab-Regular'; */
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
  margin-left: 10px;
`;