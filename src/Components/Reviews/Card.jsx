import { useNavigate } from 'react-router-dom'

export const Card = ({review}) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/reviews/${review.review_id}`)
    }

    return <li className='reviewCard' onClick={handleClick}>
        <h3>{review.title}</h3>
        <img className='reviewImage' src={review.review_img_url} alt={review.title}/>
        <p>Designer: {review.designer}</p>
        <p>Category: {review.category}</p>
        <p>Author: {review.owner}</p>
        <p>Votes: {review.votes} Comments: {review.comment_count}</p>
        </li>
}