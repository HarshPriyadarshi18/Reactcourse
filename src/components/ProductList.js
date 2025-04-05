export function ProductList(props) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between', // push items from start to end
        gap: '16px',
        padding: '20px',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {props.children}
    </div>
  );
}
