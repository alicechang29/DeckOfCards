import { useState, useEffect } from "react";
import { getDeckOfCardsID, getCardImgFromDeck } from "./helpers";


/**
 * Deck of cards
 *
 * Props: none
 * State:
 * deckData: {deckData: "", isLoading: true}
 *
 */
function DeckOfCards(){
  const [deckData, setData] = useState({deckData: "", isLoading: true});

  /** Fetch Deck ID from Deck API on initial render */
  useEffect(function fetchDeckIdOnStart(){

    async function fetchDeckId(){
      const deckId = await getDeckOfCardsID();
      setData({deckData: deckId, isLoading: false});
    }

    fetchDeckId();
  }, []); // <--- Only runs at the initial render

  return(
    <div className="DeckOfCards">

    </div>
  );
}

export default DeckOfCards;