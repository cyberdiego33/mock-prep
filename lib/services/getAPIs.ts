import { getDashboardQuizzes } from "../actions/dashboardAttempts";

export const getQuizzesFunc = async function () {
  const response = await fetch("http://localhost:3000/api/quizzes");

  const quizzes = await response.json();

  return quizzes;
};

export const getQuizzByIdFunc = async function (id: string) {
  const response = await fetch(`http://localhost:3000/api/quizzes/${id}`);

  const quiz = await response.json();

  return quiz;
};

export const getQuizAttempts = async function () {
  const data = await getDashboardQuizzes();

  return data;
};
