const {Client} = require('pg');


const todoList = Array.from({length : 5}).map(
    (_,index) => `https://jsonplaceholder.typicode.com/todos/${++index}`
)

const fetchTodoList =async(urls) => {

    try {
        const responseList = await Promise.all(urls.map((url)=> fetch(url)));
        const dataList = await Promise.all(
            responseList.map((response)=>response.json())
        );

       return dataList;
        
    } catch (error) {
        console.log(error);
    }
}


let data = async () => {

    let data1 =await fetchTodoList(todoList);
    return data1 ;
    
} 

data().then((data)=> console.log(data));
