import { useEffect, useState } from 'react';
import { getComments } from '../../utils/api';
import { CommentCard } from './CommentCard';
import { Loader } from '../Loader';
import { AddComment } from './AddComment';

export const Comments = ({ review_id }) => {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true);
        getComments(review_id)
        .then(comments => {
            setIsLoading(false);
            setComments(comments)
        })
    }, [review_id]);

    return ( 
        <section className='commentsBox'>
            <h3>Comments</h3>
            { isLoading ? <Loader /> :
                ( comments.length > 0 ?
                    ( <ol className='comment'>
                        {comments.map((comment) => {
                            return <CommentCard key={comment.created_at} comment={comment} />
                    })}
                    </ol> 
                ) : (
                    <p>No comments yet...</p>
                ))
            }
        </section>
    );
}