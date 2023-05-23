interface Title {
     title: string;
}

const Heading = ({ title }: Title) => {
  return <h1>{title}</h1>;
};

export default Heading