import React, {useEffect, useRef, useState} from 'react';

export const UseFetch = (url) => {

    const [state, setState, ] = useState({
        data: null,
        isLoading: true,
        hasError: false
    });

    const getFetch = async () => {
        setState({
            ...state,
            isLoading: true
        })

        const response = await fetch(url);
        const data = await response.json();

        setState({
            ...state,
            data: data,
            isLoading: false,
            hasError: null
        })


    }

    useEffect(
        () => {
            getFetch();
        },
        [url]
    );

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }
}