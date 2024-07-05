import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "@/common/styles/scss/base.scss";
import { Provider } from "jotai";
import router from "./routes";
import GlobalModal from "./components/Modal";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000,
        // @ts-ignore
        // cacheTime: 30 * 60 * 1000 // 30 min
        gcTime: Infinity
      }
    }
  });

  const checkBrowserSize = ($rootStyle) => {
    if (!$rootStyle) {
      return;
    }
    let heightPerOne = window.innerHeight * 0.01;
    $rootStyle.setProperty("--vh", `${heightPerOne}px`);
  };
  const handleResize = () => {
    checkBrowserSize(document.documentElement.style);
  };
  React.useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider>
          <ReactQueryDevtools initialIsOpen={false} />
          <RouterProvider router={router} />
          <GlobalModal />
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
