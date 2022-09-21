import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding-top: 100px;
    align-items: center;
    background: #f3f3f3;
`;

export const Title = styled.Text`
    font-size: 30px;
    color: #3EAFF5;
    font-weight: bold;
`;

export const InputTelefone = styled.TextInput`
    width: 70%;
    height: 40px;

    margin-top: 30px;
    padding-left: 10px;

    border-radius: 10px;
    border: 2px solid #D0EBFE;
`;

export const SubmitButton = styled.TouchableOpacity`
    width: 20%;
    
    padding: 15px;
    margin-top: 30px;

    background-color: #27A5F2;
    border-radius: 10px;
`;

export const SubmitButtonText = styled.Text`
    text-align: center;
    color: white;
    font-size: 12px;
`;

export const LabelLista = styled.Text`
    margin-top: 30px;
    color: white;
    font-size: 18px;
`;
