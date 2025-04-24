export default function Counter({ count, setCount, step }) {
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <button className="btn" onClick={() => setCount((c) => c - step)}>
          -
        </button>
        <span>Count: {count}</span>
        <button className="btn" onClick={() => setCount((c) => c + step)}>
          +
        </button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days of today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
