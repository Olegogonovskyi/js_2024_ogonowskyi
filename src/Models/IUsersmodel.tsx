interface IUsersmodel {
    id: number,
    firstName: string,
    lastName: string,
    age: string,
    gender: string,
    image: string,
    address: {
        city: string
    }
}

export default IUsersmodel