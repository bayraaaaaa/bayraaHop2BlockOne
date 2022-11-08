export const Input = (props) => {
  const { reference, value } = props;
  const styles = {
    input: {
      border: 0,
      width: "100%",
      height: "100%",
      outline: 'none'
    },
    container: {
      padding: 4,
      width: 300,
      height: 40,
      border: '1px solid black',
      borderRadius: 4,
    }
  };
  return (
    <div style={styles.container}>
      <input type="text" style={styles.input} value={value} placeholder="New Task" ref={reference} />
    </div>
  );
};
