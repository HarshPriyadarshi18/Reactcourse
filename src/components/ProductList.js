export function ProductList({ children }) {
  return (
    <>
    <h2>products</h2>
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        padding: '20px',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
     
      {children}
    </div>
    </>
  );
}
