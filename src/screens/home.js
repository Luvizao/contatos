import React from "react";
import { View, Text, Button, FlatList } from "react-native";
import List from "../components/list"

class HomeScreen extends React.Component {
  render() {
    const lojas = [
      {
        id: 1,
        imagem: require("../../assets/lojadoze.jpg"),
        nome: "Loja do zé 1",
        descricao: "Está loja contém variedades.",
        contatos: [
          {
            type: "tel",
            value: "9999-9999"
          },
          {
            type: "email",
            value: "alsjfalsjf@lsdfjla.com"
          }
        ]
      },
      {
        id: 2,
        imagem: require("../../assets/lojadoze.jpg"),
        nome: "Loja do zé 2",
        descricao: "Está loja contém variedades."
      },
      {
        id: 3,
        imagem: require("../../assets/lojadoze.jpg"),
        nome: "Loja do zé 3",
        descricao: "Está loja contém variedades."
      },
      {
        id: 4,
        imagem: require("../../assets/lojadoze.jpg"),
        nome: "Loja do zé 4",
        descricao: "Está loja contém variedades."
      },
      {
        id: 5,
        imagem: require("../../assets/lojadoze.jpg"),
        nome: "Loja do zé 5",
        descricao: "Está loja contém variedades."
      },
      {
        id: 6,
        imagem: require("../../assets/lojadoze.jpg"),
        nome: "Loja do zé 5",
        descricao: "Está loja contém variedades 6."
      }
    ];

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <List contatos={lojas} />
      </View>
    );
  }
}

export default HomeScreen;