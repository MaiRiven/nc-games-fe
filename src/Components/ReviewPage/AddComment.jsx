import { addComment } from '../../utils/api';

export const submitComment = ({ setComments, review_id, setMessage, setPage }) => {
    const [newComment, setNewComment] = useState('');

    const postCommentHandle = (event) => {
        event.preventDefault()
        if (newComment.length > 0) {
            setMessage({ msg: 'Loading', class: 'loading'})
            setPage(1)
            postCommentHandle(review_id, user.username, newComment)
            .then(comment => {
                setComments(currentComments => {
                    return [comment, ...currentComments];
                })
                setNewComment('')
                setMessage({ msg: 'Posted!', class: 'success'})
            })
            .catch(() => {
                setMessage({ msg: 'Error, try posting again later', class: 'error'})
            })
        } else {
                setMessage({ msg: 'Enter a comment', class: 'error'})   
        }
    }
    return (
            <form className ='commentcard' onSubmit={postCommentHandle}>
                <textarea
                    placeholder='Type here...'
                    className='commentbox'
                    id='newComment'
                    value={newComment}
                    onChange={e => setNewComment(e.target.value)}
                />
            </form>
    );
};