import * as React from 'react';
import { Alert, Button, Text, TextInput, View } from "react-native";

export default class SorteioCategoria extends React.Component { 

    state = {
        categoriasSorteadas:[],
        quantidade: 8,
        categoriasDisponiveis: [
            'Nome Masculino',
'Nome Feminino',
'CEP',
'Cor',
'Animal',
'Filme',
'Série',
'Franquia',
'Aves',
'Apps',
'Música',
'Famosos',
'Banda',
'Itens de cozinha',
'Itens de banheiro',
'Personagem',
'Livro',
'Verbo',
'Adjetivo',
'Partes do Corpo',
'Profissão',
'Jogos',
'Esporte',
'Times',
'Marca',
'Comida',
'Bebida'
        ],
        disableButton: false
    }

    alteraQuantidade = (valor: string) => {
        const numero = parseInt(valor, 10);

        if (!isNaN(numero)){
            this.setState({
                quantidade: numero
            })
        }
    }

    sorteio = () => {
        const {categoriasDisponiveis, quantidade} = this.state;

        if (quantidade > categoriasDisponiveis.length) { 
            Alert.alert(' Digite um valor entre 1 e ' +  categoriasDisponiveis.length);
            return;
        }

        const sorteados: string[] = []

        do {
            const random = Math.ceil(Math.random() * categoriasDisponiveis.length -1);
            const item = categoriasDisponiveis[random];

            if (!sorteados.some(sorteado => item === sorteado)){
                sorteados.push(item);
            }
        }while(sorteados.length < quantidade)

        this.setState({
          categoriasSorteadas:  sorteados
        })


    }

    render() {
        const { categoriasSorteadas, quantidade, disableButton} = this.state;


        return <View>
            {categoriasSorteadas.map((categoria, index) => {
                return <Text key={index}>
                {categoria}
            </Text>
            })}

            <TextInput onChangeText={value => this.alteraQuantidade(value)} value={quantidade.toString()} />
            <Button disabled={disableButton} title="Sortear" onPress={this.sorteio} />
        </View>
    }
}