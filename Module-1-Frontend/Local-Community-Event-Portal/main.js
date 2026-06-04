     /****************************************
      JavaScript Exercise 1: Basics & Setup
      ****************************************/

    console.log("Welcome to the Community Portal");
     



     
     /****************************************
     JavaScript Exercise 2:
     Syntax, Data Types, and Operators
     ****************************************/

    const eventName = "Community Festival";
    const eventDate = "2026-12-15";

    let availableSeats = 100;

    let eventInfo =
    `Event: ${eventName} | Date: ${eventDate} | Available Seats: ${availableSeats}`;

    console.log(eventInfo);

    



    /****************************************
    JavaScript Exercise 3:
    Conditionals, Loops, and Error Handling
    ****************************************/
     const events = [
    {
        name: "Music Festival",
        seats: 50,
        isPast: false
    },

    {
        name: "Art Exhibition",
        seats: 0,
        isPast: false
    },

    {
        name: "Food Fair",
        seats: 30,
        isPast: true
    }
];

    events.forEach(function (event) {

    if (event.seats > 0 && !event.isPast) {

        console.log(
            `Available Event: ${event.name}`
        );

    } else {

        console.log(
            `Hidden Event: ${event.name}`
        );
    }

});

     


    /****************************************
    JavaScript Exercise 4:
    Functions, Scope, Closures,
    Higher-Order Functions
    ****************************************/

    function addEvent(eventName) {

    console.log(
        `Event Added: ${eventName}`
    );

}

    function registerUser(userName) {

    console.log(
        `${userName} registered successfully`
    );

}


    function filterEventsByCategory(
    category,
    callback
) {

    callback(category);

}

    function registrationTracker() {

    let totalRegistrations = 0;

    return function () {

        totalRegistrations++;

        console.log(
            `Total Registrations: ${totalRegistrations}`
        );

    };

}

/* Create Closure Instance */
const trackMusicRegistrations =
    registrationTracker();

/* Test Closure */
trackMusicRegistrations();
trackMusicRegistrations();


filterEventsByCategory(
    "Music",
    function (category) {

        console.log(
            `Filtering ${category} events`
        );

    }
);


addEvent("Community Festival");

registerUser("Aditya");




    /****************************************
    JavaScript Exercise 5:
    Objects and Prototypes
    ****************************************/

    class Event {

    constructor(
        name,
        date,
        seats
    ) {

        this.name = name;
        this.date = date;
        this.seats = seats;

    }

}


    Event.prototype.checkAvailability =
    function () {

        return this.seats > 0;

    };


    const musicEvent =
    new Event(
        "Music Festival",
        "2026-12-15",
        50
    );
    

    console.log(
    musicEvent.checkAvailability()
);


    Object.entries(
    musicEvent
).forEach(
    function ([key, value]) {

        console.log(
            `${key}: ${value}`
        );

    }
);



    /****************************************
    JavaScript Exercise 6:
    Arrays and Methods
    ****************************************/

    let communityEvents = [

    "Music Festival",

    "Art Exhibition",

    "Food Fair"

];

     
    communityEvents.push(
    "Workshop on Baking"
);

    let musicEvents =
    communityEvents.filter(
        function (event) {

            return event.includes(
                "Music"
            );

        }
    );


    console.log(
    musicEvents
);


    let eventCards =
    communityEvents.map(
        function (event) {

            return `Event: ${event}`;

        }
    );


    console.log(
    eventCards
);




    /****************************************
    JavaScript Exercise 7:
    DOM Manipulation
    ****************************************/

    const eventContainer =
    document.querySelector(
        "#eventContainer"
    );


    communityEvents.forEach(
    function (event) {

        let card =
            document.createElement("div");

        card.innerHTML = event;

        eventContainer.appendChild(
            card
        );

    }
);


    /****************************************
    JavaScript Exercise 9:
    Async JS, Promises, Async/Await
    ****************************************/

    function fetchEventsPromise() {

    document.getElementById(
        "loadingMessage"
    ).innerHTML = "Loading Events...";

    fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
    )
        .then(function (response) {

            return response.json();

        })
        .then(function (data) {

            console.log(data);

            document.getElementById(
                "loadingMessage"
            ).innerHTML =
                "Events Loaded";

        })
        .catch(function (error) {

            console.error(error);

            document.getElementById(
                "loadingMessage"
            ).innerHTML =
                "Error Loading Events";

        });

}


    async function fetchEventsAsync() {

    try {

        document.getElementById(
            "loadingMessage"
        ).innerHTML =
            "Loading Events...";

        const response =
            await fetch(
                "https://jsonplaceholder.typicode.com/posts?_limit=5"
            );

        const data =
            await response.json();

        console.log(data);

        document.getElementById(
            "loadingMessage"
        ).innerHTML =
            "Events Loaded";

    } catch (error) {

        console.error(error);

        document.getElementById(
            "loadingMessage"
        ).innerHTML =
            "Error Loading Events";

    }

}


    fetchEventsPromise();

    fetchEventsAsync();



    /****************************************
    JavaScript Exercise 10:
    Modern JavaScript Features
    ****************************************/

    function createEvent(
    eventName = "Community Event",
    seats = 50
) {

    const eventDate =
        "2026-12-15";

    let availableSeats =
        seats;

    console.log(
        `Event:
${eventName},
Date:
${eventDate},
Seats:
${availableSeats}`
    );

}
    createEvent();


    const eventDetails = {

    name: "Music Festival",

    date: "2026-12-15",

    seats: 100

};


    const {
    name,
    date,
    seats
} = eventDetails;

    console.log(name);
    console.log(date);
    console.log(seats);

    const clonedEvents =
    [...communityEvents];

const filteredEvents =
    clonedEvents.filter(
        event =>
            event.includes(
                "Music"
            )
    );

console.log(
    filteredEvents
);




    /****************************************
    JavaScript Exercise 11:
    Working with Forms
    ****************************************/

    function validateRegistrationForm(
    event
) {

    event.preventDefault();

    const form =
        document.querySelector(
            ".registrationForm"
        );

    const name =
        form.elements["name"].value;

    const email =
        form.elements["email"].value;

    const selectedEvent =
        form.elements["eventType"].value;

    document.getElementById(
        "nameError"
    ).innerHTML = "";

    document.getElementById(
        "emailError"
    ).innerHTML = "";

    let isValid = true;

    if (name.trim() === "") {

        document.getElementById(
            "nameError"
        ).innerHTML =
            "Name is required";

        isValid = false;

    }

    if (
        !email.includes("@")
    ) {

        document.getElementById(
            "emailError"
        ).innerHTML =
            "Enter a valid email";

        isValid = false;

    }

    if (isValid) {

        console.log(
            `Name: ${name}`
        );

        console.log(
            `Email: ${email}`
        );

        console.log(
            `Event: ${selectedEvent}`
        );

    }

}


    /****************************************
     JavaScript Exercise 12:
    AJAX & Fetch API
    ****************************************/

    function submitRegistration() {

    const registrationData = {

        name:
            document.getElementById(
                "name"
            ).value,

        email:
            document.getElementById(
                "email"
            ).value,

        event:
            document.getElementById(
                "eventType"
            ).value

    };

    document.getElementById(
        "confirmationMessage"
    ).innerHTML =
        "Submitting Registration...";

    setTimeout(function () {

        fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method: "POST",

                headers: {
                    "Content-Type":
                        "application/json"
                },

                body:
                    JSON.stringify(
                        registrationData
                    )
            }
        )

        .then(function (response) {

            return response.json();

        })

        .then(function (data) {

            console.log(data);

            document.getElementById(
                "confirmationMessage"
            ).innerHTML =
                "Registration Submitted Successfully";

        })

        .catch(function (error) {

            console.error(error);

            document.getElementById(
                "confirmationMessage"
            ).innerHTML =
                "Registration Failed";

        });

    }, 2000);

}


    /****************************************
    JavaScript Exercise 14:
    jQuery and JS Frameworks
    ****************************************/
    
    $(document).ready(function () {

    $("#registerBtn").click(function () {

        console.log(
            "Register Button Clicked"
        );

    });

});


    $(document).ready(function () {

    $("#eventContainer").fadeOut(2000);

    $("#eventContainer").fadeIn(2000);

});


    console.log(
    "Benefit of React/Vue: Reusable components make large applications easier to maintain."
);


     // Existing Functions
     function showConfirmation(event) {
        event.preventDefault();

        document.getElementById("confirmationMessage").innerHTML =
          "Registration Successful!";
      }

      function validatePhone() {
        let phone = document.getElementById("phone").value;

        if (phone.length != 10) {
          document.getElementById("phoneMessage").innerHTML =
            "Enter a valid 10-digit phone number";
        } else {
          document.getElementById("phoneMessage").innerHTML =
            "Valid phone number";
        }
      }

      function showFee() {
        let fee = document.getElementById("eventType").value;

        document.getElementById("feeDisplay").innerHTML = "Event Fee: ₹" + fee;
      }

      function filterEvents() {

    let selectedCategory =
        document.getElementById(
            "eventType"
        ).options[
            document.getElementById(
                "eventType"
            ).selectedIndex
        ].text;

    document.querySelector(
        "#confirmationMessage"
    ).innerHTML =
        `Selected Event:
${selectedCategory}`;

}

    function searchEvents() {

    let searchText =
        document.getElementById(
            "searchEvent"
        ).value;

    console.log(
        `Searching:
${searchText}`
    );

}
      

      function submitForm() {

    try {

        if (availableSeats <= 0) {

            throw new Error(
                "No seats available"
            );
        }

        availableSeats--;

        alert(
            `Registration Successful!
Remaining Seats: ${availableSeats}`
        );


    document.querySelector(
    "#confirmationMessage"
).innerHTML =
    `Registration Successful!
Remaining Seats: ${availableSeats}`;

    } catch (error) {

        alert(error.message);

    }
}


      function cancelRegistration() {

    availableSeats++;

    document.querySelector(
        "#confirmationMessage"
    ).innerHTML =
        `Registration Cancelled!
Remaining Seats: ${availableSeats}`;

}


      function enlargeImage(img) {
        img.style.width = "400px";
        img.style.height = "300px";
      }


      function countCharacters() {
        let count = document.getElementById("feedback").value.length;

        document.getElementById("charCount").innerHTML = "Characters: " + count;
      }


      function videoReady() {
        document.getElementById("videoMessage").innerHTML =
          "Video ready to play";
      }

      window.onbeforeunload = function () {
        return "Are you sure you want to leave this page?";
      };


      function savePreference() {
        let eventType = document.getElementById("eventType").value;

        localStorage.setItem("preferredEvent", eventType);
      }


      function clearPreferences() {
        localStorage.clear();

        sessionStorage.clear();

        alert("Preferences Cleared");
      }

    window.onload = function () {

        alert("Welcome to the Community Portal!");

        let savedEvent = localStorage.getItem("preferredEvent");

        if (savedEvent) {
            document.getElementById("eventType").value = savedEvent;

            showFee();
        }
    };



      function findLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            showPosition,

            showError,

            {
              enableHighAccuracy: true,
              timeout: 5000,
            },
          );
        } else {
          document.getElementById("location").innerHTML =
            "Geolocation not supported";
        }
      }

      

      function showPosition(position) {
        document.getElementById("location").innerHTML =
          "Latitude: " +
          position.coords.latitude +
          "<br>Longitude: " +
          position.coords.longitude;
      }

      function showError(error) {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            document.getElementById("location").innerHTML =
              "Location permission denied";

            break;

          case error.TIMEOUT:
            document.getElementById("location").innerHTML =
              "Location request timed out";

            break;

          default:
            document.getElementById("location").innerHTML =
              "Unable to retrieve location";
        }
      }
   