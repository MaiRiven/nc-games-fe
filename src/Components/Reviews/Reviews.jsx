import { useEffect, useState } from "react";
import { getReviews } from "../../utils/api";
import { Loader } from "../Loader";
import { Card } from "./Card";

export const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        getReviews().then((reviews)=>{
            setReviews(reviews)
            setIsLoading(false)
        })
    },[]);

return (
        isLoading ? 
            <Loader />
            :
            <ul className="reviewBox">
                {reviews.map(review => {
                    return <Card key={review.review_id} review={review} />
                })}
            </ul>
    )
};