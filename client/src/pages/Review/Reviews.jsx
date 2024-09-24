import './Reviews.css';

const Reviews = () => {
  // Helper function to render stars
  const renderStars = (count) => {
    return (
      <>
        {[...Array(5)].map((_, index) => (
          <span key={index} className={`fa fa-star ${index < count ? 'checked' : ''}`}></span>
        ))}
      </>
    );
  };

  return (
    <div className="reviews-page-wrapper"> 
      <div id='reviews-container'>
        <h1>Check out Some of Our Reviews...</h1>

       
        <div className="review">
          <p>
            "I have been purchasing dog food from Pawsitively Fresh for months now and I couldn't be happier with the quality and service. My dog has a sensitivity to chicken
            and finding the right food was a challenge, but the team at this store helped me find the perfect option. Highly Recommended."
          </p>
          <span>- Debra H.</span>
          <div className="star-rating">
            {renderStars(5)}
          </div>
        </div>

        
        <div className="review">
          <p>
            "I recently switched my cat to a new brand of food from Pawsitively Fresh and I have noticed a significant improvement in her coat and overall health.
            The customer service was fantastic and the delivery was quick. I will definitely be a returning customer!"
          </p>
          <span>- Jim L.</span>
          <div className="star-rating">
            {renderStars(5)} 
          </div>
        </div>

    
        <div className="review">
          <p>
            "I was thrilled to find Pawsitively Fresh that offers a wide variety of dog and cat food options. The prices are competitive and the shipping
            is fast. My pets love the food and I love that I can easily order online and have it delivered right to my doorstep. 5 stars!"
          </p>
          <span>- Erin D.</span>
          <div className="star-rating">
            {renderStars(5)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;


