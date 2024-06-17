import { Dispatch, SetStateAction, createContext, useState } from 'react';

interface TimerContextProps {
  duration: number;
  setDuration: Dispatch<SetStateAction<number>>;
}

export const TimerContext = createContext<TimerContextProps>({
  duration: 0,
  setDuration: () => {},
});

interface TimerProviderProps {
  children: React.ReactNode;
}

const TimerProvider = ({ children }: TimerProviderProps) => {
  const [duration, setDuration] = useState(10);

  return (
    <TimerContext.Provider value={{ duration, setDuration }}>
      {children}
    </TimerContext.Provider>
  );
};

export default TimerProvider;
