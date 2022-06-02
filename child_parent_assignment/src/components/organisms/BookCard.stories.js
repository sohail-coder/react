import BookCard from "./BookCard";

export default {
  title: "bookcards",
  component: BookCard,
};
const Template = (args) => <BookCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  bookInfo: {
    title: "Intro to python",
    author: "Sohail",
    url: "https://images.blinkist.com/images/books/5f90514d6cee07000608d799/1_1/250.jpg",
    readTime: "15-mins",
  },
};
