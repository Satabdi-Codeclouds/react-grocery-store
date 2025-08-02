import { useEffect, useState } from "react";

export default function useFetch(url) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) return;
        const fetchData = async () => {

            setLoading(true)
            setError(null)

            try {
                const response = await fetch(url)
                if(!response.ok){
                    throw new Error('Something went wrong')
                }
                const result = await response.json();
                setData(result)

            } catch (err) {
                if (err.name !== 'AbortError') {
                    setError(err.message || 'Something went wrong');
                }
            } finally {
                setLoading(false)
            }
        }
        fetchData()
        
    },[url])

    return {data,loading,error}
}