import './styles.css';

export function Button({label, handleClick}) {
  // In react, we use JSX to define the structure of our components
  return (
    <button className='btn' onClick={handleClick}>
      {label}
    </button>
  );
}