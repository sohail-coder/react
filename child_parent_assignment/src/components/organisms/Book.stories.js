import Book from "./Book";

export default {
  title: "Organism/Book",
  component: Book,
};
const Template = (args) => <Book {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  // bookInfo: {
  title: "Intro to python",
  author: "Sohail Shaik",
  url: "https://images.blinkist.com/images/books/5f90514d6cee07000608d799/1_1/250.jpg",
  readTime: "15",
  // },
  isExplore: true,
};
