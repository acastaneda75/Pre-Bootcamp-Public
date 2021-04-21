/* 
    Recreate Object.entries method
    Given an object, return an array of arrays of the object's key value pairs, 
    where each key value pair is a 2 item array
    Do not include key value pairs from the given objects prototype (these are included 
    by default when looping over an object's keys)
*/

// Object.entries() demonstration

// console.log(Object.entries(myObj));
// returns:
// [ [ 'fName', 'Cody' ], [ 'lName', 'Thaller' ], [ 'age', 30 ] ]

function entries(obj){
    var results = [];
    for(const prop in obj){
        var newArr = [];
        newArr.push(prop);
        newArr.push(obj[prop]);
        results.push(newArr);
    }
    return results;
}

const myObj = {
    fName: "Cody",
    lName: "Thaller",
    age: 30
}
console.log(entries(myObj))

/* 
    Given a table name string and an object whose key value pairs represent column names and values for the columns
    return a SQL insert statement string
    Tip: string interpolation (using back ticks, the key to the left of num 1 key) make it easy to add variables 
    into a string or to add quotations without needing to escape them.
    Bonus: after solving it, write a 2nd solution focusing on functional programming using built in methods

    SQL INSERT STATEMENT
    INSERT INTO table_name (column_1_name, column_2_name, column_3_name) VALUES (column_1_value, column_2_value, column_3_value);

    NOTE: in the VALUES section, those values should be data-type appropriate. Datatypes that should be strings include:
        - char
        - varchar
        - text
        - binary
        - dates
        - timestamps

    Technically, there is no such thing as boolean in SQL. It's TinyINT, which is 0 or 1

    EXAMPLE: 
    const table = "users";
    const insertData = { first_name: "John", last_name: "Doe", age: 25 };

    insert(table, insertData) should return:
    "INSERT INTO users (first_name, last_name, age) VALUES ('John', 'Doe', 25);"

    NOTE THE LACK OF QUOTES IN THE COLUMN NAMES AND THE APPROPRIATE COMMA PLACEMENT
*/
function insert(tableName, columnValuePairs) {

}
