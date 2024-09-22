import "./Card.css"

export const Card = (props) => {
    return (
      <div className="card">
        <h2 className="name">{props.name}</h2>
        <div class="info">
          <p><span>Вселенная:</span> {props.universe}</p>
          <p><span>Альтер эго:</span> {props.alterego}</p>
          <p><span>Род деятельности:</span> {props.occupation}</p>
          <p><span>Друзья:</span> {props.friends}</p>
          <p><span>Суперсилы:</span> {props.superpowers}</p>
          <p><span>История:</span> {props.info}</p>
        </div>
        <div className="image-block">
          <img src={props.url} alt="superhero-image" />
        </div>
      </div>
    );
  };