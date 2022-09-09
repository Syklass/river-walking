import React from 'react';

function Layout({ content }) {
    return (  
        <div>
            <div className="flex flex-col h-screen">
                {/* <ModalWindow isActive ={false}/>
                <Header /> */}
                <div className="flex-grow pt-t lg:pt-18 pb-4">{content}</div>
                {/* <div className="lg:padding-x mt-12">
                    
                </div>
                <div className="bg-gray-EC mt-28 lg:mt-8">
                    <Contacts/>
                </div>
                <Footer /> */}
		</div>
        </div>
    );
}

export default Layout;