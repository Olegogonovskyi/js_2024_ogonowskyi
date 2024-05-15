const baseJsonUrl = 'https://jsonplaceholder.typicode.com/'

const urlsJson = {
    users: {
        allUsers: '/users',
        usersById: (id:string): string => `${urlsJson.users.allUsers}/${id}`
    }
}
export {
    baseJsonUrl, urlsJson
}