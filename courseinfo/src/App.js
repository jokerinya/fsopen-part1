const Header = ({ course }) => {
    return <h1>{course}</h1>;
};

const Content = ({ parts }) => {
    // loop all content parts
    return parts.map((obj, index) => {
        return <Part key={index} name={obj.name} exercises={obj.exercises} />;
    });
};

const Part = ({ name, exercises }) => (
    <p>
        {name} {exercises}
    </p>
);

const Total = ({ parts }) => {
    const totalExercises = parts.reduce((accumulator, currentObj) => accumulator + currentObj.exercises, 0);

    return <p>Number of exercises {totalExercises}</p>;
};

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

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    );
};

export default App;
