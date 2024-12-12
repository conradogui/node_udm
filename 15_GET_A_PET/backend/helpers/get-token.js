const getToken = (req) => { // aqui retorna um array separando o Bearer do proprio token
    const authHeader = req.headers.authorization
    const token = authHeader.split(" ")[1]

    return token
}

export default getToken