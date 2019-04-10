const Data = {
        getAllPlaces() {
                return fetch("http://localhost:8088/places")
                        .then(response => response.json())
        },
        getAllInterests() {
                return fetch("http://localhost:8088/interests")
                        .then(response => response.json())
        },
        getPlace(interestPlaceId) {
                return fetch(`http://localhost:8088/places/${interestPlaceId}`)
                        .then(response => response.json())
        },
        postInterest(interestObject) {
                return fetch("http://localhost:8088/interests", {
                        method: "POST",
                        headers: {
                                "Content-Type": "application/json"
                        },
                        body: JSON.stringify(interestObject)
                }
                ).then(response => response.json())
        },
}

export default Data