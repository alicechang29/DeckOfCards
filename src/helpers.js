/** Helpers */

const DECK_OF_CARDS_BASE_API = "https://deckofcardsapi.com/api/deck"

/** Get a deck of card ID  */
async function getDeckOfCardsID(){
  const resp = await fetch(`${DECK_OF_CARDS_BASE_API}/new`);
  const deckData = await resp.json();

  return deckData.deck_id;
}

/** Get card img from  */
async function getCardImgFromDeck(deck_id){
  const resp = await fetch(`${DECK_OF_CARDS_BASE_API}/${deck_id}/draw/?count=1`);
  const deckData = await resp.json();

  return deckData.cards[0].image;
}

export {
  getCardImgFromDeck,
  getDeckOfCardsID,
}