import reviews from "./reviews";
import "./TestimonialsStyles.css";
function Testimonial(){
    return <div className="testimonial">
    <h1>Testimonials</h1>
        {reviews.map(review=>(<div className="test-text" key={review.id}>
            <p className="review">{review.text}</p>
            <p className="author">{review.author}</p>
        </div>))}
    </div>
}
export default Testimonial;