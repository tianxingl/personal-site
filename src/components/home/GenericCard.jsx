import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";

const GenericCard = ({value}) => {
    const {
        name,
        description,
        subDescription,
      } = value;

    return (<Col md={6}>
        <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
          <Card.Body>
            <Card.Title as="h5">{name || <Skeleton />} </Card.Title>
            <Card.Text>{(!description) ? "" : description || <Skeleton count={3} />} </Card.Text>
            <hr />
            {subDescription ? (
               <p className="card-text">
                <span className="text-dark card-link mr-4">
                      <span className="badge badge-dark">{subDescription}</span>
                </span>
               </p>
            ) : (
              <Skeleton count={3} />
            )}
          </Card.Body>
        </Card>
      </Col>)
}

export default GenericCard;