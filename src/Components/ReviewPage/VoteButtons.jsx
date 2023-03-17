import { useState, useRef } from 'react';
import { voteOnReview } from '../../utils/api';
import upvote from '../../Assetts/upvote.png';
import downvote from '../../Assetts/downvote.png';
import greenvote from '../../Assetts/greenvote.png';
import redvote from '../../Assetts/redvote.png';
import greyedup from '../../Assetts/greyedup.png';
import greyeddown from '../../Assetts/greyeddown.png';

export const VoteButtons = ({review, review_id}) => {

    const [buttonClicked, setButtonClicked] = useState({up:false, down:false});
    const [upButtonImageSrc, setUpButtonImageSrc] = useState(upvote);
    const [downButtonImageSrc, setDownButtonImageSrc] = useState(downvote);
    const [voteCount, setVoteCount] = useState(review.votes);
    const [errorMessage, setErrorMessage] = useState(null);

    const voteHandler = (inc) => {
        const newVotes = review.votes + inc;
        setVoteCount(newVotes);

        setButtonClicked({ up: inc === 1, down: inc === -1});

        setUpButtonImageSrc(inc === 1 ? greenvote : greyedup);
        setDownButtonImageSrc(inc === -1 ? redvote : greyeddown);

        voteOnReview(review_id, inc)
            .catch((err) => {
                setErrorMessage("Error, try to vote again later");
        })
    };

    return(
        <>
        <p>Votes: {voteCount}</p>
        <section>
            <button 
            disabled={buttonClicked.up}
            className="ReviewVoteButton" 
            onClick={() => voteHandler(1)}>
                <img src={buttonClicked.up ? greenvote : upvote } alt="Up Vote" />
            </button>
            <button 
            disabled={buttonClicked.down}
            className="ReviewVoteButton" 
            onClick={() => voteHandler(-1)}>
                <img src={buttonClicked.down ? redvote : downvote } alt='Down Vote' />
            </button>
        </section>
        <section className='errormessage'>{errorMessage}</section>
        </>
    )
}