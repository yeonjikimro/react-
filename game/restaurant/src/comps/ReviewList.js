function ReviewListItem({ item }) {
    const { imgUrl, title, calorie, content } = item;
  
    return (
      <div>
        <img src={imgUrl} alt={title} />
        <div>{title}</div>
        <div>{calorie}</div>
        <div>{content}</div>
      </div>
    );
  }
  
  function ReviewList({ items }) {
    return (
        <ul className="FoodList">
            {items.map((item) => (
                <li>
                    <FoodListItem item={item} />
                </li>
            ))}
        </ul>
    );
  }
  
  export default ReviewList;
  