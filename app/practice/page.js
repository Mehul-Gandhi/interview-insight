"use client";

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const DynamicVideoPane = dynamic(() => import('../components/UserVideoPane').then((module) => module.default), {
  loading: () => <p>Loading...</p>,
  ssr: false, // Disable server-side rendering for this component
});

const PracticePage = ({ task }) => {
  const [isComponentLoaded, setIsComponentLoaded] = useState(false);

  if (task == null || task == "") {
    task = "Help a student understand double descent and why it is important in Machine Learning.";
  }
  const taskPrefix = "You are a student. A teacher has been tasked with the following: ";
  const taskSuffix = ". You should ask questions and act confused. Previous conversation: ";

  useEffect(() => {
    setIsComponentLoaded(true);
  }, []);

  return (
    <>
      {isComponentLoaded && 
      <div className="w-screen h-full bg-gradient-to-b from-jetBlack-400 to-jetBlack-600">
        <h1 className="text-center text-platinum-500 text-3xl font-bold p-4 pt-16">Task: {task}</h1>
        <DynamicVideoPane taskPrefix={taskPrefix} task={task} taskSuffix={taskSuffix} />
      </div>
      }
    </>
  );
};

export default PracticePage;