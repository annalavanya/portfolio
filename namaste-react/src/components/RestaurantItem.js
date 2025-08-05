import { useState } from "react";
import ItemDetails from "./ItemDetails";

const RestaurantItem = ({ card, isAccordian, showAccordian }) => {

    const { title } = card?.card;

    function showAccordianCard() {
        showAccordian();
    }

    return (
        <div className="bg-gray-100 h-auto m-3 my-5 text-left p-2 shadow-2xl">
            <div className="flex justify-between cursor-pointer" onClick = {() => showAccordianCard()}>
                <span className="text-s font-bold py-2">{title} - ({card?.card?.itemCards?.length})</span>
                <span>⬇️</span>
            </div>
            {
                (isAccordian) && card?.card?.itemCards.map((res) => <ItemDetails key={res?.card?.info?.id} {...res}/>)
            }
        </div>
    )
}
export default RestaurantItem;