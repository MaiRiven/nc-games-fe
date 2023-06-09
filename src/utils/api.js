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

export const getComments = (reviewID) => {
    return api.get(`/reviews/${reviewID}/comments`)
    .then(({data}) => {
        return data.comments;
    });       
};
export const postComment = (reviewID, username, body) => {
    return api.post(`/reviews/${reviewID}/comments`, { username, body })
    .then(({ data }) => {
        return data.comments;
    });
};

export const getUsers = () => {
    return api.get('/users')
    .then(({ data }) => {
        return data.users;
    });
};

export const voteOnReview = (review_id, inc_votes) => {
    return api.patch(`/reviews/${review_id}`, { inc_votes })
    .then(({ data }) => {
        return data.review;
    });
};
