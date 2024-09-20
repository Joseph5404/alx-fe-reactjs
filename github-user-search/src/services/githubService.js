import axios, { Axios } from "axios"

const fetchUserData = async({username, location , minRepos}) => {
    let query ='';
    if (username ){
        query += `${username} in:login`
    }

    if(location){
        query += `location: ${location}`
    }
    if (repository) {
        query += `respos:>= ${minRepos}`
    }
    if (!query){
        throw new ErrorEvent('At least one search criterion must be provided.')
    }
    try{
        // const url = `https://api.github.com/users/${username}`;
        const url = "https://api.github.com/search/users?q"
        const response = await axios.get(`${SEARCH_API_URL}?q=${encodeURIComponent(query)}`);
        
        // const response = await axios.get(url);
        

        return response.data;
    }catch(error){
        console.error ("Error fetching user data:", error);
    }throw error;

}

export default fetchUserData;