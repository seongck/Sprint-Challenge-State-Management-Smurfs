1. What problem does the context API help solve?

The Context API helps simplify state management by eliminating prop-drilling
(passing props down through intermediate components).

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are events, which can come from user interactions or generated from our
own code (eg. useEffect API calls).  They are respresented by an object that
have type and payload (the data/value) keys/values.  When an event occurs, the
corresponding action is dispatched to our reducer functions.

Reducers are pure functions that receive an action and current state as arguments,
and return a new (updated) state. The new state is sent to our store.  

Store is an object that holds all of our application level state. The store is
known as a 'single source of truth' because its a single object contains all of
our application level state and it is immutable. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is state that needs to be global and accessed by multiple
components in our app.

Component state is state that is only needed by that component and doesn't
affect the rest of our application.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

'redux-thunk' is middleware that allows us to handle async operations inside our
action creators.  Our action creators can now return thunks (a function thats
returned by another) and access the dispatch function. This allows us to run an
async function and dispatch a new action based on the result of the async
function.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

My favorite state management system I've learned so far is Redux.  Even though
it's fairly complicated, I like the idea of having a 'single source of truth',
being able to dispatch different actions with API call results, and being able
see the previous state / action / new state via redux-logger.
