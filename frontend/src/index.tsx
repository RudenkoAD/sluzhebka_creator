import { createRoot } from "react-dom/client";
import axios from "axios";

import "bootstrap/scss/bootstrap.scss";

const root = createRoot(document.getElementById("app")!);
root.render(
  <>
    <h1>Welcome to our website</h1>

    <div className="container">
      <form>
        <select className="form-select" aria-label="Default select example">
          <option defaultValue="selected">Open this select menu</option>
          <option value="club6">Клуб шестерки</option>
        </select>

        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </div>
  </>
);
