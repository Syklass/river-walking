import React from 'react';
import Header from '../sections/Header';

function Layout({ content }) {
    return (  
        <div className="relative flex flex-col h-screen">
			<Header />
			<div className="flex-grow pt-24 pb-4 padding-x lg:pt-4">{content}</div>
		</div>
    );
}

export default Layout;