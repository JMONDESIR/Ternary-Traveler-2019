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
                const description = document.querySelector("#descriptionInput")
                const cost = document.querySelector("#costInput")

                const interestObject = {
                        placeId: null,
                        name: name.value,
                        description: description.value,
                        cost: cost.value,
                        review: ""
                }
                console.log(interestObject)
                Data.postInterest(interestObject).then(clearElement(cardContainer))
                        .then(DOMBuilder.buildBody)
        },
        deleteInterest() {
                const cardContainer = document.getElementById("cardContainer")
                const cardId = event.target.parentNode.id.split("--")[1]
                console.log(cardId)
                Data.deleteInterest(cardId).then(clearElement(cardContainer))
                .then(DOMBuilder.buildBody)
        }
}

export default EventHandler