import { TrashIcon } from "../../assets";

export const Task = (props) => {
  const { onClick, title, onChange, id, completed} = props;
  const styles = {
    title: {
      width: '85%',
      textDecorationLine: completed ? 'line-through' : 'none',
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-between p-4 border border-dark" style={{width: '70%', height: 40}}>
      <input onChange={(e) => onChange(e, id)} type={"checkbox"}></input>
      <div style={styles.title}>{title}</div>
      <div onClick={() => onClick(id)}>
        <TrashIcon />
      </div>
    </div>
  );
};
