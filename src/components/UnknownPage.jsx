import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => (
    <div className='jumbo-404'>
        <div className='jumbo-404-names'>
            <h1>
                Error 404</h1>
            <h4>Page not found</h4>
            <h3>You can go to <Link to='/'>Home Page</Link> if you are lost. 🤷 </h3>
        </div>
    </div>
);

export default Page404;