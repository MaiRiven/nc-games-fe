export const Card = ({review}) => {
    return <li className='reviewCard'>
        <h3>{review.title}</h3>
        <img className='gameImage' src={review.review_img_url} alt={review.title}/>
        <p>Designer: {review.designer}</p>
        <p>Category: {review.category}</p>
        <p>Author: {review.owner}</p>
        <p>Votes: {review.votes} Comments: {review.comment_count}</p>
        </li>
}