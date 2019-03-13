import { mockBusinessContext } from "./context";

export const BusinessContext = {
  Consumer(props: any) {
    return props.children(mockBusinessContext);
  },
};
