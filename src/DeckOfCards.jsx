import { useState, useEffect } from "react";
import { getDeckOfCardsID, getCardImgFromDeck } from "./helpers";
import Button from "./Button";
import Card from "./Card";

/**
 * Deck of cards
 *
 * Props: none
 * State:
 * deckData: {deckData: null, isLoading: true}
 *
 */
function DeckOfCards() {
  console.log("DeckOfCards");

  const [deckData, setData] = useState(
    {
      cardData: {},
      isLoading: true
    }
  );

  /** Fetch Deck ID from Deck API on initial render */
  useEffect(function fetchDeckIdOnStart() {
    console.log("DECK ID", deckData);
    async function fetchDeckId() {
      const deckId = await getDeckOfCardsID();
      console.log("DECK ID", deckId);
      setData({
        cardData: { deckId, currentCard: null },
        isLoading: false
      });
    }

    fetchDeckId();
  }, []); // <--- Only runs at the initial render

  console.log("CARD", deckData.cardData.currentCard);

  /** Fetch card from Deck API */
  async function fetchCard() {
    const card = await getCardImgFromDeck(deckData.cardData.deckId);

    setData(curr => ({
      ...curr,
      cardData: { ...curr.cardData, currentCard: card },
    }));
  };


  function drawCard() {
    //Don't need to put it inside a useEffect.
    //Can just call async fn upon click and cuts down on number of re-renders
    fetchCard();
  }

  return (
    <div className="DeckOfCards">
      <Button onClick={drawCard}>Draw a card </Button>
      <Card img={deckData.cardData.currentCard} />
    </div>
  );
}

export default DeckOfCards;