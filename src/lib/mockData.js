const mockCards = [
  {
    "categoryId": 1,
    "cardNumber": 101,
    "term": "React",
    "definition": "A client-side JavaScript framework that allows you to easily and efficiently manipulate the DOM based on application data and how it changes in response to user interaction"
  },
  {
    "categoryId": 1,
    "cardNumber": 102,
    "term": "The Virtual DOM",
    "definition": "An in-memory object that represents a DOM structure and can be manipulated with JavaScript before updating the real DOM"
  },
  {
    "categoryId": 1,
    "cardNumber": 103,
    "term": "JSX",
    "definition": "A mix of JavaScript and XML that facilitates rendering the appropriate HTML, lives inside a component"
  },
  {
    "categoryId": 2,
    "cardNumber": 205,
    "term": "Enzyme",
    "definition": "A JavaScript Testing utility for React that makes it easier to test your React Components' output.  It allows test files to be more readable and provides us with helper methods for testing common pieces of functionality."
  },
]

const mockCurrentCard = {
  "categoryId": 1,
  "cardNumber": 103,
  "term": ".simulate()",
  "definition": "Simulates an event on an element by passing the event name string in as an argument."
}


module.exports = {
  mockCards,
  mockCurrentCard
}