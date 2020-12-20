import React from 'react';
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
    return <div>
        <h2>i like {name}</h2>
        <h4>{rating}/5</h4>
        <img src={picture} alt={name} />
    </div>
}

Food.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
};

const foodILike = [
    {
        id : 1,
        name: "kimchi",
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.maangchi.com%2Fwp-content%2Fuploads%2F2019%2F11%2Fvegankimchi-insta.jpg&imgrefurl=https%3A%2F%2Fwww.maangchi.com%2Frecipe%2Fchaesik-kimchi&tbnid=bQS-gPUYjeWqeM&vet=12ahUKEwiMvNjesdvtAhUyNaYKHSPzBb0QMygAegUIARD3AQ..i&docid=1ZA_KLjvw9mQjM&w=2500&h=2500&q=kimchi&ved=2ahUKEwiMvNjesdvtAhUyNaYKHSPzBb0QMygAegUIARD3AQ"
        ,rating:5
    },
    {
        id:2,
        name: "kimbap",
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fjajabakes.com%2Fwp-content%2Fuploads%2F2018%2F08%2Fcut-kimbab-recipe-1.jpg&imgrefurl=https%3A%2F%2Fjajabakes.com%2Fkimbap%2F&tbnid=T2GxFMd1BMI8wM&vet=12ahUKEwj3_OT1sdvtAhV0JqYKHcoQCswQMygFegUIARDIAQ..i&docid=9QJzwDezUaHh0M&w=860&h=572&q=kimbap&ved=2ahUKEwj3_OT1sdvtAhV0JqYKHcoQCswQMygFegUIARDIAQ"
        ,rating:4.5
    }
]

function renderFood(dish) {
    return <Food name={dish.name} picture={dish.picture}/>
}

function App() {
  return (
      <div>
          <h1>Hello!!!</h1>
            {foodILike.map(dish => (
            <Food key = { dish.id }
                    name ={dish.name}
                    picture = { dish.image } 
                    rating = { dish.rating } />))}
      </div>
  );
}

export default App;
