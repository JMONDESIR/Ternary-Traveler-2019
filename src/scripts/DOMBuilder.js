import Data from "./APIManager";
import EventHandler from "./eventHandler"

const DOMBuilder = {
        buildHeader() {
                const headerContainer = document.getElementById("header")
                const header = document.createElement("h1")
                header.textContent = "The Ternary Traveler"
                headerContainer.appendChild(header)

        },
        buildForm() {
                const bodyContainer = document.querySelector("#body")
                const formWrapper = document.createElement("div")
                formWrapper.id = "formWrapper"
                bodyContainer.appendChild(formWrapper)

                const nameLabel = document.createElement("label")
                nameLabel.textContent = "Name"
                const nameInput = document.createElement("input")
                nameInput.id = "nameInput"

                const descriptionLabel = document.createElement("label")
                descriptionLabel.textContent = "Description"
                const descriptionInput = document.createElement("textarea")
                descriptionInput.id = "descriptionInput"

                const costLabel = document.createElement("label")
                costLabel.textContent = "Cost"
                const costInput = document.createElement("input")
                costInput.id = "costInput"

                Data.getAllPlaces()
                .then(places => places.forEach(place => {
                        const locale = document.createElement("select")
                        console.log(locale.name)
                        const placeName = document.createElement("option")
                        placeName.textContent = place.name
                        locale.appendChild(placeName)
                }))


                const addbutton = document.createElement("button")
                addbutton.textContent = "Add"
                addbutton.addEventListener("click", EventHandler.addPlace)

                formWrapper.appendChild(nameLabel)
                formWrapper.appendChild(nameInput)
                formWrapper.appendChild(descriptionLabel)
                formWrapper.appendChild(descriptionInput)
                formWrapper.appendChild(costLabel)
                formWrapper.appendChild(costInput)
                formWrapper.appendChild(addbutton)
        },
        buildBody() {
                const bodyContainer = document.getElementById("body")
                bodyContainer.className = "bodyContainer"
                const POIHeader = document.createElement("h2")
                POIHeader.textContent = "Add a points of Interest:"
                bodyContainer.appendChild(POIHeader)
                const cardContainer = document.createElement("div")
                cardContainer.id = "cardContainer"
                bodyContainer.appendChild(cardContainer)

                Data.getAllInterests()
                        .then(interests => interests.forEach(interest => {
                                const interestCard = document.createElement("div")
                                interestCard.className = "interestCard"
                                interestCard.id = `interestCard--${interest.placeId}`
                                cardContainer.appendChild(interestCard)

                                const interestName = document.createElement("h3")
                                interestName.textContent = interest.name
                                interestCard.appendChild(interestName)

                                const interestDescription = document.createElement("p")
                                interestDescription.textContent = interest.description
                                interestCard.appendChild(interestDescription)

                                const interestCost = document.createElement("p")
                                interestCost.textContent = interest.cost
                                interestCard.appendChild(interestCost)

                                const interestReview = document.createElement("p")
                                interestReview.textContent = interest.review
                                interestCard.appendChild(interestReview)

                                const editButton = document.createElement("button")
                                editButton.textContent = "EDIT"
                                interestCard.appendChild(editButton)

                                const deleteButton = document.createElement("button")
                                deleteButton.textContent = "DELETE"
                                interestCard.appendChild(deleteButton)

                                const rule = document.createElement("hr")
                                interestCard.appendChild(rule)

                                Data.getAllPlaces()
                                .then(places => places.forEach(place => {
                                        console.log(place.name)
                                        const placeName = document.createElement("option")
                                        placeName.textContent = place.name
                                }))
                        }))
        }
}

export default DOMBuilder