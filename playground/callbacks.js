console.log('tatata1');

var getUser = (id, callback) => {
    var user = {
        id: id, 
        name: 'Vikram'
    };

    setTimeout(() => {
        callback(user);        
    }, 3000);
};

getUser(31, (user) => {
    console.log(user);
});

console.log('tatata2');