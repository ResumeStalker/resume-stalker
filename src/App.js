import "./App.css";
import { Button, Col, Input, Row } from "reactstrap";

function App() {
  const stalk = () => {
    const data = document.getElementById("textArea").value;
    const inpp = data.split("\n");
    const emails = [];
    for (let i in inpp) {
      const inp = inpp[i].split(" ");
      for (let ii in inp) {
        if (inp[ii].length > 5) emails.push(inp[ii]);
      }
    }
    console.log(emails);
    for (let i in emails) {
      console.log(i);

      window.open(
        "https://placement.vit.ac.in/public-profile?email=" + emails[i],
        "_blank"
      );
    }
  };
  return (
    <div className="App">
      <header className="App-header px-4">
        <Row className="mb-5">
          <Col>
            <h1 className="mb-4"> Resume Stalker VIT 🚀</h1>
            <small>
              Stalk your fellow student's Resumes using their VIT Email IDs
            </small>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col>
            <h3>How to use❓</h3>
            <small>
              Its simple, just enter the emails of your friends separated by
              spaces and press the Stalk Button❗ <br />
              PS: if you are using a laptop or PC, then you might need to allow
              multiple popups to see more then one resumes at once...
            </small>
          </Col>
        </Row>
        <Row className="mb-3 ">
          <Col>
            <Input
              type="textarea"
              rows="5"
              cols="100"
              id="textArea"
              style={{ resize: "none" }}
            ></Input>
          </Col>
        </Row>
        <Button color="danger" onClick={stalk}>
          Stalk!
        </Button>
        <Row style={{ position: "fixed", bottom: 0 }}>
          <Col>
            Made with ❤️ by <strong>Kranox</strong>
          </Col>
        </Row>
      </header>
    </div>
  );
}

export default App;
