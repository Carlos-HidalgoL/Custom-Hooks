import { useEffect, useState } from "react"


const localCache = {};



export const useFetch = (url) => {
    
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
    });


    useEffect( () => {
        getFech();

    }, [url] );


    const setLoadingState = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
        });
    }


    const getFech = async() => {

        if (localCache[url]){
            console.log('Usando Caché');
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
            });

            return;
        }

        setLoadingState();

        const response = await fetch(url);
        
        //Sleep
        await new Promise( resolve => setTimeout(resolve, 1500) );

        if ( !response.ok) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
            });

            return;
        }
        
        const data = await response.json();
        
        setState({
            data: data,
            isLoading: false,
            hasError: false,
        });


        //Manejo del cache
        localCache[url] = data;
        
    };



    
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }
}

