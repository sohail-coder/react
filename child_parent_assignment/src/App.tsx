import Book from "./components/organisms/Book";

function App() {
  return (
    // <BookCard
    //   bookInfo={title:"intro to python";author:"Sohail";
    //             readTime="15"; url:"https://images.blinkist.com/images/books/5f90514d6cee07000608d799/1_1/250.jpg"}
    // />
    <div>
      <Book
        title="Intro to python"
        author="Sohail Shaik"
        isExplore={true}
        readTime={15}
        url="https://images.blinkist.com/images/books/5f90514d6cee07000608d799/1_1/250.jpg"
      />
    </div>
  );
}

export default App;
