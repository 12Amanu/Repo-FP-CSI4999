//The Media page component takes in data as a prop, which is an array of media items (like movies, books, etc.). 
//It maps through each item in the array and creates a Card component for each one, 
//passing relevant data (like cover image, rating, review count, title, release year, and more) to the Card component.
import React from "react"; //import the React library into the file. 
import "./Media.css"; //import styling for media page
import Card from "../../components/Card/Card.js"; //// Import an array called data, which contains information about various media items 

// Media component renders a list of cards from the data prop
const Media = ({ data }) => {
  // Use .map() to loop through the data and create a Card component for each item
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id} // Each card needs a unique key to improve rendering performance
        coverImage={item.coverImage}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        accessMedia={item.accessMedia}
        mediaTitle={item.mediaTitle}
        mediaType={item.mediaType}
        yearsOfRelease={item.descriptions.yearsOfRelease}
        synopsis={item.descriptions.synopsis}
        cast={item.descriptions.cast}
        crew={item.descriptions.crew}
        author={item.descriptions.author}
        location={item.descriptions.location}
      />
    );
  });

  // Render the cards inside a section element
  return <section className="section-experience-list">{cards}</section>;
};

export default Media;
