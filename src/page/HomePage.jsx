import { useEffect, useState } from "react";
import InfoCard from "../components/InfoCard";
import "../styles/homePage.css";
import fetchData, { Location } from "../logics/fetchData";
import Map from "../components/Map";

const HomePage = () => {
  const [data, setData] = useState({});
  const [address, setAddress] = useState("");
  useEffect(() => {
    fetchData().then((data) => {
      setData(data);
      localStorage.setItem("data", JSON.stringify(data));
      console.log("fetched data");
    });
  }, []);
  //   console.log(data);
  return (
    <>
      <section className="hero-section">
        <h1>IP Address Tracker</h1>
        <div className="input-container">
          <input
            type="text"
            name="ip-address"
            id="ip-address"
            placeholder="Search for any IP address or domain "
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <button
            onClick={() => {
              fetchData(address).then((data) => {
                setData(data);
                console.log(data);
                localStorage.setItem("data", JSON.stringify(data));
                console.log("fetched data");
              });
            }}
          >
            <img
              src="./icon-arrow.svg"
              alt="A white svg arrow icon facing right"
            />
          </button>
        </div>
      </section>
      {data && Object.keys(data).length > 0 && (
        <InfoCard
          IP_Address={data?.ip}
          timeZone={data.location ? ` UTC ${data?.location?.timezone}` : ""}
          ISP={data?.isp}
          location={<Location data={data} />}
        />
      )}
      <div className="map">
        {data && data.location && (
          <Map coordinates={[data.location.lat, data.location.lng]} />
        )}
      </div>
    </>
  );
};

export default HomePage;
