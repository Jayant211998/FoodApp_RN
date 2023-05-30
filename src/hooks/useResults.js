import { useEffect, useState } from "react";
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    const searchApi = async(searchTerm) => {
        try{
            const response = await yelp.get('/search',{
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san joes'
                }
            });
            setResults(response.data.businesses);
        }
        catch(err){
            console.log(err);
            setErrorMessage('Something Went Wrong')
        }
    }
    useEffect(()=>{
        searchApi('pasta');
    }, []);
    return [searchApi, results, errorMessage];
};