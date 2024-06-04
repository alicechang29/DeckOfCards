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
      deckData: null,
      isLoading: true,
      drawingCard: false
    }
  );

  /** Fetch Deck ID from Deck API on initial render */
  useEffect(function fetchDeckIdOnStart() {
    console.log("DECK ID", deckData);
    async function fetchDeckId() {
      const deckId = await getDeckOfCardsID();
      console.log("DECK ID", deckId);
      setData({
        deckData: { deckId, currentCard: null },
        isLoading: false
      });
    }

    fetchDeckId();
  }, []); // <--- Only runs at the initial render


  /** Fetch card from Deck API on re-render */
  useEffect(function fetchNewCard() {

    async function fetchCard() {
      const card = await getCardImgFromDeck(deckData.deckId);

      setData(curr => ({
        ...curr,
        deckData: { ...curr.deckData, currentCard: card },
        drawingCard: false
      })
      );
    }
    fetchCard();

  }, [deckData.drawingCard]); // <--- FIXME: do this every time button is called

  //when button is clicked, change drawingCard to be true
  function drawCard() {
    setData(curr => ({
      ...curr,
      drawingCard: true
    })
    );
  }

  return (
    <div className="DeckOfCards">
      <Button onClick={drawCard}>Draw a card </Button>
      {deckData?.drawingCard === false && deckData?.currentCard !== null
        ? <Card img={deckData?.currentCard} />
        : null
      }
    </div>
  );
}

export default DeckOfCards;