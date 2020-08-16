import {StyleSheet} from "react-native"

const estilo_padrao = StyleSheet.create({
    linha:{
        flexDirection: "row",
        marginLeft: 15,
        marginRight:15,
    },
    alinhamento_esquerda:{
        textAlign: "left",
        flex: 1
    },
    alinhamento_direta:{
        textAlign: "right"
    },
    fonte_titulo:{
        color: "#585858",
        fontFamily: "Montserrat-SemiBold",
        fontSize: 15,
        marginBottom:17,
        marginTop:-5,
        
    },
    listagem:{
        borderBottomColor: "#f4f4f4",
        borderBottomWidth: 2,
        paddingTop: 15,
        paddingBottom: 15,
    },
    objetivo:{
        marginLeft: 15,
        marginRight:15,
        color: "#585858",
        fontSize: 16
    },
    nome_valor:{
        fontWeight: "bold",
        fontSize: 18,
        fontFamily: "Lato-Regular",
    },
    nome_valorComCarencia:{
        fontWeight: "bold",
        fontSize: 18,
        fontFamily: "Lato-Regular",
        color: "#585858"
    },
    bkgSemCarencia:{
        backgroundColor: "white",
    },

    bkgComCarencia:{
        backgroundColor: "#fcfcfc",
    }

})


export default estilo_padrao;