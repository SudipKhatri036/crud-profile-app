import { useFormik } from "formik";
import { addProfileSchema } from "../schema";
import useFetchCountries from "../hooks/useFetchCountries";

function Form({ initialState, onSubmit, selectedFormState }) {
  const { countries } = useFetchCountries("https://restcountries.com/v3.1/all");

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: selectedFormState || initialState,
    validationSchema: addProfileSchema,
    validateOnChange: true,
    onSubmit,
    enableReinitialize: true,
  });

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <div className="flex">
          <label htmlFor="name">
            <span className="required-el">*</span>Full Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={values.name}
            onBlur={handleBlur}
            className={errors.name && touched.name && "error-input"}
          />
        </div>
        {errors.name && touched.name ? (
          <p className="error">{errors.name}</p>
        ) : null}
      </div>

      <div>
        <div className="flex">
          <label htmlFor="phoneNum">
            <span className="required-el">*</span> Phone Number:
          </label>
          <input
            type="number"
            name="phoneNum"
            id="phoneNum"
            onChange={handleChange}
            value={values.phoneNum}
            onBlur={handleBlur}
            className={errors.phoneNum && touched.phoneNum && "error-input"}
          />
        </div>
        {errors.phoneNum && touched.phoneNum ? (
          <p className="error">{errors.phoneNum}</p>
        ) : null}
      </div>

      <div>
        <div className="flex">
          <label htmlFor="email">
            <span className="required-el">*</span> Email:
          </label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur}
            className={errors.email && touched.email && "error-input"}
          />
        </div>
        {errors.email && touched.email ? (
          <p className="error">{errors.email}</p>
        ) : null}
      </div>

      <div className="flex">
        <label htmlFor="name">Dob:</label>
        <input
          type="date"
          name="dob"
          id="dob"
          onChange={handleChange}
          value={values.dob}
          onBlur={handleBlur}
        />
      </div>

      <div>
        <div className="flex">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            name="city"
            id="city"
            onChange={handleChange}
            value={values.city}
            onBlur={handleBlur}
          />
        </div>
      </div>

      <div>
        <div className="flex">
          <label htmlFor="district">District:</label>
          <input
            type="text"
            name="district"
            id="district"
            onChange={handleChange}
            value={values.district}
            onBlur={handleBlur}
          />
        </div>
      </div>

      <div>
        <div className="flex">
          <label htmlFor="province">Province:</label>
          <select
            name="province"
            id="province"
            onChange={handleChange}
            value={values.province}
            onBlur={handleBlur}
          >
            <option>Select</option>
            {Array.from({ length: 7 }).map((_, i) => {
              return (
                <option key={i} value="Province ${i + 1}">
                  Province {i + 1}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <div className="flex">
        <label htmlFor="country">Country:</label>
        <select
          name="country"
          id="country"
          onChange={handleChange}
          value={values.country}
          onBlur={handleBlur}
        >
          {countries.length &&
            countries.map((country) => {
              return (
                <option key={country.name.common} value={country.name.common}>
                  {country.name.common}
                </option>
              );
            })}
        </select>
      </div>

      <div>
        <div className="flex">
          <label htmlFor="profile">Profile-picture:</label>
          <input
            type="file"
            name="profile"
            id="profile"
            accept="image/png"
            onChange={(e) => {
              setFieldValue("profile", e.currentTarget.files[0]);
            }}
            onBlur={handleBlur}
          />
        </div>
        {errors.profile && touched.profile ? (
          <p className="error">{errors.profile}</p>
        ) : null}
      </div>

      <div className="btn-container">
        <button type="submit" className="btn">
          {selectedFormState ? "Update" : "Submit"}
        </button>
      </div>
    </form>
  );
}

export default Form;
