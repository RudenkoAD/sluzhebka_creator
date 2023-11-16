import { FormEvent } from "react";
import axios from "axios";

import { InputGroup } from "../input-group/input-group";

export function App() {
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log(data);

    axios.postForm("/club6", data).then((response) => {
      console.log(response);
    });
  };

  return (
    <>
      <h1>Welcome to our website</h1>

      <div className="container">
        <form method="post" onSubmit={(e) => submit(e)}>
          <select className="form-select" aria-label="Default select example">
            <option value="club6">Клуб шестерки</option>
          </select>

          <InputGroup name="group" placeholder="Группа" />
          <InputGroup
            name="genitive_name"
            placeholder="ФИО проводящего в родильном падеже"
          />
          <InputGroup name="name" placeholder="ФИО проводящего" />
          <InputGroup name="date" placeholder="Дата" type="date" />
          <InputGroup
            name="start_time"
            placeholder="Время начала"
            type="time"
          />
          <InputGroup
            name="end_time"
            placeholder="Время окончания"
            type="time"
          />
          <InputGroup
            name="num_people"
            placeholder="Количество людей"
            type="number"
          />
          <InputGroup name="event_name" placeholder="Название мероприятия" />

          <button type="submit" className="btn btn-primary mt-2">
            Скачать служебку
          </button>
        </form>
      </div>
    </>
  );
}
