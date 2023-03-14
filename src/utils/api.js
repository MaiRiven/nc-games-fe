import axios from 'axios';

const api = axios.create({
    baseURL: 'https://mairi-games-api.onrender.com/api'
});

export const getReviews = () => {
    return api.get(`/reviews`)
    .then(({data}) => {
        return data.reviews
    });
};

export const getReview = (reviewID) => {
    return api.get(`/reviews/${reviewID}`)
    .then(({data}) => {
        return data.review
    });
};