import Content from "./Content";
import Teamprops from "../components/teamprops";
import Teamprops2 from "../components/teamprops2";
import Teamprops3 from "../components/teamprops3";
import Teamprops4 from "../components/teamprops4";
import { Col, Container, Row } from "react-bootstrap";
import team from "../Assets/team..png";
import { useContext } from "react";
import { darkModeContext } from "../App";
const Home = () => {
  // const { isDarkMode } = useContext(darkModeContext);

  // const styles = {
  //   body: {
  //     backgroundColor: isDarkMode ? "black" : "white",
  //   },
  // };
  return (<>
    <div >
      <Content
        title="Instant collaborations for remote teams"
        text="All in one for your remote team chats, collaboration and track projects"
        button="Get early access"
        placeholder="Email"
        type="email"
      />

      <Teamprops
        header="Your hub for Teamwork"
        content="Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."
        button="Learn more ->"
      />
      <Teamprops2
        header2="Simple task management"
        content2="Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."
        button2="Learn more ->"
      />
      <Teamprops3
        header3="Scheduling that actually works"
        content3="Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."
        button3="Learn more ->"
        title2="What people say about us"
      />

      <Container className="Textboxcontainer">
        <Col>
          <Teamprops4
            name4="Amy Klassen"
            content4="Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place."
            Profile=""
            stars={[0, 1, 2, 3, 4]}
          />
        </Col>
        <Col>
          <Teamprops4
            name4="Amy Klassen"
            content4="Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place."
            Profile=""
            stars={[0, 1, 2, 3, 4]}
          />
        </Col>
        <Col>
          <Teamprops4
            name4="Amy Klassen"
            content4="Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place."
            Profile=""
            stars={[0, 1, 2, 3, 4]}
          />
        </Col>
        <Col>
          <Teamprops4
            name4="Amy Klassen"
            content4="Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place."
            Profile=""
            stars={[0, 1, 2, 3, 4]}
          />
        </Col>
        <Col>
          <Teamprops4
            name4="Amy Klassen"
            content4="Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place."
            Profile=""
            stars={[0, 1, 2, 3, 4]}
          />
        </Col>
        <Col>
          <Teamprops4
            name4="Amy Klassen"
            content4="Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place."
            Profile=""
            stars={[0, 1, 2, 3, 4]}
          />
        </Col>
        <Col>
          <Teamprops4
            name4="Amy Klassen"
            content4="Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place."
            Profile=""
            stars={[0, 1, 2, 3, 4]}
          />
        </Col>
        <Col>
          <Teamprops4
            name4="Amy Klassen"
            content4="Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place."
            Profile=""
            stars={[0, 1, 2, 3, 4]}
          />
        </Col>
        <Col>
          <Teamprops4
            name4="Amy Klassen"
            content4="Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place."
            Profile=""
            stars={[0, 1, 2, 3, 4]}
          />
        </Col>
        <Col>
          <Teamprops4
            name4="Amy Klassen"
            content4="Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place."
            Profile=""
            stars={[0, 1, 2, 3, 4]}
          />
        </Col>
      </Container>
    </div>
    <div
      style={{ backgroundColor: "#252B3B", width: "10px", marginBottom: "0px" }}
      className="footer w-100 text-white"
    >
      <Container className="p-2">
        <Row className="mb-5">
          <Col>
            <img src={team} alt="team" />
          </Col>
          <Col>Use Cases</Col>
          <Col>Explore</Col>
          <Col>Resources</Col>
          <Col>Subscribe to our newsletter</Col>
        </Row>
        <Row className="mt-3">
          <Col style={{ display: "flex" }}>
            <img
              src="https://thumbs.dreamstime.com/b/high-resolution-image-black-white-instagram-icon-high-resolution-image-black-white-instagram-icon-web-printing-purpose-172342399.jpg"
              alt=""
              style={{
                width: "21.95px",
                height: "16px",
              }}
            />
            <p>instagram</p>
          </Col>
          <Col>UI design</Col>
          <Col>Figma</Col>
          <Col>Supports</Col>
          <Col></Col>
        </Row>
        <Row className="mt-3">
          <Col style={{ display: "flex" }}>
            <img
              src="data:image/png;base64,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"
              alt=""
              style={{ width: "21.95px", height: "16px" }}
            />
            <p>Facebook</p>
          </Col>
          <Col>UX design</Col>
          <Col>Costumers</Col>
          <Col>Support</Col>
          <Col>
            <input
              type="email"
              placeholder="Email                                        =>"
              className="w-100 h-100"
              style={{ color: "Black" }}
            />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col style={{ display: "flex" }}>
            <img
              src="data:image/png;base64,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"
              alt=""
              style={{ width: "21.95px", height: "16px" }}
            />
            <p>Twitter</p>
          </Col>
          <Col>Prototyping</Col>
          <Col>Why I love figma</Col>
          <Col>Education</Col>
          <Col></Col>
        </Row>
        <Row className="mt-3">
          <Col style={{ display: "flex" }}>
            <img
              src="https://thumbs.dreamstime.com/b/high-resolution-image-black-white-instagram-icon-high-resolution-image-black-white-instagram-icon-web-printing-purpose-172342399.jpg"
              alt=""
              style={{
                width: "21.95px",
                height: "16px",
              }}
            />
            <p>instagram</p>
          </Col>
          <Col>UI design</Col>
          <Col>Figma</Col>
          <Col>Supports</Col>
          <Col></Col>
        </Row>
        <Row className="mt-3">
          <Col style={{ display: "flex" }}>
            <img
              src="data:image/png;base64,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"
              alt=""
              style={{ width: "21.95px", height: "16px" }}
            />
            <p>Facebook</p>
          </Col>
          <Col>UX design</Col>
          <Col>Costumers</Col>
          <Col>Support</Col>
          <Col></Col>
        </Row>
        <Row className="mt-3">
          <Col style={{ display: "flex" }}>
            <img
              src="data:image/png;base64,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"
              alt=""
              style={{ width: "21.95px", height: "16px" }}
            />
            <p>Twitter</p>
          </Col>
          <Col>Prototyping</Col>
          <Col>Why I love figma</Col>
          <Col>Education</Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  </>);
};
export default Home;
