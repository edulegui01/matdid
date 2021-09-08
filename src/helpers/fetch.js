const baseURL = process.env.REACT_APP_MATDID_URL

 const fetchMatdid = (endpoint, data, method = 'GET') => {
    const url = `${baseURL}${endpoint}`

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