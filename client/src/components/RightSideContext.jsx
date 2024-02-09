import React, { createContext, useContext, useState } from 'react';
import RightCard from './RightCard';
import '../App.css';

// Create context
const RightSideContext = createContext();

// Custom hook to use the context
export const useRightSide = () => useContext(RightSideContext);

// Provider component to wrap the context around its children
  const RightSideProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  // const[title,setTitle]=useState("");
  // const[description,setDescription]=useState("");

  // Function to add a new card
  const addCard = ({ title, description ,image}) => {
    setCards([...cards, { title, description,image }]);
   
  };

  return (
    <RightSideContext.Provider value={{ cards, addCard }}>
    
      <div className="right-side-container">
        {/* <RightCard />
        <RightCard />
        <RightCard />
        <RightCard />
        <RightCard />
        <RightCard />
        <RightCard /> */}
        {/* <RightCard /> */}
        {/* <RightCard title="hello" description="123" image="images.jpg"/> */}
        {cards.map((card, index) => (
          <RightCard key={index} title={card.title} description={card.description} image={card.image}/>
        ))}
      </div>
      {children}
    </RightSideContext.Provider>
  
  );
};
export default RightSideProvider;