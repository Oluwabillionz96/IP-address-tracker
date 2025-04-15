import "../styles/infoCard.css";

const InfoCard = ({ IP_Address, location, timeZone, ISP }) => {
  return (
    <div className="infoCard flex col">
      <div className="flex col">
        <p className="name">IP Address</p>
        <p className="value">{IP_Address}</p>
      </div>
      <div className="flex col">
        <p className="name">Location</p>
        <p className="value">{location}</p>
      </div>
      <div className="flex col">
        <p className="name">Time Zone</p>
        <p className="value">{timeZone}</p>
      </div>
      <div className="flex col">
        <p className="name">ISP</p>
        <p className="value">{ISP}</p>
      </div>
    </div>
  );
};

export default InfoCard;
