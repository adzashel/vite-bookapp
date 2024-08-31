import { Col, Modal, Button, Row, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const BookDetail = ({ onHandleClose, show, details  }) => {
  return (
    <>
    {details && (
        <Modal
          show={show}
          onHide={onHandleClose}
          size= 'lg'
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Book Detail </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row size={12}>
              <Col lg={4}>
                <img src={details.image} alt="" style={{ height: "300px" }} />
              </Col>
              <Col lg={8}>
                <ListGroup vertical="true">
                  <ListGroup.Item>
                    <strong>Book Title : {details.title} </strong>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Year : {details.year} </strong>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Authors : {details.authors} </strong>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Desc : {details.description}</strong>!
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onHandleClose}>
              Close
            </Button>
            <Button className="download-btn">
              <a href={details.download} download="pdf-file" >
                Download
              </a>
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  )
}

export default BookDetail

