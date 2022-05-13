import { Link } from "react-router-dom";
import Button from "@atlaskit/button";

export const LinkToTests = () => (
  <Link to="/tests">
    <Button>Open test manager</Button>
  </Link>
);

export const LinkToInstructions = () => (
  <Link to="/">
    <Button appearance="subtle-link">Back to instructions</Button>
  </Link>
);
