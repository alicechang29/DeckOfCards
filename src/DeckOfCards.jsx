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

  const [cardStatus, setCardStatus] = useState(false);

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

  /** Fetch card from Deck API on re-render */
  useEffect(function fetchNewCard() {

    console.log("DECK ID INSIDE EFFECT", deckData.cardData.deckId);
    if (cardStatus === true) {
      async function fetchCard() {
        const card = await getCardImgFromDeck(deckData.cardData.deckId);

        setData(curr => ({
          ...curr,
          cardData: { ...curr.cardData, currentCard: card },
        })
        );

        setCardStatus(false);
      }
      fetchCard();
    }

  }, [cardStatus]);
  //  [deckData.drawingCard]); // <--- FIXME: do this every time button is called

  //FIXME: there is a loop happening. DrawingCard is happening twice bc it's based on status.

  //when button is clicked, change drawingCard to be true
  function drawCard() {
    setCardStatus(true);
  }

  return (
    <div className="DeckOfCards">
      <Button onClick={drawCard}>Draw a card </Button>
      <Card img={deckData.cardData.currentCard} />
    </div>
  );
}

export default DeckOfCards;