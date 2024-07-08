Road Trip Planner App
=====================

Welcome to the Road Trip Planner App! This application helps users plan and manage their trips by allowing them to create, view, edit, and delete trip details. This app utilizes Google API to allow for autocompletion when entering trip origin and destination, and to display the best available driving route.

Table of Contents
-----------------

-   [Features](#features)
-   [Features Still to be Implemented](#features-still-to-be-implemented)
-   [API Usage](#api-usage)
-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
    -   [Usage](#usage)
-   [License](#license)


Features
--------

-   **Create Trips:** Users can create new trips by providing details such as origin, destination, departure date, and arrival date.
-   **View Trips:** Users can view a list of their trips, including origin, destination, departure date, arrival date, trip length, and driving route.
-   **Edit Trips:** Users can edit existing trip details, including origin, destination, departure date, and arrival date.
-   **Delete Trips:** Users can delete trips they are no longer planning or no longer need details for.
-   **Places Autocomplete:** Utilizes Google Places Autocomplete API for easy input of origin and destination.
-   **Google Maps API Integration:** Utilizes Google Maps API to display the route between origin and destination.

Features Still to be Implemented
--------

- **Login**
- **Ability to place waypoints on route**
- **Deployment**

API Usage
---------

-   **Google Places Autocomplete API:** The app uses the Google Places Autocomplete API to provide suggestions and autofill functionality when users enter origin and destination locations.
-   **Google Maps API:** The app uses the Google Maps API to display the route between the origin and destination entered by the user.

Getting Started
---------------

### Prerequisites

Before running the Trip Planner App, ensure you have the following installed:

-   Node.js (including npm)

### Installation

Clone the repository:

```bash

Copy code

`git clone https://github.com/your-username/trip-planner-app.git`

```

Navigate to the project directory:

```bash

Copy code

`cd trip-planner-app`

```

Install dependencies:

```bash

Copy code

`npm install`
```

### Usage

Start the application:

```bash

Copy code

`npm start`

```

Open your web browser and visit `http://localhost:3000` to access the Trip Planner App.

Use the app to create, view, edit, and delete trips as needed.

License
-------

This project is licensed under the MIT License - see the LICENSE file for details.
