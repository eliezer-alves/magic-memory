import './SingleCard.css'

export function SingleCard({ card, handleChoice }) {

  return (
    <div className="card" key={card.id}>
      <div>
        <img className="front" src={card.src} alt="card front" />
        <img
          onClick={() => handleChoice(card)}
          className="back"
          src="/img/cover.png"
          alt="card back"
        />
      </div>
    </div>
  )
}