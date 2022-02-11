const baseURL = 'http://localhost:8000'

 const fetchMatdid = (endpoint, data, method = 'GET') => {
    const url = `${baseURL}${endpoint}`
    console.log(baseURL)

    if (method === 'GET'){
        return fetch(url)
    }else if (method === 'POST'){
        return fetch(url,{
            method,
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
    }else if (method === 'DELETE'){
        return fetch(url,{
            method,
            headers:{
                'Content-type':'application/json'
            }

        })
    }
}

export default fetchMatdid