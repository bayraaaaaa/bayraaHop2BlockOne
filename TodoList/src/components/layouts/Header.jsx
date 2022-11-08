export const Header = () => {
    const styles = {
        header: {
            backgroundColor: 'black',
            // height: 60,
            borderBottom: '1px solid black',
            display: 'flex',
            alignItems: 'center',
            padding: 20,
            color: 'grey',
        }
    }
  return (
    <div style={styles.header}>
      <h4>ToDo List</h4>
    </div>
  );
};
