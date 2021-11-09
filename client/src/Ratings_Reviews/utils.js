/* eslint-disable quote-props */
/* eslint-disable object-curly-newline */
/* eslint-disable no-param-reassign */
// Will consolidate to one utils file eventually, dont @ me
import axios from 'axios';

const getRating = (id) => axios.get(`/reviews/meta?id=${id}`);

const getReviews = (id, page, sortBy) => axios.get(`/reviews?page=${page}&count=100&sort=${sortBy}&id=${id}`);

const voteHelpful = (id) => axios.put(`/reviews/${id}/helpful`);

const reportPost = (id) => axios.put(`/reviews/${id}/report`);

const submitReview = (form) => axios.post('/reviews/', form);

export default { getRating, getReviews, voteHelpful, reportPost, submitReview };
