import {Client} from 'pg';
import dotenv from 'dotenv';
dotenv.config({ quiet: true });
const { PORT, DB_USER, DB_PASS } = process.env;






async function connectAndQuery() {
  const client = new Client({
    user: DB_USER,
    host: 'localhost',
    database: 'todos',
    password: DB_PASS,
    port: PORT,
  });


try {
    await client.connect();
    console.log('Connected to PostgreSQL');


  } catch (err) {
    console.error('Database connection or query error', err);
  } finally {
    await client.end();
    console.log('Disconnected from PostgreSQL');
  }

}

connectAndQuery();

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

let arr = await data();

console.log(arr);

