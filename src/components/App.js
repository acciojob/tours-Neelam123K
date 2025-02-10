import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";


const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    
        const toursData = [
          {
            "name": "Golden Triangle Tour",
            "image": "https://tse1.mm.bing.net/th?id=OIP.euKOB8SdXoOlnl9YVW1UXwHaEo&pid=Api",
            "price": "₹25,000 per person",
            "info": "Experience the cultural richness of India's famed Golden Triangle, covering Delhi, Agra, and Jaipur over 4 days and 3 nights. This package offers guided tours of historic landmarks, including the Taj Mahal and Jaipur's palaces.",
            "link": "https://www.tripadvisor.com/Attractions-g297615-Activities-c42-t224-Gurugram_Gurgaon_Gurgaon_District_Haryana.html?utm_source=chatgpt.com"
          },
          {
            "name": "Jodhpur and Jaisalmer Tour",
            "image": "https://tse3.mm.bing.net/th?id=OIP.nkVEYm3A_9INSJFYNfzTzQHaGN&pid=Api",
            "price": "₹8,999 per person",
            "info": "Explore the royal heritage of Rajasthan with a 4-night, 5-day tour covering Jodhpur and Jaisalmer. Highlights include the Mehrangarh Fort and the sand dunes of Jaisalmer.",
            "link": "https://www.erajasthantourism.net/rajasthan-tour-packages-from-gurgaon/?utm_source=chatgpt.com"
          },
          {
            "name": "LohonoStays Bamboo House - Gurgaon",
            "image": "https://tse4.mm.bing.net/th?id=OIP.aDEXXWI3bRZW1GzWFuVpxwAAAA&pid=Api",
            "price": "₹22,187 per person",
            "info": "Enjoy a luxurious 2-night stay at the LohonoStays Bamboo House in Gurgaon. This package includes airport pickup and drop-off, selected meals, and one activity.",
            "link": "https://www.makemytrip.com/holidays-india/2nights-gurgaon-tour-packages.html?utm_source=chatgpt.com"
          },
          {
            "name": "Rajasthan Tour from Gurgaon",
            "image": "https://tse3.mm.bing.net/th?id=OIP.EhSpJN9rDYDluTkJ_JibAgHaE8&pid=Api",
            "price": "₹8,999 per person",
            "info": "Discover the vibrant culture of Rajasthan with tours departing from Gurgaon. Packages include destinations like Jaipur, Udaipur, and Jodhpur.",
            "link": "https://www.erajasthantourism.net/rajasthan-tour-packages-from-gurgaon/?utm_source=chatgpt.com"
          },
          {
            "name": "Gurgaon Family Tour Packages",
            "image": "https://tse2.mm.bing.net/th?id=OIP.WwBK36ishlIsh1vSGM6qpgHaFj&pid=Api",
            "price": "Varies",
            "info": "Plan a family getaway with customized packages that include stays in Gurgaon. Options range from luxury accommodations to budget-friendly stays, with various activities suitable for all ages.",
            "link": "https://www.makemytrip.com/holidays-india/gurgaon-family-packages.html?utm_source=chatgpt.com"
          }
        ]
        setTours(toursData);
        setLoading(false);
      },[] );

      const handleDeleteTour = (id) => {
        setTours(tours.filter((tour) => tour.id !== id));
      };

      if (loading) return <Loading />

    return(
      <div main id="main" className="container">
        {tours.length === 0 ? (
          <div>
            <h2>No tours left</h2>
            <button onClick={() => setLoading(true)}>Refesh</button>
          </div>
        ) : (
          <Tours tours={tours} onDelete={handleDeleteTour} />
        )}
      </div>
    )
}
export default App;
