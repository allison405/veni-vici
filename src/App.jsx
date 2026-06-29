import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [currentCatItem, setCurrentCatItem] = useState(null);
  const [banList, setBanList] = useState([]);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = import.meta.env.VITE_CAT_API_KEY || "";

  const breedPool = [
    "Abyssinian", "Aegean", "American Bobtail", "American Curl", "American Shorthair", 
    "American Wirehair", "Aphrodite Giant", "Balinese", "Bengal", "Birman", 
    "Bombay", "British Shorthair", "Burmese", "Burmilla", "Californian Spangled", 
    "Chausie", "Cheetoh", "Colorpoint Shorthair", "Cornish Rex", "Cymric", 
    "Devon Rex", "Donskoy", "Dragon Li", "Egyptian Mau", "Exotic Shorthair", 
    "Havana Brown", "Himalayan", "Japanese Bobtail", "Javanese", "Khao Manee", 
    "Korat", "Kurilian Bobtail", "LaPerm", "Maine Coon", "Manx", 
    "Munchkin", "Nebelung", "Norwegian Forest Cat", "Ocicat", "Oriental Shorthair", 
    "Persian", "Peterbald", "Pixie-bob", "Ragdoll", "Russian Blue", 
    "Savannah", "Scottish Fold", "Selkirk Rex", "Siamese", "Siberian", 
    "Singapura", "Snowshoe", "Somali", "Sphynx", "Tonkinese", 
    "Toyger", "Turkish Angora", "Turkish Van", "Ukrainian Levkoy"
  ];

  const fetchRandomCatItem = async () => {
    if (!API_KEY || loading) return;
    setLoading(true);

    const availableBreeds = breedPool.filter(breed => !banList.includes(breed));

    if (availableBreeds.length === 0) {
      alert("All available cat breeds have been banned!");
      setLoading(false);
      return;
    }

    const randomBreed = availableBreeds[Math.floor(Math.random() * availableBreeds.length)];
    const URL = `https://api.api-ninjas.com/v1/cats?name=${encodeURIComponent(randomBreed.trim())}`;

    try {
      const response = await fetch(URL, {
        headers: { "X-Api-Key": API_KEY }
      });
      if (!response.ok) throw new Error("Failed to fetch breed data");
      
      const data = await response.json();

      if (Array.isArray(data) && data.length > 0) {
        const catData = data[0];
        const name = catData?.name || "Unknown Breed";
        const origin = catData?.origin || "Unknown Origin";
        const weight = catData?.max_weight ? `${catData.max_weight} lbs` : "Unknown Weight";

        if (banList.includes(name) || banList.includes(origin) || banList.includes(weight)) {
          console.log(`Skipped ${name} because it matches an active ban trait.`);
          setLoading(false);
          return fetchRandomCatItem(); 
        }

        setCurrentCatItem((prevItem) => {
          if (prevItem) {
            setHistory((prevHistory) => {
              if (prevHistory.some((h) => h.name === prevItem.name)) return prevHistory;
              return [prevItem, ...prevHistory];
            });
          }
          return catData;
        });

      } else {
        setLoading(false);
        return fetchRandomCatItem();
      }
    } catch (error) {
      console.error("Error fetching cat item:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomCatItem();
  }, []);

  const addToBanList = (attribute) => {
    if (attribute && !banList.includes(attribute)) {
      setBanList([...banList, attribute]);
    }
  };

  const removeFromBanList = (attribute) => {
    setBanList(banList.filter((item) => item !== attribute));
  };

  const currentWeight = currentCatItem?.max_weight ? `${currentCatItem.max_weight} lbs` : "Unknown Weight";

  return (
    <div className="app-container">
      <div className="sidebar history-sidebar">
        <h2>History</h2>
        <p className="instruction">Past feline discoveries</p>
        <div className="history-list">
          {history.length === 0 ? (
            <p className="empty-text">No views recorded yet.</p>
          ) : (
            history.map((item, index) => (
              <div key={index} className="history-item">
                <img src={item.image_link} alt={item.name} className="history-thumb" />
                <p className="history-title">{item.name}</p>
              </div>
            ))
          )}
        </div>
      </div>

      <main className="main-content">
        <h1>The Cat Explorer</h1>
        <p className="subtitle">Discover breeds around the world. Ban any attributes you don't wish to track.</p>

        <button 
          className="discover-btn" 
          onClick={fetchRandomCatItem} 
          disabled={loading || !API_KEY}
        >
          {loading ? "Loading Cat Data..." : "Find the Next Breed"}
        </button>

        {currentCatItem && (
          <div className="space-card">
            <h2>{currentCatItem.name}</h2>

            <div className="image-container">
              <img src={currentCatItem.image_link} alt={currentCatItem.name} className="dog-image" />
            </div>

            <p className="explanation">
              The {currentCatItem.name} originates from {currentCatItem.origin || "parts unknown"}. 
              They typically grow to lengths of {currentCatItem.length || "various sizes"} with a maximum weight averaging around {currentWeight}.
            </p>

            <div className="attribute-buttons">
              <button
                className="attr-tag"
                onClick={() => addToBanList(currentCatItem.name)}
              >
                🐈 Breed: {currentCatItem.name}
              </button>

              <button
                className="attr-tag"
                onClick={() => addToBanList(currentCatItem.origin || "Unknown Origin")}
              >
                📍 Origin: {currentCatItem.origin || "Unknown Origin"}
              </button>

              <button
                className="attr-tag"
                onClick={() => addToBanList(currentWeight)}
              >
                ⚖️ Max Weight: {currentWeight}
              </button>
            </div>
          </div>
        )}
      </main>

      <div className="sidebar ban-sidebar">
        <h2>Ban List</h2>
        <p className="instruction">Click an item to lift the ban</p>
        <div className="ban-list">
          {banList.length === 0 ? (
            <p className="empty-text">No characteristics banned yet.</p>
          ) : (
            banList.map((item, index) => (
              <button
                key={index}
                className="ban-tag"
                onClick={() => removeFromBanList(item)}
              >
                {item} <span className="remove-icon">❌</span>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;