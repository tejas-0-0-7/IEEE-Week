const fetchEvents = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/events');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Raw data from API:', data);
    return data;
  } catch (error) {
    console.error('Error fetching events:', error);
    return []; 
  }
};

export default fetchEvents;