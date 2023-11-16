import { createRoot } from "react-dom/client";
import axios from "axios";

import "bootstrap/scss/bootstrap.scss";
import { InputGroup } from "./components/input-group/input-group";

const root = createRoot(document.getElementById("app")!);
root.render(
  <>
    <h1>Welcome to our website</h1>

    <div className="container">
      <form method="post">
        <select className="form-select" aria-label="Default select example">
          <option value="club6">Клуб шестерки</option>
        </select>

        <InputGroup placeholder="Группа" />
        <InputGroup placeholder="ФИО проводящего в родильном падеже" />
        <InputGroup placeholder="ФИО проводящего" />
        <InputGroup placeholder="Дата" type="date" />
        <InputGroup placeholder="Время начала" type="time" />
        <InputGroup placeholder="Время окончания" type="time" />
        <InputGroup placeholder="Количество людей" type="number" />
        <InputGroup placeholder="Название мероприятия" />

        <button type="submit" className="btn btn-primary mt-2">
          Скачать служебку
        </button>
      </form>
    </div>
  </>
);
