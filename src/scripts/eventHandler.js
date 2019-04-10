import DOMBuilder from "./DOMBuilder"
import Data from "./APIManager";

const clearElement = domElement => {
        while (domElement.firstChild) {
                domElement.removeChild(domElement.firstChild);
        }
};

const EventHandler = {
        addPlace() {
                const cardContainer = document.getElementById("cardContainer")
                const dropdown = document.createElement("select")

                const name = document.querySelector("#nameInput")
                const description = document.querySelector("#nameInput")
                const cost = document.querySelector("#nameInput")

                const interestObject = {
                        name: name.value,
                        description: description.value,
                        cost: cost.value,
                        placeId: "",
                        review: ""
                }
                console.log(interestObject)
                // Data.postInterest().then(clearElement(cardContainer))
                // .then(DOMBuilder.buildBody)
        }
}

export default EventHandler