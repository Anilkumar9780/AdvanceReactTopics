import { useContext } from "react";

// component
import FirstContext from "../FirstContexts";

export const useContextFirst = () => {
    return useContext(FirstContext);
};