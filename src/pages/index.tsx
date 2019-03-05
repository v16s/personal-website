import * as React from "react";
import { Link } from "gatsby";
import { withLayout, LayoutProps } from "../components/Layout";
import { Button, Segment, Container, Header } from "semantic-ui-react";
import cubes from "@nielse63/webgl-cubes";
class IndexPage extends React.Component {
  componentDidMount() {
    cubes(document.getElementById("canvas"));
  }
  render() {
    return (
      <div>
        {/* Master head */}
        <canvas
          id="canvas"
          style={{ width: "100vw", height: "100vh", position: "absolute" }}
        />
        <Segment vertical inverted textAlign="center" className="masthead">
          <Container text>
            <Header inverted as="h1">
              Vignesh Shankar
            </Header>
            <Header inverted as="h2">
              <Link to="/blog">Blog</Link> -{" "}
              <a href="https://github.com/v16s" target="_blank">
                Github
              </a>{" "}
              -{" "}
              <a href="https://twitter.com/vonesix" target="_blank">
                Twitter
              </a>{" "}
              -{" "}
              <a href="https://www.instagram.com/vs1xteen/" target="_blank">
                Instagram
              </a>
            </Header>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default withLayout(IndexPage);
