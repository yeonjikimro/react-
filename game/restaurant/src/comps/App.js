import { useState } from 'react';
import ReviewList from './ReviewList';
import mockitems from '../mock.json';

function App() {
  const [order, setOrder] = useState('createdAt');
  const [items, setItems] = useState(mockitems);

  const handleNewestClick = () => setOrder('createdAt');
  const handleCalorieClick = () => setOrder('calorie');
  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  }

  const sortedItems = items.sort((a, b) => b[order] - a[order]);
  return (
    <div>
      <button onClick={handleNewestClick}>최 신  순</button>
      <button onClick={handleCalorieClick}>칼로리순</button>
      <ReviewList items={sortedItems} />
    </div>
  );
}

export default App;
