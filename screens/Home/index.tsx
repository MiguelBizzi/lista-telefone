import { 
    TextInput,
    Text,
    TouchableOpacity,
    Alert,
    FlatList,
    ScrollView

} from 'react-native';
import React, { useState } from 'react';
import { 

    Container, 
    Title, 
    InputTelefone, 
    SubmitButton,
    SubmitButtonText,
    LabelLista
    
} from './style';
import { Card } from '../../components/Card';



export function Home(){

    const [numTelefone, setNumTelefone] = useState('');
    const [telefones, setTelefones] = useState([]);


    function HandleAddNewTelefone(){
        /*Condicao que verifica se ha igual*/
        const valida_tel = telefones.filter(telefone => telefone.tel == numTelefone);

        if(valida_tel.length > 0){
            Alert.alert("Telefone já registrado")
        } else {
            if(telefones.length < 4){
                const newTelefone = {
                    id: String(new Date().getTime()),
                    tel: numTelefone
                }
                setTelefones(oldState => [...oldState, newTelefone])
            } else {
                Alert.alert("Número Limite de telefones atingido!")
            }
        }

        
    }
    
    return (
      <Container>
            <Title>Lista Telefone</Title>
            <InputTelefone 
                placeholder='Digite um telefone'
                onChangeText={setNumTelefone}
            />
            <SubmitButton onPress={HandleAddNewTelefone}>
                <SubmitButtonText>Listar</SubmitButtonText>
            </SubmitButton>

            <LabelLista>Meus Telefones:</LabelLista>

            {
                telefones.map(telefone => <Card key={telefone.id} tel={telefone.tel} />)
            }
      </Container>
    )
}