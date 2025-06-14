import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import quote from "../../../assets/icon/quote.png"

function SingleReview({ review }) {

    const { name, details, rating } = review;

    return (
        <div>
            <div className='text-center w-[80%] mx-auto space-y-4'>
                <Rating
                    className='mx-auto'
                    style={{ maxWidth: 180 }}
                    value={rating}
                    readOnly
                />
                <img className='mx-auto' src={quote} alt="" />
                <h2 className='text-3xl text-amber-500'>{name}</h2>
                <p className='text-sm'>{details}</p>
            </div>
        </div>
    )
}

export default SingleReview