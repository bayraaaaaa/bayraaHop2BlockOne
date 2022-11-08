import Stars from "./Star";
const Teamprops4 = ({ name4, content4, profile, stars }) => {
  return (<>
    <div className="Textbox4">
      <div className="star">
        {stars.map((e) => {
          return <Stars />;
        })}
      </div>
      <div className="Content4" style={{ margin: 30 }}>
        {content4}
      </div>
      <div style={{ display: "flex" }}>
        <img className="Profile" src={profile} alt={profile} />
        <div className="Name" style={{ margin: 15 }}>
          {name4}
        </div>
      </div>
    </div>
    
    </>
  );
};
export default Teamprops4;
