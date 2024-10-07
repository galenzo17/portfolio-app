# Portfolio App

Hi there! I'm Agustín, and this is a simple Portfolio application I built as part of a coding task for a job application. I used NestJS, a framework I'm quite fond of, to create a service that manages a portfolio of stocks and calculates profits and annualized returns over specified periods.

## Features

- **Portfolio Management**: The app manages a collection of stocks, each with its own quantity and price history.
- **Profit Calculation**: Given two dates, the app calculates the profit or loss of the portfolio between those dates.
- **Annualized Return**: The app can also calculate the annualized return of the portfolio over the specified period.

## Project Structure

I kept the structure of this project simple and clean to ensure it's easy to follow:

- **Stock Module**: This module is responsible for managing individual stocks and retrieving their prices for specific dates.
- **Portfolio Module**: This module handles the portfolio, calculates profits, and computes annualized returns based on the stock prices.

## Running the Application

To run the application locally, you'll need to have [Node.js](https://nodejs.org/) installed. Then, follow these steps:

1. Clone the repository:
    ```bash
    git clone git@github.com:galenzo17/portfolio-app.git
    cd portfolio-app
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Run the application:
    ```bash
    npm run start
    ```

4. Access the API:
    - Profit Calculation: `GET /portfolio/profit?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD`
    - Annualized Return: `GET /portfolio/annualized-return?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD`

## Testing

I wrote some basic unit tests to ensure the services behave as expected. To run the tests, use:

```bash
npm run test



https://legendary-biscuit-cad96b.netlify.app/
