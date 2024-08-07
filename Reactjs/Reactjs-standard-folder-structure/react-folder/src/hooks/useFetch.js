 import { useState, useEffect } from 'react'
import apiClient from '../api/apiClient';

 const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        const fetchData = async ()=> {
            try {
                const response = await apiClient.get(url);
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    },[url]);
    
    return { data, error, loading };
 };

 export default useFetch;