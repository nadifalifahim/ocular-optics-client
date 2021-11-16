import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Ocular: " + title;
    return () => {
      document.title = prevTitle;
    };
  });
};

export default useTitle;
