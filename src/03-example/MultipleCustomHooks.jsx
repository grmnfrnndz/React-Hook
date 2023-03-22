import React from 'react';
import {UseFetch, useCounter} from "../hooks";
import {LoadingQuote, Quote} from "./";

export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1);

    const url = `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`;
    const {data, isLoading, hasError} = UseFetch(url);

    // if (isLoading) {
    //     return (
    //         <>
    //             <h1>Loading...</h1>
    //         </>
    //     );
    // }

    const {author, quote} = !!data && data[0];

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr/>

            {/*{*/}
            {/*    (isLoading)*/}
            {/*        ? (*/}
            {/*            <div className="alert alert-info text-center">*/}
            {/*                Loading...*/}
            {/*            </div>*/}
            {/*        )*/}
            {/*        :*/}
            {/*        (*/}
            {/*            <blockquote className="blockquote text-end">*/}
            {/*                <p className="mb-1">*/}
            {/*                    {quote}*/}
            {/*                </p>*/}
            {/*                <footer className="blockquote-footer">*/}
            {/*                    {author}*/}
            {/*                </footer>*/}
            {/*            </blockquote>*/}
            {/*        )*/}
            {/*}*/}

            {
                (isLoading) ? <LoadingQuote/> : <Quote author={author} quote={quote}/>
            }

            <button className="btn btn-primary" disabled={isLoading} onClick={() => increment()}>
                Next Quote
            </button>
        </>
    );
}