export const Button = (props) => {
  const { onClick, value } = props;
  const styles = {
    button: {
      border: "1 solid blue",
      borderRadius: 5,
      width: 100,
      height: 30,
      outline: "none",
      backgroundColor: "#89CFF0",
      color: "white",
    },
    container: {
      padding: 4,
      width: 300,
      height: 40,
      border: "1px solid black",
      borderRadius: 4,
    },
  };
  return (
    <button style={styles.button} onClick={onClick}>
      {value}
    </button>
  );
};
