const fetchData = async (usersInput) => {
  let url = `https://geo.ipify.org/api/v2/country,city?apiKey=${
    import.meta.env.VITE_API_KEY
  }`;

  if (usersInput) {
    url += `&ipAddress=${usersInput.trim()}`;
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
