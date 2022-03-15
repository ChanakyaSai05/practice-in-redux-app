import axios from "axios";
import React, { useState } from "react";
import {
  CardBody,
  Card,
  CardTitle,
  CardText,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

export default function Cards({ id, title, author, genre, summary }) {
  const [title1, setTitle1] = useState("");
  const [author1, setAuthor1] = useState("");
  const [genre1, setGenre1] = useState("");
  const [summary1, setSummary1] = useState("");
  const deleteButton = () => {
    const url = `http://localhost:3000/books/${id}`;
    axios
      .delete(url)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    window.location.reload();
  };

  const updateButton = () => {
    const url = `http://localhost:3000/books/${id}`;
    axios
      .put(url, {
        title: title1,
        author: author1,
        genre: genre1,
        summary: summary1,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };
  return (
    <div>
      <Card className="cardItem">
        <CardBody>
          <CardTitle style={{ fontWeight: "bold", textAlign: "center" }}>
            {title}
          </CardTitle>
          <CardText>
            <div>
              Author: <span>{author}</span>
            </div>
            <div>
              Genre:
              <span style={{ paddingLeft: "7px" }}>{genre}</span>
            </div>
            <div style={{ fontStyle: "italic" }}>
              <span>{summary}</span>
            </div>
          </CardText>
          <div>
            {/* <Button color="primary" onClick={updateButton}>
            Edit
          </Button> */}
          </div>
        </CardBody>
      </Card>
      <div style={{ marginLeft: "20px" }}>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Edit
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit Book
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <Form>
                  <FormGroup>
                    <Label for="title">Title:</Label>
                    <Input
                      type="text"
                      name="title"
                      id="title"
                      value={title1}
                      onChange={(event) => setTitle1(event.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="author">Author:</Label>
                    <Input
                      type="text"
                      name="author"
                      id="author"
                      value={author1}
                      onChange={(event) => setAuthor1(event.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleSelect">Genre:</Label>
                    <Input
                      type="select"
                      name="select"
                      id="exampleSelect"
                      value={genre1}
                      onChange={(event1) => setGenre1(event1.target.value)}
                    >
                      <option value="" disabled>
                        --Select a Genre--
                      </option>
                      <option value="Mystry Thriller">Mystry Thriller</option>
                      <option>Inspirational</option>
                      <option>Autobiography</option>
                      <option>Drama</option>
                      <option>Medical</option>
                    </Input>
                  </FormGroup>

                  <FormGroup>
                    <Label for="summary">Summary:</Label>
                    <Input
                      type="textarea"
                      name="summary"
                      id="summary"
                      value={summary1}
                      onChange={(event) => setSummary1(event.target.value)}
                    />
                  </FormGroup>
                </Form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={updateButton}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
        <Button color="danger" onClick={deleteButton}>
          Delete
        </Button>
      </div>
    </div>
  );
}
