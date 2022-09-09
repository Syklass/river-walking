import React from "react";
import Layout from "../layouts/Layout";

function MainPage() {
    const Content = (  
        <div>
            Привет
        </div>
    );
    
    return <Layout content={Content} />;
}

export default MainPage;