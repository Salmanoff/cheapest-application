import React, { useEffect, useState } from 'react'
import { instance } from '../../axios';
import PageFallback from '../../components/PageFallback/PageFallback';
import './Restaurant.css';

const Restaurant = (props) => {
    const [restaurant, setRestaurant] = useState(null);
    useEffect(() => {
        const id = props.match.params.id;
        console.log(props)
        instance.get('/restaurants/' + id)
        .then(response => {
            console.log(response.data.restaurant)
            if(response.data.restaurant){
                document.title = response.data.restaurant.name
                setRestaurant(response.data.restaurant);
            }else{
                props.history.push('/');
            }
        })
        .catch(err => {
         props.history.push('/');
        })
    },[])

    let content = <PageFallback />;
    if(restaurant){
        content = <div className="RestaurantPage"
        style={{background:`linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)), url("${restaurant.logo}")`, backgroundSize:'cover',backgroundPosition:'center', backgroundRepeat:'no-repeat'}}
        >
          <div className="RestaurantPage--Container">
          <h1>{restaurant.name}</h1>
            <p>{restaurant.description}</p>
          </div>
        </div>
    }
    return content;
}

export default Restaurant
