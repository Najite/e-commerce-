import React from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

// importing stylesheet
import "./menu-item.style.scss";

export const withRouter = (Component) => {
    const ComponentWithRouterProps = (props) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();

        return (
            <Component
            {...props}
            location={location} 
            params ={params}
            navigate={navigate}
            />
        );
    }

    return ComponentWithRouterProps
}

// declaring menu content
const MenuItem = ({ title, imageUrl, size, linkUrl, location, navigate}) =>{
        // let location = useLocation()
        // let navigate = useNavigate();
    return (
    <div className= {`${size} menu-item`} onClick={() => (navigate(`${linkUrl}`))}>
    
    <div className= 'background-image'    
    style={{
        backgroundImage: `url(${imageUrl})`
        }} />

    <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">
            Shop
            </span>
        </div>
    </div>
    )
};

export default withRouter(MenuItem);