const fetchData = async (usersInput) => {
  let url = `https://geo.ipify.org/api/v2/country,city?apiKey=${
    import.meta.env.VITE_API_KEY
  }`;

  if (usersInput) {
    if (usersInput.includes("https://") || usersInput.includes("http://")) {
      usersInput = usersInput.split("://")[1].toLowerCase();
    }

    if (usersInput.toLowerCase().includes(".com")) {
      url += `&domain=${usersInput.trim()}`;
    } else if (!isNaN(Number(usersInput.split(".")[0]))) {
      url += `&ipAddress=${usersInput.trim()}`;
    } else {
      alert("Invalid Input");
    }
  }
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export function Location({ data }) {
  if (data.location === undefined) {
    return "";
  } else {
    return `${data.location.region}, ${data.location.city}`;
  }
}

export default fetchData;
