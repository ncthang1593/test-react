export default function Child({ childParent }) {
  return (
    <div>
      <p>child</p>
      <button onClick={() => childParent(123)}>Child to parent</button>
    </div>
  );
}
