import { useContext } from "react";

// component
import ThreeContext from "../ThreeContext";

export const useContextThree = () => {
    return useContext(ThreeContext);
};