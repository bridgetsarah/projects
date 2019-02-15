
/*User Registration*/
var user = new schema({
    userId: Number,
    userName: String,
    userEmail: String,
    firstName: String,
    passWord: String,
} )


/*Journal*/

var entrie = new schema({
    title: any,
    entry: String
    date: date,
    time: time,

} )