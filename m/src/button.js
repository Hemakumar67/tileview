import React from 'react';

export default function Button(props) {
    return (
        <>
            <div class='btnSelect'>
                <button class="btn btn-outline-dark mt-auto btnBorder" onClick={() =>props.backClick()}>back</button>
            </div>
        </>
    )
}