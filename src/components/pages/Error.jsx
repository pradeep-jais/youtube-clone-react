const Error = ({ errorMessage }) => {
  return (
    <main
      style={{
        height: 'calc(100vh - 86px)',
      }}
    >
      <div style={{ margin: 'auto', textAlign: 'center', paddingTop: '5rem' }}>
        <h1>Ops</h1>
        <h4>Something went wrong!</h4>
        <p
          style={{
            color: 'var(--clr-white)',
            textDecoration: 'underline',
            textUnderlineOffset: '0.25rem',
          }}
        >
          {errorMessage}
        </p>
      </div>
    </main>
  );
};
export default Error;
