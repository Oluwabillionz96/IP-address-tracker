import { useEffect, useState } from "react";
import InfoCard from "../components/InfoCard";
import "../styles/homePage.css";
import fetchData, { Location } from "../logics/fetchData";
import Map from "../components/Map";
import Spinner from "../components/Spinner";

const HomePage = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState("");
  useEffect(() => {
    fetchData().then((data) => {
      setData(data);
    //   setLoading(false);
    });
  }, []);
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
              if (address) {
                setLoading(true);
                fetchData(address).then((data) => {
                  setData(data);
                  setLoading(false);
                });
              } else {
                alert("Input must not be empty");
              }
            }}
          >
            <img
              src="./icon-arrow.svg"
              alt="A white svg arrow icon facing right"
            />
          </button>
        </div>
      </section>
      {!loading && data && Object.keys(data).length > 0 && (
        <InfoCard
          IP_Address={data?.ip}
          timeZone={data.location ? ` UTC ${data?.location?.timezone}` : ""}
          ISP={data?.isp}
          location={<Location data={data} />}
        />
      )}
      {loading ? (
        <Spinner />
      ) : (
        <div className="map">
          {data && data.location && (
            <Map coordinates={[data.location.lat, data.location.lng]} />
          )}
        </div>
      )}
    </>
  );
};

export default HomePage;
