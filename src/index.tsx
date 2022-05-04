import App from "./App";
import ReactDOM from "react-dom/client";

import { store } from "./store/index";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <ChakraProvider cssVarsRoot={undefined}>
      <App />
    </ChakraProvider>
  </Provider>
);
