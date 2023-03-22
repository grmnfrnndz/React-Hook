import React, {useLayoutEffect, useRef, useState} from 'react';
import PropTypes from "prop-types";

export const Quote = ({author, quote}) => {

    const pRef = useRef();
    const [boxSizes, setBoxSizes,] = useState({
        width: 0,
        height: 0,
    });

    useLayoutEffect(() => {
        const {width, height} = pRef.current.getBoundingClientRect();
        setBoxSizes({width, height});
    }, [quote]);

    return (
        <>
            <blockquote
                style={{display: 'flex'}}
                className="blockquote text-end">
                <p ref={pRef}
                    className="mb-1">
                    {quote}
                </p>
                <footer className="blockquote-footer">
                    {author}
                </footer>
            </blockquote>

            <code>{
                JSON.stringify(boxSizes)
            }</code>

        </>
    );
}


Quote.propTypes = {
    author: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired
}
