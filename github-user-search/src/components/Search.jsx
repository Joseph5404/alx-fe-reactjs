import React from 'react'
import { useState } from 'react'
import fetchUserData from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [location, setLocation] = useState('');
    const [repository, setRepository] = useState('');
    const [page, setPage] = useState(1);
    const [totalCount, setTotalCount] = useState(0);
    

    const handleInputChange = (event) => {
       setUsername(event.target.value);
    }
    const handleLocation = (event) => {
        setLocation(event.target.value);
    }
    const handleRepository = (event) => {
        setRepository(event.target.value)
    }

    const handleSearch = async () => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setUserData([])
        setPage(1);
        

        try{
            const data = await fetchUserData({username, location, repository, page});
            setUserData(data.iteams);
            setTotalCount(data.totalCount);
        }catch(error){
            setError("Looks like we cant find the user.")
        }finally{
            setLoading(false);
        }
    }

        const loadMore = async () => {
        setLoading(true);
        try {
            const nextPage = page + 1;
            const data = await searchUsers({ ...formData, page: nextPage });
            setUsers((prevUsers) => [...prevUsers, ...data.items]);
            setPage(nextPage); // Update current page
            setTotalCount(data.total_count); // Update total count if needed
        } catch (err) {
            setError('An error occurred while loading more users.');
        } finally {
            setLoading(false);
        }
    };


  return (
    <div className='max-w-xl mx-auto p-4'>
        <h1 className='text-2xl font-bold mb-4 text-center'>Search GitHub User </h1>
        <form onSubmit={handleSearch} className='bg-pink-100 shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            
            <input type="text"
             placeholder='Enter GitHub username'
             value={username}
             onChange={handleInputChange} 
             className='shadow appearance-none border rounded w-full py-2 px-3 text=gray-700 leading-tight focus:outline-none focus:shadow-outline'/>

             <input type="text"
             placeholder='Enter location'
             value={location}
             onChange={handleLocation} 
             className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focud:shadow-outline'/>

             <input type="text"
             value={repository}
             onChange={handleRepository} 
             placeholder='Enter repository title '
             className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focud:shadow-outline'/>

             {/* <div className='flex item-center justify-between'>
                <button type='submit'
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline focus:shadow-outline'>
                    Search</button>
             </div> */}
        </form>

        {loading && <p className='text-center text-gray-500'>Loading..</p>}
        {error && <p className='text-center text-red-599'>{error}</p>}
        <div className='grid grid-cols-1 sm:grid-cols-2 lh:grid-cols-3 gap-4'>
            {userData.map(user =>(
                
            <div key ={user.id} className='bg-white shadow-md rounded p-4 flex flex-col items-center'>
                <h2 className='text-xl font-semibold'>{userData.name}</h2>
                <img src={user.avatar_url} alt={`${user.login}'s avatar`} className='w-24h-24 rounded-full mb-4' />
                {user.location && <p className='text-gray-600'>{user.location}</p>}
                <p className='text-gray-600'>Repos:{user.public_repos || 0}</p>
                <p>
                    <a 
                    href={user.html_url} 
                    target = "_blank" 
                    rel='noopener no referrer'
                    className='text-blue-500hover:underline mt-2'> View Profile</a>
                </p>
             </div>
            ))}
        </div>
        {userData.length > 0 && userData.length < totalCount && (
            <div className='flex jutify-center mt-4'>
                <button onClick={loadMore}
                 className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline focus:shadow-outline'>
                    Search</button>
            </div>
        )}
    </div>
  )
}

export default Search