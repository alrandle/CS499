const mongoose = require("mongoose")
const User = require("./schema/User")

mongoose.connect(
    "mongodb://127.0.0.1:27017/quiz",
    () => {
        console.log("[Console]: Connected to MongoDB")
    },
    e => console.error(e)
);

run()
async function run(){
    const user = new User({
        username: "cs49910",
        password: {
            hash: "a85e5c2124bedb412c187e89999294289bdcbef148321994c056d74c24b43060",
            salt: "dBlH!OM$4!YD"
        },
        name: {
            firstname: "Daniel",
            lastname: "Kasnick"
        },
        email: "dkasnick@sycamores.indstate.edu",
        role: "admin",
        lastlogin: new Date()
    })
    await user.save()
    console.log(user)

    const user2 = new User({
        username: "cs49907",
        password: "777",
        name: {
            firstname: "Justin",
            lastname: "Guieb"
        },
        email: "jguieb@sycamores.indstate.edu",
        role: "admin",
        lastlogin: new Date()
    })
    await user.save()
    console.log(user2)
}
