const fetchEvents = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/events`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    // console.log('Raw data from API:', data);
    return data;
  } catch (error) {
    console.error('Error fetching events:', error);
    return []; 
  }
};

export default fetchEvents;