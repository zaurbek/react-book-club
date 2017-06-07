import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => (
    <div className='jumbo-404'>
        <div className='jumbo-404-names'>
            <h1><i className="fa fa-exclamation" aria-hidden="true"/>
                Error 404
                <i className="fa fa-exclamation" aria-hidden="true"/></h1>
            <h4>Page not found</h4>
            <h3>You can go to <Link to='/'>Home Page</Link></h3> if you are lost. 🤷
        </div>
    </div>
);

export default Page404;