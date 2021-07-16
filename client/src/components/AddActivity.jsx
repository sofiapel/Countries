import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getCountries, orderAsc } from "../actions";
import { postActivity } from "../actions";

function AddActivity() {
  const countries = useSelector((state) => state.countriesLoaded);
  const dispatch = useDispatch();
  const { push } = useHistory();
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    name: "",
    difficulty: 1, //tengo q pasarlo a number después
    duration: "",
    season: "",
    countries: [],
  });
  useEffect(() => {
    dispatch(getCountries());
    //dispatch(orderAsc())

    
  }, []);

  function handleChange(e) {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  }
  function handleChangeActivity(e) {
    setValues((values) => ({
      ...values,
      countries: [...values.countries, e.target.value],
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(
      "before",
      values.name,
      values.difficulty,
      values.duration,
      values.season,
      values.countries
    );
    dispatch(postActivity(values));
    console.log(
      "after",
      values.name,
      values.difficulty,
      values.duration,
      values.season,
      values.countries
    );
    setValues({
      name: "",
      difficulty: 1,
      duration: "",
      season: "",
      countries: [],
    });

    //document.querySelector("#name").value = "";
    //document.querySelector("#duration").value = "";
    //document.querySelector('#difficulty').selectedIndex = 0;
    //document.querySelector('#season').selectIndex = 0;
    //document.querySelector('#countries').selectIndex = 0;

  }
  countries.sort(function compare(a,b){
    if ( a.name < b.name ){
        return -1;
    }
    if ( a.name > b.name ){
    return 1;
    }
    return 0;
  })

  console.log(countries)

  return (
    <div>
      <h1>Area en construccion por tiempo indefinido</h1>
      <h3>Add a activity!</h3>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          id="name"
          name="name"
          values={values.name}
          onChange={handleChange}
        />
        <label>Difficulty:</label>
        <select id="difficulty" name="difficulty" onChange={handleChange}>
          <option defaultValue={true}></option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>

        <label>Duration:</label>
        <input
          id="duration"
          name="duration"
          value={values.duration}
          onChange={handleChange}
        />
        <label>Season:</label>
        <select id='season' name="season" onChange={handleChange}>
          <option defaultValue={true}></option>
          <option value="summer">summer</option>
          <option value="winter">winter</option>
          <option value="spring">spring</option>
          <option value="autumn">autumn</option>
        </select>
        <label>Select Country:</label>
        <select
          name="countries"
          multiple="multiple"
          onChange={handleChangeActivity}
        >
            <option value=''></option>
          {countries &&
            countries.map((c) => {
              return (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              );
            })}
        </select>
        <button type="submit">Finish</button>
      </form>
      {/*<button onClick={handleFinish}>Finish</button>*/}
    </div>
  );
}

export default AddActivity;
