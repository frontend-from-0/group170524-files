import { useParams } from "react-router";

export const QuotePage = () => {
  const params = useParams();
  const { id } = params;

  return id && <h1>This is quote with id: {id}</h1>;
};
