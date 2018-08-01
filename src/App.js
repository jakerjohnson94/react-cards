import React from 'react';

/*
 * CardGroup
 * This component takes Card components as children and renders them.
 * Example usage:
 *
 *      <CardGroup>
 *          <Card description="Trial" icon="fa-thumbs-o-up" price="Free!" />
 *      </CardGroup>
 *
 * The above would render a card group with a single child in it.
 *
 */
const CardGroup = props => <div className="cardGroup">{props.children}</div>;

const Card = props => (
  <div className="card cardGroup__card">
    <div className="card__description cardGroup__cardDescription">
      <div className={'icon fa card__descriptionIcon ' + props.icon} />
      <div className="card__descriptionText">
        {props.desc}
        <br />
{props.hint && <span> ({props.hint}) </span>}
      </div>
    </div>
    <div className="card__price">{props.price}</div>
  </div>
);

const App = () => (
  <CardGroup>
    <Card icon="fa-thumbs-o-up" desc="Trial" price="Free!" />
    <Card icon="fa-trophy" desc="Basic tier" hint="most popular" price="$10.00" />
    <Card icon="fa-bolt" desc="Advance tier" hint="only for enterprise-level professionals" price="$6,000.00" />
  </CardGroup>
);
export default App;
