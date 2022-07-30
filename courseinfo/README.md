# Exercises

> ## Exercises 1.1.-1.2.

Exercises are submitted through GitHub and by marking completed exercises in the [submission application](https://studies.cs.helsinki.fi/stats/courses/fullstackopen).

You may submit all the exercises of this course into the same repository, or use multiple repositories. If you submit exercises of different parts into the same repository, please use a sensible
naming scheme for the directories.

One very functional file structure for the submission repository is as follows:

```bash
part0
part1
  courseinfo
  unicafe
  anecdotes
part2
  phonebook
  countries
```

See this example [submission repository!](https://github.com/fullstack-hy2020/example-submission-repository)

For each part of the course there is a directory, which further branches into directories containing a series of exercises, like "unicafe" for part 1.

For each web application for a series of exercises, it is recommended to submit all files relating to that application, except for the directory node_modules.

The exercises are submitted **one part at a time.** When you have submitted the exercises for a part of the course you can no longer submit undone exercises for the same part.

Note that in this part, there are more exercises besides those found below. _Do not submit your work_ until you have completed all of the exercises you want to submit for the part.

## 1.1: course information, step1

_The application that we will start working on in this exercise will be further developed in a few of the following exercises. In this and other upcoming exercise sets in this course, it is enough to
only submit the final state of the application. If desired, you may also create a commit for each exercise of the series, but this is entirely optional._

Use `create-react-app` to initialize a new application. Modify `index.js` to match the following

```js
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
```

and _App.js_ to match the following

```js
const App = () => {
    const course = 'Half Stack application development';
    const part1 = 'Fundamentals of React';
    const exercises1 = 10;
    const part2 = 'Using props to pass data';
    const exercises2 = 7;
    const part3 = 'State of a component';
    const exercises3 = 14;

    return (
        <div>
            <h1>{course}</h1>
            <p>
                {part1} {exercises1}
            </p>
            <p>
                {part2} {exercises2}
            </p>
            <p>
                {part3} {exercises3}
            </p>
            <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
        </div>
    );
};

export default App;
```

and remove extra files (App.css, App.test.js, index.css, logo.svg, setupTests.js, reportWebVitals.js)).

Unfortunately, the entire application is in the same component. Refactor the code so that it consists of three new components: _Header_, _Content_, and _Total_. All data still resides in the _App_
component, which passes the necessary data to each component using props. _Header_ takes care of rendering the name of the course, _Content_ renders the parts and their number of exercises and _Total_
renders the total number of exercises.

Define the new components in file _App.js_.

The _App_ component's body will approximately be as follows:

```js
const App = () => {
  // const-definitions

  return (
    <div>
      <Header course={course} />
      <Content ... />
      <Total ... />
    </div>
  )
}
```

**WARNING** `create-react-app` automatically makes the project a git repository unless the application is created within an already existing repository. Most likely you **do not want** the project to
become a repository, so run the command `rm -rf .git` in the root of the project.

## 1.2: course information, step2

Refactor the _Content_ component so that it does not render any names of parts or their number of exercises by itself. Instead it only renders three _Part_ components of which each renders the name
and number of exercises of one part.

```js
const Content = ... {
  return (
    <div>
      <Part .../>
      <Part .../>
      <Part .../>
    </div>
  )
}
```

Our application passes on information in quite a primitive way at the moment, since it is based on individual variables. This situation will improve soon.

## Exercises 1.3.-1.5.

_We continue building the application that we started working on in the previous exercises. You can write the code into the same project, since we are only interested in the final state of the
submitted application._

**Pro-tip:** you may run into issues when it comes to the structure of the _props_ that components receive. A good way to make things more clear is by printing the props to the console, e.g. as
follows:

```js
const Header = (props) => {
    console.log(props);
    return <h1>{props.course}</h1>;
};
```

## 1.3: course information step3

Let's move forward to using objects in our application. Modify the variable definitions of the _App_ component as follows and also refactor the application so that it still works:

```js
const App = () => {
    const course = 'Half Stack application development';
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    };
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    };
    const part3 = {
        name: 'State of a component',
        exercises: 14
    };

    return <div>...</div>;
};
```

## 1.4: course information step4

And then place the objects into an array. Modify the variable definitions of _App_ into the following form and modify the other parts of the application accordingly:

```js
const App = () => {
    const course = 'Half Stack application development';
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ];

    return <div>...</div>;
};
```

**NB** at this point you can assume that there are always three items, so there is no need to go through the arrays using loops. We will come back to the topic of rendering components based on items
in arrays with a more thorough exploration in the next part of the course.

However, do not pass different objects as separate props from the _App_ component to the components _Content_ and _Total_. Instead, pass them directly as an array:

```js
const App = () => {
    // const definitions

    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Total parts={parts} />
        </div>
    );
};
```

## 1.5: course information step5

Let's take the changes one step further. Change the course and its parts into a single JavaScript object. Fix everything that breaks.

```js
const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    };

    return <div>...</div>;
};
```

## 1.6 - 1.11: [unicafe](https://github.com/jokerinya/fsopen-part1/tree/main/unicafe)

## 1.12 - 1.14: [anecdotes](https://github.com/jokerinya/fsopen-part1/tree/main/anecdotes)
