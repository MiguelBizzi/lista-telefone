import React from "react";
import { 
    Text,
    View,

} from 'react-native'

import {
    CardTelefone,
    CardTelefoneText,
    CardTelefoneLabel

} from './style';

export function Card(props){
    return(
        <CardTelefone>
            <CardTelefoneLabel>Telefone:</CardTelefoneLabel>
            <CardTelefoneText>{props.tel}</CardTelefoneText>
        </CardTelefone> 
    )
}