import { Alert, Platform } from 'react-native'

const server = Platform === 'ios' 
    ?   'https://localhost:3000' : 'https://10.0.2.2:3000'

function showError(err) {
    if(err.response && err.response.data) {
        Alert.alert('Ops! Ocorreu um problema!', `Mensagem: ${err.response.data}`)
    }else {
        Alert.alert('Ops! Ocorreu um problema!', `Mensagem: ${err}`)

    }
}

function showSucess(msg) {
    Alert.alert('Sucesso', msg)
}

export { server, showError, showSucess }