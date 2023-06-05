"use client";

import { useCallback } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface CounterProps {
  title: string;
  subtitle: string;
  value: number;
  onChange: (value: number) => void;
}

const Counter: React.FC<CounterProps> = ({
  title,
  subtitle,
  value,
  onChange,
}) => {
  const onAdd = useCallback(() => {
    onChange(value + 1);
  }, [onChange, value]);

  const onReduce = useCallback(() => {
    if (value === 1) return;

    onChange(value - 1);
  }, [onChange, value]);

  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col">
        <div className="font-medium">{title}</div>
        <div className="font-light text-gray-600">{subtitle}</div>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div
          onClick={onReduce}
          className={`w-10 h-10 rounded-full border-[1px] flex items-center justify-center transition
          ${
            value !== 1
              ? "border-neutral-400  text-neutral-600"
              : "border-neutral-200  text-neutral-300"
          }
          ${value !== 1 && "hover:text-black hover:border-black"}
          ${value !== 1 ? "cursor-pointer" : "cursor-not-allowed"}
          `}
        >
          <AiOutlineMinus />
        </div>
        <div className="text-xl font-light text-neutral-600">{value}</div>
        <div
          onClick={onAdd}
          className="w-10 h-10 rounded-full border-[1px] border-neutral-400 flex hover:border-black items-center justify-center text-neutral-600 cursor-pointer hover:text-black transition"
        >
          <AiOutlinePlus />
        </div>
      </div>
    </div>
  );
};

export default Counter;
