import React from "react";
import { Link } from "react-router-dom";

interface Props {
  nasaId: string;
}

const LinkWrapper: React.FC<Props> = (props) => (
  <>
    <Link to={`/asset/${props.nasaId}`}>{props.children}</Link>
  </>
);

export default LinkWrapper;
