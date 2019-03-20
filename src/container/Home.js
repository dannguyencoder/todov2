import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import TaskItem from "../components/TaskItem";

class Home extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    state = {
        tasks: [
            {taskId: 1, taskName: 'task 1', isDone: false},
            {taskId: 2, taskName: 'task 2', isDone: false},
            {taskId: 3, taskName: 'task 3', isDone: false},
            {taskId: 4, taskName: 'task 4', isDone: true},
            {taskId: 5, taskName: 'task 5', isDone: true},
            {taskId: 6, taskName: 'task 6', isDone: true},
        ]
    };

    reverseState = (taskItem) => {
        const tasks = [...this.state.tasks];
        const itemIndex = tasks.findIndex(el => el.taskId === taskItem.taskId);
        tasks[itemIndex] = {...tasks[itemIndex], isDone: !tasks[itemIndex].isDone};
        // this.setState({tasks: [...this.state.tasks.findIndex(el => el.taskId)]})
        this.setState({tasks});
    };

    goToDone = () => {
        const doneTasks = this.state.tasks.filter(el => {
            return el.isDone === true;
        });
        this.props.navigation.navigate('Done', {doneTasks, changeIsDone: (item) => {console.log(item)}});
    };

    goToUndone = () => {
        const undoneTasks = this.state.tasks.filter(el => {
            return el.isDone !== true;
        });
        this.props.navigation.navigate('Undone', {undoneTasks, changeIsDone: this.reverseState});
    };


    addTask = () => {
        this.setState({tasks: [...this.state.tasks, {taskName: 'task i', isDone: false}]})
    };

    render() {
        return (
            <View style={styles.homeStyle}>

                <FlatList
                    data={this.state.tasks}
                    renderItem={({item}) => <TaskItem taskItem={item}/>}/>

                <TouchableOpacity onPress={() => this.goToDone()}>
                    <Text>Go to Done Screen</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.goToUndone()}>
                    <Text>Go to Undone Screen</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.addTask()}>
                    <Text>Add a Task</Text>
                </TouchableOpacity>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    homeStyle: {
        flex: 1,
        justifyContent: "center"
    }
});

export default Home;