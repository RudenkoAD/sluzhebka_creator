import { useId } from "react";

export function InputGroup({
  type = "text",
  placeholder,
  error,
  name,
}: {
  type?: string;
  placeholder: string;
  error?: string;
  name?: string;
}) {
  const id = useId();

  return (
    <div className="input-group has-validation mt-3">
      <div className={`form-floating ${error ? "is-invalid" : ""}`}>
        <input
          type={type}
          className={`form-control ${error ? "is-invalid" : ""}`}
          placeholder={placeholder}
          name={name}
          id={id}
        />
        <label htmlFor={id}>{placeholder}</label>
      </div>

      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
}
