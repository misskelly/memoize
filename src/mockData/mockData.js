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
    "categoryId": 1,
    "cardNumber": 104,
    "term": "Component",
    "definition": "Reusable pieces of code that represent templates for a particular instance of a UI element. They are either functions or an extended ES6 class"
  }
]

const mockCurrentCard = {
  "categoryId": 2,
  "cardNumber": 214,
  "term": ".simulate()",
  "definition": "Simulates an event on an element by passing the event name string in as an argument."
}


module.exports = {
  mockCards,
  mockCurrentCard
}