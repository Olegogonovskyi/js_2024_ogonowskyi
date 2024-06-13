const baseUrl = 'https://jsonplaceholder.typicode.com/'

const urls = {
    usersUrls: {
        users: '/users',
        userById: (id: string | undefined) => urls.usersUrls.users + '/' + id
    },
    postUrls: {
        posts: '/posts',
        postById: (id: string) => urls.postUrls.posts + '/' + id
    }
}

export {baseUrl, urls}