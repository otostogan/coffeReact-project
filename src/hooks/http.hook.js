import {useState, useCallback} from 'react';

export const useHttp = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    let controller = new AbortController();
    
    const request = useCallback( async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {

        try{
            const response = await fetch(url, {
                method,
                body,
                headers
            })

            if(!response.ok){
                throw new Error(`Could not fetch ${url}, status ${response.status}`);
            }

            const data = await response.json();

            setLoading(false);

            return data;

        }catch(error){
            setLoading(false);
            setError(error.message);
            throw error;
        }

    }, []) 

    const clearError = useCallback(() => {
        setError(null);
    },[]);

    return {loading,error,request,clearError}

}