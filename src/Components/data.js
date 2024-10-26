const fetchEvents = async () => {
  try {
    const response = await fetch('/api/events');
    if (!(response.status===201)) {
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