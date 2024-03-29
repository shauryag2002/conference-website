/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import Button from "../../Buttons/button";


function StepTwo({ setStep, setForm, data }) {
  return (
    <form className="mt-3 lg:w-[auto]" onSubmit={(e) => setStep(e, 3)}>
      <h1 className="text-white font-bold text-4xl lg:text-3xl">
        Session Info
      </h1>
      <p className="mt-3 text-dark-600">
       Please provide your session title and description
      </p>
      <div className="mt-3 border w-full border-solid border-dark-400 divide-y" />
      <div className="mt-10">
        <div className="text-dark-600 text-lg text-gradient">Session Title</div>
        <input
          required
          className="mt-1 w-full p-4 rounded-md focus:outline-none bg-transparent text-white"
          value={data.Title}
          style={{
            border: "1px solid #E50E99",
          }}
          placeholder="Enter your session title"
          onChange={(e) => setForm({ ...data, Title: e.target.value })} />
        <div className="text-dark-600 text-lg mt-4 text-gradient">Session Description</div>
        <textarea
          required
          className="mt-1 w-full p-4 rounded-md focus:outline-none bg-transparent text-white"
          value={data.Description}
          style={{
            border: "1px solid #E50E99",
          }}
          placeholder="Enter your session description"
          onChange={(e) => setForm({ ...data, Description: e.target.value })} />
        <div className="flex justify-between">
          <div
            className="mr-10 text-dark-600 cursor-pointer self-center ml-3"
            onClick={() => setStep(null, 1)}
            aria-label="Back to previous step"
          >
            Back
          </div>
          <Button label='Next'
            type="submit"
            disabled={!data.Description || !data.Title && true}
            className={`bg-tetiary-pink p-3 rounded-md text-white mt-3 w-36 ${(!data.Description || !data.Title) && 'cursor-not-allowed opacity-50'
              }`} >
            Next
          </Button>
        </div>
      </div>
    </form>
  );
}

export default StepTwo;