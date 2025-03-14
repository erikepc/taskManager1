import { Text, View, StyleSheet, ImageBackground, TouchableOpacity, FlatList } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

import moment from "moment-timezone";
import 'moment/locale/pt-br';

import todayImage from '../../assets/imgs/today.jpg'
import Task from "../../components/task";

export default function TaskList() {

    const tasks = [
        {
            id: Math.random(),
            desc: 'Elaborar o MER do TCC',
            estimateAt: new Date(),
            doneAt: new Date()                   
        },
        {
            id: Math.random(),
            desc: 'Ajustar o FIGMA',
            estimateAt: new Date(),
            doneAt: new Date()                   
        },
        {
            id: Math.random(),
            desc: 'Desenvolver o Backend do sistema',
            estimateAt: new Date(),
            doneAt: new Date()                   
        },
        {
            id: Math.random(),
            desc: 'Desenvolver o Backend do sistema',
            estimateAt: new Date(),
            doneAt: new Date()                   
        },
        {
            id: Math.random(),
            desc: 'Desenvolver o Backend do sistema',
            estimateAt: new Date(),
            doneAt: new Date()                   
        },
        {
            id: Math.random(),
            desc: 'Desenvolver o Backend do sistema',
            estimateAt: new Date(),
            doneAt: new Date()                   
        },
        {
            id: Math.random(),
            desc: 'Desenvolver o Backend do sistema',
            estimateAt: new Date(),
            doneAt: new Date()                   
        },
        {
            id: Math.random(),
            desc: 'Desenvolver o Backend do sistema',
            estimateAt: new Date(),
            doneAt: new Date()                   
        },
        {
            id: Math.random(),
            desc: 'Desenvolver o Backend do sistema',
            estimateAt: new Date(),
            doneAt: new Date()                   
        },
        {
            id: Math.random(),
            desc: 'Desenvolver o Backend do sistema',
            estimateAt: new Date(),
            doneAt: new Date()                   
        },
        {
            id: Math.random(),
            desc: 'Desenvolver o Backend do sistema',
            estimateAt: new Date(),
            doneAt: new Date()                   
        },
        {
            id: Math.random(),
            desc: 'Desenvolver o Backend do sistema',
            estimateAt: new Date(),
            doneAt: new Date()                   
        },
    ]
    
    const userTimeZone = moment.tz.guess(); //detecta fuso horario do dispositivo
    const today = moment().tz("America/Sao_Paulo").locale('pt-br').format('ddd, D [de] MMMM')
    //const today = moment().locale('pt-br').format('ddd, D [de] MMMM')

    return(
        <View style={styles.container}> 

            <ImageBackground source={todayImage} style={styles.background}>
                <View style={styles.iconBar}>
                    <TouchableOpacity onPress={() => console.warn('oi')}>
                        <Icon name="eye" size={60} color={'#fff'}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.titleBar}>
                    <Text style={styles.title}>Hoje</Text>
                    <Text style={styles.subtitle}>{today}</Text>
                </View>
            </ImageBackground>

            <View style={styles.taskList}>
                <FlatList
                    data={tasks}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({item}) => <Task {...item} />}
                />
            </View>

            <TouchableOpacity style={styles.addButton}activeOpacity={0.7}onPress={() => console.warn('+')}>
                <Icon name="plus" size={40} color={'#fff'}/>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
    },
    background: {
        flex: 3,

    },
    taskList: {
        flex: 7,
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    title: {
        color: 'white',
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 20
    },
    subtitle: {
        color: 'white',
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30
    },
    iconBar: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'flex-end',
        marginTop: 20
    },
    addButton: {
        position: 'absolute',
        right: 30,
        bottom: 30,
        width: 40,
        borderRadius: 25, 
        backgroundColor: '#B13B44',
        justifyContent: 'center',
        alignItems: 'center'
    }
})