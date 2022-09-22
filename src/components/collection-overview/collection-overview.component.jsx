import React from "react";

// all about redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PreviewCollection from "../preview-collection/preview-collection.component";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";

import './collection-overview.style.scss';

const CollectionOverview = ({ collections }) => (
    <div className="collections-overview">
        {
                    collections.map(({ id, ...otherCollectionPreview}) => (
                        <PreviewCollection key={id} {...otherCollectionPreview} />
                    ))
                }

    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);