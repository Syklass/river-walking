import React from 'react';
import Header from '../sections/Header';
import Footer from '../sections/Footer';

function Layout({ content }) {
    return (  
        <div className="relative flex flex-col h-screen">
			<Header />
			<div className="flex-grow pt-24 pb-4 padding-x lg:pt-4">{content}</div>
            <Footer/>
		</div>
    );
}

export default Layout;