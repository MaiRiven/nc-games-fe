export const CommentCard = ({ comment }) => {
    const date = new Date(comment.created_at);
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear().toString().slice(-2)} ${date.getHours()}:${date.getMinutes()}`;

    return (
        <li className='commentCard'>
            <p className="commentauthor">{comment.author}</p>
            <p className="commentBody">{comment.body}</p>
                <section className='commentInfo'>
                    <p>{formattedDate}</p>
                    <p>Votes: {comment.votes}</p>
                </section>
        </li>
    );
};