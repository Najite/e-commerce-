import React from "react";

// all about redux and routing
import { selectCollections } from "../../redux/shop/shop.selector";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { Routes, Route } from 'react-router-dom';



import CollectionOverview from '../../components/collection-overview/collection-overview.component'

// page
import CollectionPage from "../collection/collection.component";


const ShopPage = () => {
    
    return (
            <div className="shop-page">
                                
                <Routes>
                <Route path='/' element={<CollectionOverview />} /> 
               <Route path='/:id' element={<CollectionPage />} />
               </Routes>
               
               
            </div>
        )
}

const mapDispatchToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapDispatchToProps)(ShopPage);