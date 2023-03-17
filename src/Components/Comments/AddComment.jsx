import { useState, useContext } from 'react';
import { postComment } from '../../utils/api';
import { UserContext } from '../../contexts/Users';

export const AddComment = ({ setComments, review_id }) => {
    const [newComment, setNewComment] = useState('');
    const [placeHolder, setPlaceHolder] = useState('Type here...');
    const { user } = useContext(UserContext);
    const [submitButton, setSubmitButton] = useState(true);
    const commentToPost = { body: newComment, username: user};

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(commentToPost.body);

        if (commentToPost.username === undefined || commentToPost.username.username === '') {
            setSubmitButton(false);
            setNewComment('');
            setPlaceHolder('Users must sign in to post a comment :)');
        } else {
            postComment(review_id, commentToPost).then(({ comment }) => {
                setComments((currentComments) => {
                    setSubmitButton(false);
                    return [comment, ...currentComments];
                });
            });
            setNewComment('');
            setPlaceHolder("Posted!");
        }
    };

    return (
            <form className ='commentcard' onSubmit={handleSubmit}>
                <label htmlFor='newComment'>Add a comment</label>
                <textarea
                    placeholder={placeHolder}
                    disabled={!submitButton}
                    className='commentbox'
                    id='newComment'
                    value={newComment}
                    onChange={(event) => setNewComment(event.target.value)}
                />
                <button type='submit' disabled={!submitButton} className='commentSubmitButton'>Post!</button>
            </form>
    );
};