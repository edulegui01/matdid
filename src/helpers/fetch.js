const baseURL = 'http://localhost:8000'


const originalRequest = async (url,config) =>{
    url = `${baseURL}${url}`
    
    //console.log(url)
    const response = await fetch(url,config)


    const data = await response.json()


    return {response,data}

}






const refreshToken = async (refreshTokenItem) => {
    //console.log(refreshTokenItem)
    let url = `${baseURL}/api/token/refresh/`
    const response = await fetch(url,{
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({'refresh':refreshTokenItem})
    })

    const data = await response.json()
    //console.log(data)
    localStorage.setItem('access_token',data.access)

    return data


}






const customFetcher = async (url,config = {}) =>{
    console.log(config)
    console.log(url)
    let refreshTokenItem = localStorage.getItem('refresh_token')
    let accessTokenItem = localStorage.getItem('access_token')


    config['headers'] = {
        ...config['headers'],
        Authorization: `Bearer ${accessTokenItem}`
    }


    let {response, data} = await originalRequest(url,config)


    if (response.statusText === 'Unauthorized'){
        accessTokenItem =  await refreshToken(refreshTokenItem)
        //console.log(accessTokenItem)

        config['headers'] = {
            ...config['headers'],
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }


        let newResponse = await originalRequest(url, config)
        response = newResponse.response
        data = newResponse.data

    }

    return {response,data}
}


export default customFetcher;