// import {Versions} from './components/versions'

import { RouterProvider } from "react-router-dom";
import { router } from "./router";

export function App(): JSX.Element {
  return (
    <>
      <RouterProvider router={router} />
      {/* <Versions/> */}
    </>
  );
}
