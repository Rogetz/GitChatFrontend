// this file holds the most common of functions for the fetch api I'll be using, I'll however ;aunch it later.

// This is a page for having the most common repetitive utilities like the header and the variables.
function header(header){
    let initialHeader = {
        header : {
            "Content-Type": "application/json"
        }
    }
    // if there's an object in the header then simply add it to the object using the spread operator.
    if(header){
        // note that the first part being spread must be already a json object with the same name as the one being passed as a parameter for it to work since what am passing also assumes the name header.
        return {...initialHeader,header}
    }
    // else return the initial object.
    else{
        return initialHeader
    }
}

let result = header({"Content-Type": "application/xml"})
console.log(result)

// This function should help design the bodies more efficiently each time.
// It should be able to design the query format such that I only pass the api name alongside it's variables as an object
// do note that for now it can only work with the body, method and mode, maybe later on I might modify it for more.
function body({body,method,mode}){
    // initial Object should have the query and the variables part alongside each other.
    // allow for any object to be added.
    // This body method should also accomodate for the method and the mode parameters.
    let finalQuery = {
        body : JSON.stringify({
            //query : `{login(userName:${userName},password:${password})}`,
            query : `query loginQuery($userName:String,$password:String){login(userName:$userName,password:$password){err,object}}`,
            // I can allow for passing of something like
            /*login: {
                userName : "Toshbe",
                password: "chupaMozi$90"
            } then this function of mine should draft that.*/
            variables : {
                userName : userName,
                password : password
            }
        }),
        method: "POST",
        mode: "cors"
    }
    // each of these if's should be setting the initialQuery to point to the result of the dot operator
    if(body){
        if(body.query){
            finalQuery = {...finalQuery,body : {query : body.query}}
            // also change the variables section
            if(body.variables){
                finalQuery = {...finalQuery,body : {variables : body.variables}}
            }
        }
        else{
            // shouldn't return anything since more than one instance can be satisfied
            //finalQuery = {...finalQuery,body}
            let workingArray = Object.entries(body)
            // The query name  will always be the topmost only array then the contents follow in the next nested array.
            let queryName = workingArray[0]
            if(workingArray[0].length > 0){
                //meaning there are variables to be passed
                // note that each array inside is a key value pair.
                //let keys 
                // use the manual style for interpolating the values into the initial string as separate parts.
                // use the typeOf to find the type of array.
                let firstPart = workingArray[0].reduce(function(accumulator,currentValue){
                    // you can test for the type of the currentValue[1] index, that will be replaced with the type that the value has been allocated.
                    `${accumulator} ${currentValue[0]}:String`
                },`query ${queryName}Query(`)
                let secondPart = workingArray[0].reduce(function(accumulator,currentValue){
                    // you can test for the type of the currentValue[1] index, that will be replaced with the type that the value has been allocated.
                    `${accumulator} ${currentValue[0]}:$${currentValue[0]}`
                },`){ ${queryName}(`)
                let lastPart = `){err,object}`
                finalQuery = {...finalQuery,query : `${firstPart}${secondPart}${lastPart}`}
            }
            else{
                // no variables to be passed.
                finalQuery = {...finalQuery,query : `query ${queryName}Query{${queryName}{err,object}}`}
            }
        }
    }
    if(method){
        // shouldn't return anything since more than one instance can be satisfied
    }
    if(mode){
        // shouldn't return anything since more than one instance can be satisfied
    }
    return finalQuery
}

// for the body actually I just want it to be calling the body just once and then my method becomes intelligent to note that the body has a query with variables depending on whether the object was called with parameters.
/*body({body : {
    // remember that this login should be the name of the api am calling so all I do is just pass it parameters which it shoulb be intelligent enough to know that they are variables.
    login : {
        userName: "Ronny",
        password: "tumbizi$908"
    }
}})*/

function testingOne({body,mode}){
    console.log(`${body}  ${mode}`)
}

testingOne({body: "cheza",mode: "moto"})
function testingTwo(user){
    // I simply use the Object.keys to access the literal values of the keys.
    // note that the object key pairs become nested inside arrays that follow each other in order
    console.log(Object.entries(user)[0][0])
}

let testObject = {
    userName : "tony",
    password : "motoPasi$78u"
}

// note that the Object.entries method returns an array whereby for each nested array the first index is the key and thats it
console.log(Object.entries(testObject))

testingTwo({userName : "Tommy"})