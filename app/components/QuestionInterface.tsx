import { AttemptQuestion } from "@/lib/types/attemptsTypes";
import QuestionComponent from "./QuestionComponent";

interface Option {
  alpha: string;
  text: string;
}

export interface QuestionItem {
  questionId: number;
  questionNo: number;
  mark: number[];
  questionText: string;
  options: Option[];
}

export const QuestionsList: QuestionItem[] = [
  {
    questionId: 1,
    questionNo: 1,
    mark: [1.0, 1.0],
    questionText:
      "Seyi, during a half-price sale, bought a book for the usual price and a second book for one-half the usual price. If she paid 90 kobo for the 2 books, what was the usual price for a book",
    options: [
      {
        alpha: "a",
        text: "60k",
      },
      {
        alpha: "b",
        text: "60k",
      },
      {
        alpha: "c",
        text: "60k",
      },
      {
        alpha: "d",
        text: "60k",
      },
      {
        alpha: "e",
        text: "60k",
      },
    ],
  },
  {
    questionId: 2,
    questionNo: 2,
    mark: [1.0, 1.0],
    questionText: "Car is to Engine as Rowboat is to ______.",
    options: [
      {
        alpha: "a",
        text: "Ocean",
      },
      {
        alpha: "b",
        text: "Wood",
      },
      {
        alpha: "c",
        text: "Human",
      },
      {
        alpha: "d",
        text: "Sail",
      },
      {
        alpha: "e",
        text: "Oar",
      },
    ],
  },
  {
    questionId: 3,
    questionNo: 3,
    mark: [1.0, 1.0],
    questionText: "What is the missing letter in this series? ...h g ? e d.",
    options: [
      {
        alpha: "a",
        text: "f",
      },
      {
        alpha: "b",
        text: "c",
      },
      {
        alpha: "c",
        text: "i",
      },
      {
        alpha: "d",
        text: "b",
      },
      {
        alpha: "e",
        text: "a",
      },
    ],
  },
  {
    questionId: 4,
    questionNo: 4,
    mark: [1.0, 1.0],
    questionText: "Who was the first President of Nigeria?",
    options: [
      {
        alpha: "a",
        text: "Muhammadu Buhari",
      },
      {
        alpha: "b",
        text: "Nnamdi Azikiwe",
      },
      {
        alpha: "c",
        text: "Olusegun Obasanjo",
      },
      {
        alpha: "d",
        text: "Yakubu Gowon",
      },
    ],
  },
  {
    questionId: 5,
    questionNo: 5,
    mark: [1.0, 1.0],
    questionText: "The Nigerian Constitution was first adopted in which year?",
    options: [
      {
        alpha: "a",
        text: "1960",
      },
      {
        alpha: "b",
        text: "1979",
      },
      {
        alpha: "c",
        text: "1999",
      },
      {
        alpha: "d",
        text: "1954",
      },
    ],
  },
];

const QuestionsList2: QuestionItem[] = [
  {
    questionId: 1,
    questionNo: 1,
    mark: [1.0, 1.0],
    questionText:
      "Each question consist of two words which have a certain relationship to each other followed by four pairs of related words, Select the pair which has the same relationship. CORPOREAL : SPIRITUAL",
    options: [
      {
        alpha: "a",
        text: "mesa : plateau",
      },
      {
        alpha: "b",
        text: "foreigner : immigrant",
      },
      {
        alpha: "c",
        text: "pedagogue : teacher",
      },
      {
        alpha: "d",
        text: "moron : savant",
      },
    ],
  },
  {
    questionId: 2,
    questionNo: 2,
    mark: [1.0, 1.0],
    questionText:
      "An inter-agency task force has representatives from 3 different agencies. Half of the task force members represent agency A, one-third represent agency B and three represent agency C. How many people are on the task force?",
    options: [
      {
        alpha: "a",
        text: "18",
      },
      {
        alpha: "b",
        text: "15",
      },
      {
        alpha: "c",
        text: "24",
      },
      {
        alpha: "d",
        text: "30",
      },
      {
        alpha: "e",
        text: "12",
      },
    ],
  },
  {
    questionId: 3,
    questionNo: 3,
    mark: [1.0, 1.0],
    questionText:
      "Each question consist of two words which have a certain relationship to each other followed by four pairs of related words, Select the pair which has the same relationship. TEN : DECIMAL",
    options: [
      {
        alpha: "a",
        text: "two : binary",
      },
      {
        alpha: "b",
        text: "four : quartet",
      },
      {
        alpha: "c",
        text: "seven : septet",
      },
      {
        alpha: "d",
        text: "five : quince",
      },
    ],
  },
  {
    questionId: 4,
    questionNo: 4,
    mark: [1.0, 1.0],
    questionText:
      "Who is responsible for the appointment of judges to the Federal High Court?",
    options: [
      {
        alpha: "a",
        text: "Supreme Court",
      },
      {
        alpha: "b",
        text: "National Assembly",
      },
      {
        alpha: "c",
        text: "President",
      },
      {
        alpha: "d",
        text: "Governor",
      },
    ],
  },
  {
    questionId: 5,
    questionNo: 5,
    mark: [1.0, 1.0],
    questionText: "What is the maximum tenure of the President of Nigeria?",
    options: [
      {
        alpha: "a",
        text: "8 years",
      },
      {
        alpha: "b",
        text: "6 years",
      },
      {
        alpha: "c",
        text: "5 years",
      },
      {
        alpha: "d",
        text: "4 years",
      },
    ],
  },
];

const selectedOption = [
  { id: 1, questionNo: 1, optionpicked: "a" },
  { id: 2, questionNo: 2, optionpicked: "b" },
  { id: 3, questionNo: 3, optionpicked: "c" },
  { id: 4, questionNo: 4, optionpicked: "b" },
  { id: 5, questionNo: 5, optionpicked: "a" },
];

const QuestionInterface = function ({
  questions,
}: {
  questions: AttemptQuestion[];
}) {
  return (
    <ul className="space-y-5">
      {questions.map((quest, i) => (
        <QuestionComponent
          key={i}
          quest={quest}
          i={i}
          selectedOption={selectedOption[quest.questionId - 1].optionpicked}
          isDisabled={true}
        />
      ))}
    </ul>
  );
};

export default QuestionInterface;
