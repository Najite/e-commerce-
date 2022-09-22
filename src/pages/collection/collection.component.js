import React from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';

// all about redux
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';
import { withRouter } from '../../components/menu-item/menu-item.component';



import './category.style.scss';

const CollectionPage = ({collection}) => {
    const {title, items} = collection
    console.log(collection, 'collection')
    return(
    <div className='collection-page'>
        <h3 className='title' > {title} </h3>

        <div className='items'>
            {
                items.map(item => <CollectionItem key={item.id} item={item} />)
            }
        </div>

    </div>
    );
};

const mapStateToProps =  (state, {params}) =>{
    return({
    collection: selectCollection(params.id)(state)
    })
}

export default withRouter(connect(mapStateToProps)(CollectionPage));
