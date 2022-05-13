import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type Props = {
  initialTests: TestItem[];
};

type TestManagerState = [TestItem[], Dispatch<SetStateAction<TestItem[]>>];
const TestManagerContext = createContext<TestManagerState>(null);

export const TestManagerContextProvider: React.FC<Props> = ({
  initialTests,
  ...restProps
}) => {
  const [tests, setTests] = useState(initialTests);

  return (
    <TestManagerContext.Provider value={[tests, setTests]} {...restProps} />
  );
};

/**
 * Hooks
 */
export const useTestManagerItems = () => {
  const testManagerState = useContext(TestManagerContext);

  if (!testManagerState) {
    throw new Error(
      "useTestManagerItems must be used within a TestManagerContextProvider"
    );
  }

  return testManagerState;
};
