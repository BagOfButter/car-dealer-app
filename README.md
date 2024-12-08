# Car Dealer App - Test Task

This is a simple Car Dealer App built as a test task. It consists of two main
pages:

1. **Home Page**: Displays dropdowns and button that allow to select car
   manufacturer and year.
2. **Result Page**: Shows the search results for vehicles based on the user's
   query.

The app includes functionalities like selecting options, displaying vehicle
cards, and navigating between pages.

## Warning

Due to public API request rate limits some data wont be fetched during the build
process resulting in generated static pages having no data.

## Deploy

The app is deployed using Vercel at: https://car-dealer-app-silk.vercel.app/

## Features:

- **Result Page**: Displays a list of vehicles with their make and model.
- **Home Page**: Provides an interface for the user to initiate a search.

## Technologies Used:

- React 19
- Next.js 15
- Tailwind CSS
- Feature-sliced Design Architecture (https://feature-sliced.design/docs)

How to Start and Build the Project

1. Clone the repository: First, clone the repository to your local machine:

`git clone https://github.com/your-username/car-dealer-app.git`

2. Navigate to the project directory:

`cd car-dealer-app`

3. Install dependencies (make sure you have Node.js installed on your machine):

`npm install`

# or

`yarn install`

4. Start the development server:

`npm run dev`

# or

`yarn dev`

The app will be available at http://localhost:3000.

5. Build the project: To build the project for production, run:

`npm run build`

# or

`yarn build`

After the build completes, you can start the production server with:

`npm run start`

# or

`yarn start`

This will serve the optimized app at http://localhost:3000.

## Data Fetching and Suspense

Although the app fetches data server-side, Suspense is used in places where the
fetched data is displayed.

In this app, Suspense is primarily used for displaying vehicle data. When the
data is being fetched, a fallback is shown until the data is ready to be
displayed.

## Error Handling and 404 Page

The app uses a 404 page when the URL is incorrect, or when no vehicles are
fetched for the specified search criteria. The 404 page is automatically
displayed in such cases.

## Dark Theme

The app also includes a dark theme option, providing users with the flexibility
to switch between light and dark modes for a better user experience, especially
in low-light environments.
