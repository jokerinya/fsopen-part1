# Exercises

## 1.1 - 1.5: [courseinfo](https://github.com/jokerinya/fsopen-part1/tree/main/courseinfo)

## 1.6 - 1.11: [unicafe](https://github.com/jokerinya/fsopen-part1/tree/main/unicafe)

## 1.12\*: anecdotes step1

The world of software engineering is filled with anecdotes that distill timeless truths from our field into short one-liners.

Expand the following application by adding a button that can be clicked to display a random anecdote from the field of software engineering:

```js
import { useState } from 'react';

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
    ];

    const [selected, setSelected] = useState(0);

    return <div>{anecdotes[selected]}</div>;
};

export default App;
```

Content of the file _index.js_ is same as in previous exercises.

Find out how to generate random numbers in JavaScript, eg. via search engine or on Mozilla Developer Network. Remember that you can test generating random numbers e.g. straight in the console of your
browser.

Your finished application could look something like this:  
![Result](./readmeimg/18a.png)

**WARNING** `create-react-app` will automatically turn your project into a git-repository unless you create your application inside of an existing git repository. **Most likely you do not want each of
your projects to be a separate repository**, so simply run the `rm -rf .git` command at the root of your application.

## 1.13\*: anecdotes step2

Expand your application so that you can vote for the displayed anecdote.  
![Displayed Anecdote](./readmeimg/19a.png)

**NB** store the votes of each anecdote into an array or object in the component's state. Remember that the correct way of updating state stored in complex data structures like objects and arrays is
to make a copy of the state.

You can create a copy of an object like this:

```js
const points = { 0: 1, 1: 3, 2: 4, 3: 2 };

const copy = { ...points };
// increment the property 2 value by one
copy[2] += 1;
```

OR a copy of an array like this:

```js
const points = [1, 4, 6, 3];

const copy = [...points];
// increment the value in position 2 by one
copy[2] += 1;
```

Using an array might be the simpler choice in this case. Searching the Internet will provide you with lots of hints on how to create a
[zero-filled array of a desired length](https://stackoverflow.com/questions/20222501/how-to-create-a-zero-filled-javascript-array-of-arbitrary-length/22209781).

## 1.14\*: anecdotes step3

Now implement the final version of the application that displays the anecdote with the largest number of votes:  
![Final Version](./readmeimg/20a.png)

If multiple anecdotes are tied for first place it is sufficient to just show one of them.

---

This was the last exercise for this part of the course and it's time to push your code to GitHub and mark all of your finished exercises to the exercise
[submission system](https://studies.cs.helsinki.fi/stats/courses/fullstackopen).
