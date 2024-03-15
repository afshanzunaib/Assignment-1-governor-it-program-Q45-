let current_users :string [] = ["admin","Eric","Azan","bisha","abiha"]
let new_users : string [] = ["admin","fisal","Noor","kinza","Hassib"]

let current_users_lower : string [] =current_users.map(user => user.toLocaleLowerCase())
let new_user : string [] = new_users.map(user => user.toLocaleLowerCase())


for (let new_user of new_users){
    if (current_users_lower.includes(new_user.toLocaleLowerCase())){
        console.log(`Sorry ${new_user}, that name is taken `)
    } else {
        console.log(`Yes ${new_user}, is still in avaliable list`)
    }
}
