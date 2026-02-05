import React, { createContext, useMemo, useState } from "react";

export const QuizContext = createContext(null);

export default function QuizProvider({ children }) {
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const selectAnswer = (qIndex, answer) => {
    setSelectedAnswers((prev) => ({ ...prev, [qIndex]: answer }));
  };

  const resetAnswers = () => setSelectedAnswers({});

  const value = useMemo(
    () => ({ selectedAnswers, selectAnswer, resetAnswers }),
    [selectedAnswers]
  );

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}
