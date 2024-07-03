interface article {
  _id: string;
  title: string;
  image: string;
  article: string;
  category: string;
  createAt: Date;
  author: { _id: string; name: string; lastName: string };
}

export default article;
