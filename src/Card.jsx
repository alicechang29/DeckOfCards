
/** Card for a Deck of Card
 *
 * Props:
 * imgSrc: STRING
 * Renders the img passed into prop
 */


function Card({ imgSrc }) {

  return (
    <div className="Card">
      <img src={img}></img>
    </div>
  );
}

export default Card;