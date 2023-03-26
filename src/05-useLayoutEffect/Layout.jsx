import React from 'react';
import {useFetch, useCounter} from "../hooks";
import {LoadingQuote, Quote} from "../03-example";

export const Layout = () => {

    const {counter, increment} = useCounter(1);

    const url = `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`;
    const {data, isLoading, hasError} = useFetch(url);

    const {author, quote} = !!data && data[0];

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr/>

            {
                (isLoading) ? <LoadingQuote/> : <Quote author={author} quote={quote}/>
            }

            <button className="btn btn-primary" disabled={isLoading} onClick={() => increment()}>
                Next Quote
            </button>
        </>
    );
}