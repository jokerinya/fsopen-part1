import { useState } from 'react';

const Header = ({ text }) => <h1>{text}</h1>;

const Anecdote = ({ anecdote, vote }) => (
    <div>
        <div>{anecdote}</div>
        <div>has {vote} votes</div>
    </div>
);

const Button = ({ text, onClick }) => {
    return <button onClick={onClick}>{text}</button>;
};

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
    ];

    const [selected, setSelected] = useState(0);
    // creates an array that has length of anecdotes and with 0 values
    const [points, setPoints] = useState(Array(anecdotes.length).fill(0));

    // index of most voted anecdote (renews every render)
    const mostVotesIndex = points.indexOf(Math.max(...points));

    const handleNextAnecdote = () => {
        // random number between 0 and anecdotes.length-1 (both included)
        const random = Math.floor(Math.random() * anecdotes.length);
        setSelected(random);
    };

    const handleVote = () => {
        // returns a new array with updated value
        setPoints(points.map((el, index) => (index === selected ? el + 1 : el)));
    };

    return (
        <>
            <Header text="Anecdote of the day" />
            <Anecdote anecdote={anecdotes[selected]} vote={points[selected]} />
            <Button text="vote" onClick={handleVote} />
            <Button text="next anectode" onClick={handleNextAnecdote} />
            <Header text="Anecdote with most votes" />
            <Anecdote anecdote={anecdotes[mostVotesIndex]} vote={points[mostVotesIndex]} />
        </>
    );
};
export default App;
