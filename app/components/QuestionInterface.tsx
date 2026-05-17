import QuestionComponent from "./QuestionComponent";

interface Option {
  alpha: string;
  to: string;
}

export interface QuestionItem {
  id: number;
  questionNo: number;
  mark: number[];
  question: string;
  options: Option[];
}

export const QuestionsList: QuestionItem[] = [
  {
    id: 1,
    questionNo: 1,
    mark: [1.0, 1.0],
    question:
      "Seyi, during a half-price sale, bought a book for the usual price and a second book for one-half the usual price. If she paid 90 kobo for the 2 books, what was the usual price for a book",
    options: [
      {
        alpha: "a",
        to: "60k",
      },
      {
        alpha: "b",
        to: "60k",
      },
      {
        alpha: "c",
        to: "60k",
      },
      {
        alpha: "d",
        to: "60k",
      },
      {
        alpha: "e",
        to: "60k",
      },
    ],
  },
  {
    id: 2,
    questionNo: 2,
    mark: [1.0, 1.0],
    question: "Car is to Engine as Rowboat is to ______.",
    options: [
      {
        alpha: "a",
        to: "Ocean",
      },
      {
        alpha: "b",
        to: "Wood",
      },
      {
        alpha: "c",
        to: "Human",
      },
      {
        alpha: "d",
        to: "Sail",
      },
      {
        alpha: "e",
        to: "Oar",
      },
    ],
  },
  {
    id: 3,
    questionNo: 3,
    mark: [1.0, 1.0],
    question: "What is the missing letter in this series? ...h g ? e d.",
    options: [
      {
        alpha: "a",
        to: "f",
      },
      {
        alpha: "b",
        to: "c",
      },
      {
        alpha: "c",
        to: "i",
      },
      {
        alpha: "d",
        to: "b",
      },
      {
        alpha: "e",
        to: "a",
      },
    ],
  },
  {
    id: 4,
    questionNo: 4,
    mark: [1.0, 1.0],
    question: "Who was the first President of Nigeria?",
    options: [
      {
        alpha: "a",
        to: "Muhammadu Buhari",
      },
      {
        alpha: "b",
        to: "Nnamdi Azikiwe",
      },
      {
        alpha: "c",
        to: "Olusegun Obasanjo",
      },
      {
        alpha: "d",
        to: "Yakubu Gowon",
      },
    ],
  },
  {
    id: 5,
    questionNo: 5,
    mark: [1.0, 1.0],
    question: "The Nigerian Constitution was first adopted in which year?",
    options: [
      {
        alpha: "a",
        to: "1960",
      },
      {
        alpha: "b",
        to: "1979",
      },
      {
        alpha: "c",
        to: "1999",
      },
      {
        alpha: "d",
        to: "1954",
      },
    ],
  },
];

const QuestionsList2: QuestionItem[] = [
  {
    id: 1,
    questionNo: 1,
    mark: [1.0, 1.0],
    question:
      "Each question consist of two words which have a certain relationship to each other followed by four pairs of related words, Select the pair which has the same relationship. CORPOREAL : SPIRITUAL",
    options: [
      {
        alpha: "a",
        to: "mesa : plateau",
      },
      {
        alpha: "b",
        to: "foreigner : immigrant",
      },
      {
        alpha: "c",
        to: "pedagogue : teacher",
      },
      {
        alpha: "d",
        to: "moron : savant",
      },
    ],
  },
  {
    id: 2,
    questionNo: 2,
    mark: [1.0, 1.0],
    question:
      "An inter-agency task force has representatives from 3 different agencies. Half of the task force members represent agency A, one-third represent agency B and three represent agency C. How many people are on the task force?",
    options: [
      {
        alpha: "a",
        to: "18",
      },
      {
        alpha: "b",
        to: "15",
      },
      {
        alpha: "c",
        to: "24",
      },
      {
        alpha: "d",
        to: "30",
      },
      {
        alpha: "e",
        to: "12",
      },
    ],
  },
  {
    id: 3,
    questionNo: 3,
    mark: [1.0, 1.0],
    question:
      "Each question consist of two words which have a certain relationship to each other followed by four pairs of related words, Select the pair which has the same relationship. TEN : DECIMAL",
    options: [
      {
        alpha: "a",
        to: "two : binary",
      },
      {
        alpha: "b",
        to: "four : quartet",
      },
      {
        alpha: "c",
        to: "seven : septet",
      },
      {
        alpha: "d",
        to: "five : quince",
      },
    ],
  },
  {
    id: 4,
    questionNo: 4,
    mark: [1.0, 1.0],
    question:
      "Who is responsible for the appointment of judges to the Federal High Court?",
    options: [
      {
        alpha: "a",
        to: "Supreme Court",
      },
      {
        alpha: "b",
        to: "National Assembly",
      },
      {
        alpha: "c",
        to: "President",
      },
      {
        alpha: "d",
        to: "Governor",
      },
    ],
  },
  {
    id: 5,
    questionNo: 5,
    mark: [1.0, 1.0],
    question: "What is the maximum tenure of the President of Nigeria?",
    options: [
      {
        alpha: "a",
        to: "8 years",
      },
      {
        alpha: "b",
        to: "6 years",
      },
      {
        alpha: "c",
        to: "5 years",
      },
      {
        alpha: "d",
        to: "4 years",
      },
    ],
  },
];

const QuestionInterface = function () {
  return (
    <ul className="space-y-5">
      {QuestionsList.map((quest, i) => (
        <QuestionComponent key={i} quest={quest} i={i} isDisabled={true} />
      ))}
    </ul>
  );
};

export default QuestionInterface;
