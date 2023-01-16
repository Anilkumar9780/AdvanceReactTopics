import { useContext } from "react";

//component
import SecondContext from "../SecondContext";

export const useContextSecond = () => {
    return useContext(SecondContext);
};