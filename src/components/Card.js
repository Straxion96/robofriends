import React from 'react';
import 'tachyons';

const card = ({id, name, email}) => {
    return (
        <div className=' tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-7'>
            <img alt='img' src={`https://robohash.org/${id}?size=100x100`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default card; 