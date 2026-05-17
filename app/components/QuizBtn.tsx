interface MyComponentProps {
  children: React.ReactNode;
  onClick: () => void;
}

const QuizBtn = function ({ children, onClick }: MyComponentProps) {
  return <button onClick={onClick}>{children}</button>;
};

export default QuizBtn;
