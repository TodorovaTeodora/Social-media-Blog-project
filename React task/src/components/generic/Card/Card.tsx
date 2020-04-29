import React  from 'react';
import classes from './Card.module.css';


type CardProps = {
  heading?: string;
};

function Card({ heading }: CardProps) {
  return (
    <div className={classes.card}>
      <div className={classes.heading}>
        {heading && (
          <>
            <h1><i>{heading}</i></h1>
          </>
        )}
      </div>
      <hr className={classes.line} />
      <div className={classes.content}>
        <p><i>Card content.</i></p>
      </div>
    </div>

  );
}

export default Card;
