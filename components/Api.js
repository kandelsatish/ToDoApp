import { openDatabase } from 'react-native-sqlite-storage'
var db = openDatabase({ name: "todo.db", createFromLocation: 1 });
export const view_all = (setlistoftodo) => {
    db.transaction((tx) => {
        tx.executeSql('SELECT * FROM TodoList',
            [],
            (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));
                setlistoftodo(temp);
            });
    });
}


const update_todo = (todoname,todoid) => {
        db.transaction((tx) => {
            tx.executeSql(
                'UPDATE  TodoList SET todo_name=? WHERE id=?',
                [todoname,todoid],
                (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        Alert.alert(
                            'Success',
                            'Todo Updated successfully',
                            [
                                {
                                    text: 'Ok',
                                    onPress: ()=>navigation.goBack()
                                },
                            ],
                            { cancelable: false },
                        );
                    } else {
                        alert('Sorry something went wrong');
                    }
                },
            );
        });
    };


    const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@storage_Key', jsonValue)
        } catch (e) {
            console.log(e);
        }
      }