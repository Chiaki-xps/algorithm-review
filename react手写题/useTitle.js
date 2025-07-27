import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, []);

  return;
};

export default useTitle;
