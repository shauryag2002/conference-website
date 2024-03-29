/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import Select from "../select";
import Button from "../../Buttons/button";

const options1 = [
  {
    value: "Lightning talk",
    label: "Lightning talk(5mins)",
  },
  {
    value: "Session",
    label: "Session(20 - 25mins)",
  }
];

const options2= [
  {
    value: "Introductory and overview",
    label: "Introductory and overview",
  },
  {
    value: "Intermediate",
    label: "Intermediate",
  },
    {
    value: "Advance",
    label: "Advance",
  },
  {
    value: "Expert",
    label: "Expert",
  },
];

function StepThree({ setStep, setForm, data }) {
  const [value, setValue] = useState({});
  useEffect(() => {
    setForm({ ...data, ...value});
  }, [value]); 
  return (
    <form className="mt-3 lg:w-[auto]" onSubmit={(e) => setStep(e, 4)}>
      <h1 className="text-white font-bold text-4xl lg:text-3xl">
        Session Info
      </h1>
      <p className="mt-3 text-dark-600">
              Please provide your session title and description.
          </p>
          <p className="mt-4 text-sm text-dark-600">The sessions are expected to feature in-person presentations.</p>
      <div className="mt-3 border w-full border-solid border-y-dark-600 divide-y" />
          <div className="mt-10">
        <div className="text-dark-600 text-lg mb-4 text-gradient">Session Format</div>
        <Select
          options={options1}
          title="Select session format"
          setValue={(val) => setValue({...value, Format: val})}
          multi={false}
        />
        <div className="text-dark-600 text-lg mt-4 mb-4 text-gradient">Session Level</div>
        <Select
          options={options2}
          title="Select session level"
          setValue={(val) => setValue({...value, Level: val})}
          multi={false}
        />
        <div className="flex justify-between">
        <div
            className="mr-10 text-dark-600 cursor-pointer self-center ml-3"
            onClick={() => setStep(null, 2)}
            aria-label="Back to previous step"
          >
            Back
                  </div>
                  <Button
                    label='Next'
                    type="submit"
                    disabled={!data.Format || !data.Level && true}
                    className={`p-3 rounded-md mt-3 w-36 ${(!data.Format || !data.Level) && 'cursor-not-allowed opacity-50'}`}>
                      Next
                  </Button>
        </div>
      </div>
    </form>
  );
}

export default StepThree;