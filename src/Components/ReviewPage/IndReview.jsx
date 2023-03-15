import { useEffect, useState } from 'react';
import { getReview } from '../../utils/api'
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader';
import { Comments } from './Comments';
import { VoteButtons } from './VoteButtons';
import '../../Style/App.css';

export const IndReview = () => {
    const { review_id } = useParams();
    const [review, setReview] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        getReview(review_id)
        .then(review => {
            setReview(review)
            setIsLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setIsLoading(false);
        });
    }, [review_id] )


    return isLoading ? (
        <section className='indReview'>
            <Loader />
        </section>
    ) : (
    <>   
        <section className='indReview'>
            <h2>{review.title}</h2>
            <section className="designerInfo">
                <p className='pinfo'>Designed by {review.designer}</p>
                <p className='pinfo'>Category: {review.category}</p>
            </section>
            <img
                className='indReviewImg'
                src={review.review_img_url}
                alt="game"
            />
            <section className='reviewInfo'>
                <p>Written by {review.owner}</p>
                <p>Votes: {review.votes}</p>
                <VoteButtons
                    review={review}
                    review_id={review_id} 
                    setReview={setReview}
                />
            </section>
            <p className='indReviewBody'>{review.review_body}</p>
        </section>
        
        <section className='commentSection'>
            <Comments review_id={review_id}/>
        </section>
    </>
    );
};