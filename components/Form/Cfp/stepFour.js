/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import ActivityLoader from "../../illustration/activityLoader";
import Button from "../../Buttons/button";
import Link from "next/link";

function StepFour({ setStep, setForm, data }) {
  const [submitting, setSubmitting] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!data.Fullname || !data.Email || !data.Bio || !data.Social || !data.Title || !data.Description || !data.Format || !data.Level) {
      return toast.error("All fields are required", {
        duration: '6000'
      });
    }
    setSubmitting(true);
    try {
      const res = await axios.post('/api/submitForm', { data });
      setSubmitting(false);
      if (res.status === 200) {
        setDisabled(true);
        setStep(e, 'successful')
      }
    } catch (err) {

      setSubmitting(false);
      toast.error("Failed to submit feedback. Try again", {
        duration: '6000'
      });
    }
  };
  useEffect(() => {
    if (!data.Fullname || !data.Email || !data.Bio || !data.Social || !data.Title || !data.Description || !data.Format || !data.Level) {
      setDisabled(true);
    }
  }, [data]);
  return (
    <form className="mt-3 lg:w-[auto]" onSubmit={(e) => onSubmit(e)}>
      <h1 className="text-white font-bold text-4xl lg:text-3xl">
        Additional Information
      </h1>
      <p className="mt-3 text-dark-600">
        Notes will only be seen by reviewers during the CFP process. Therefore, it is important to use this space to explain any technical requirements or why you are best suited to speak on the subject, etc...
      </p>
      <div className="mt-3 border w-full border-solid border-y-dark-600 divide-y" />
      <div className="mt-10">
        <div className="text-dark-600 text-lg">Additional Information</div>
        <textarea
          className="mt-1 w-full p-4 rounded-md focus:outline-none bg-transparent text-white"
          style={{
            border: "1px solid #E50E99",
          }}
          value={data.AdditionalInfo}
          onChange={(e) => setForm({ ...data, AdditionalInfo: e.target.value })}
        />

        <div className="mt-6 text-dark-600 text-md">
          By clicking submit, this means you agree to follow the <span className="underline"><Link href="https://github.com/asyncapi/spec/blob/master/CODE_OF_CONDUCT.md" target="_blank" rel="noreferrer" aria-label="Code of Conduct">AsyncAPI Initiative Code of Conduct</Link></span>
        </div>
        <div className="flex justify-between">
          <div
            className="mr-10 text-dark-600 cursor-pointer"
            onClick={() => !disabled && setStep(null, 3)}
            aria-label="Back to previous step"
          >
            Back
          </div>
          <Button
            label="Submit"
            type="submit"
            className={`p-3 rounded-md mt-3 w-36 ${(submitting || disabled) && 'cursor-not-allowed opacity-50'}`}
            disabled={submitting || disabled}
          >
            {submitting ? <ActivityLoader /> : "Submit"}
          </Button>
        </div>
      </div>
    </form>
  );
}

export default StepFour;