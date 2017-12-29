# test-cart

1. Install dependencies and build - `npm && npm build`
2. Run - `npm start`

Other commands

- lint code - `yarn lint`
- run tests - `yarn test`

---

Decisions made in the course of completing the assessment

- The prompt mentions using good Object-Oriented priciples but I've taken a
  functional approach to solving the problem. The data structures could be
  said to be object-oriented but logic and calcuations are performed by
  functions. I find testing and composition of functionality a bit simpler
  this way.

- The prompt also mentions extensibility. I only made moderate attempts to
  make the code extensible. I prefer to solve for the simplest case I'm
  presented with unless either a) extensibility needs are defined and agreed
  upon or b) extensibility is the same as clear and concise code. Otherwise
  extensibility can come at the cost of maintainability in preparation for
  future needs that never arise.

- I've matched the provided output aside from trailing zeros on the currency
  values. I'm always outputting two decimal places. Perhaps one decimal place
  was wanted when there was a value in the 10ths place but not the 100ths but
  that seemed odd so I made a judgment call.

- I used static type checking via flow and ommitted code comments, JSDoc style
  or otherwise. The hope is that the function names and type annotations are
  expressive enough to understand the code. This might be insufficient in a
  larger codebase but more than enough for a small tool. Ultimately its up to
  my teammates to determine if communication has been effective.
