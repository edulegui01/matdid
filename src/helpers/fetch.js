const baseURL = 'https://matdid-back-end.herokuapp.com/'

 const fetchMatdid = (endpoint, data, method = 'GET') => {
    const url = `${baseURL}${endpoint}`
    console.log(baseURL)

    if (method === 'GET'){
        return fetch(url)
    }else{
        return fetch(url,{
            method,
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
    }
}

export default fetchMatdid