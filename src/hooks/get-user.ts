const getUser = async(user: string) => {
    return fetch(`https://api.github.com/users/${user}`)
    .then(response => response.json())
    .then(response => {
        return response;})
}

export default getUser