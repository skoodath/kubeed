import { Card } from '../../styles/review.style';


const ReviewCardComponent = () => {
  return(
    <Card.Wrapper>
      <Card.CardCase>
        <Card.CardItem>
          <Card.CardTitle>
            Vishal Raj  
          </Card.CardTitle>
          <Card.CardDesc>
              Sincere thanks to Srinath for creating such a wonderful course. Covers every detail of Kubernetes in details. Simple examples to demonstrate the core concepts. Definitely recommended for anybody who wants to venture into Kubernetes. Great work.
          </Card.CardDesc>
        </Card.CardItem>
        <Card.CardItem>
          <Card.CardTitle>
            John Hart  
          </Card.CardTitle>
          <Card.CardDesc>
            Srinath explains Kubernetes at a very high level, just as intended. His teaching was very understandable and easy to follow. You will not get lost 'in the weeds', and will easily be able to take this starter knowledge with you to additional courses, as I plan on doing myself. Highly Recommend!!
          </Card.CardDesc>
        </Card.CardItem>
        <Card.CardItem>
          <Card.CardTitle>
            Raghu Thallam  
          </Card.CardTitle>
          <Card.CardDesc>
          One of the best course that I have come across covering such a breadth and depth of insights on k8s. So I can surely bet on @SrinathChalla on his full course.
          </Card.CardDesc>
        </Card.CardItem>
      </Card.CardCase>

    </Card.Wrapper>
  )
}

export default ReviewCardComponent;