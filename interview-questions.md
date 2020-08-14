What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a library for building UI components. It helps solve the problem of dynamic data & helps with declarative programming. We break
an app into different components making it easier to debug and fix issues. Concurrently, we introduce a dynamic state that updates as new information is introduced to a page and users interact. 

Describe component state.
Component state is essentially data change. Whenever something new is introduced, it is said that state changes.


Describe props.
Props, or properties, are values that are passed through from a parent component onto it's children. Data flows top to bottom


What are side effects, and how do you sync effects in a React component to changes of certain state or props?
A side effect is anything that affects something outside the scope of the function being executed. You can sync effects by "cleaning it up" with callback functions. 