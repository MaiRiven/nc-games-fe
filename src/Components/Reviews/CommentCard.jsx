export const CommentCard = ({ comment }) => {
    return (
        <li className='commentCard'>
            <p>{comment.author}</p>
            <p className="commentBody">{comment.body}</p>
                <section className='commentInfo'>
                    <p>{new Date(comment.create_at).toDateString()}</p>
                    <p>Votes: {comment.votes}</p>
                </section>
        </li>
    );
};