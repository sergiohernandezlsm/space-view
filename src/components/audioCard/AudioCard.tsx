import React from "react";

export interface Props {
  href: string;
}

const AudioCard: React.FC<Props> = (props) => {
  return (
    <div>
      {props.href && (
        <audio controls>
          <source src={props.href} type="audio/ogg" />
          <source src={props.href} type="audio/mpeg" />
        </audio>
      )}
    </div>
  );
};

export default AudioCard;
