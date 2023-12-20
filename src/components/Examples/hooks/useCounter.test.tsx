import { renderHook, act } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  it("should render the initial count", () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.counter).toBe(0);
  });
  
  it("should initialize counter with the provided initial state", () => {
    const initialState = 5;
    const { result } = renderHook(() => useCounter(initialState));

    expect(result.current.counter).toBe(initialState);
  });

  it("should increment counter by 1", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
    });

    expect(result.current.counter).toBe(1);
  });

  it("should decrement counter by 1 if counter is greater than 0", () => {
    const initialState = 3;
    const { result } = renderHook(() => useCounter(initialState));

    act(() => {
      result.current.decrement();
    });

    expect(result.current.counter).toBe(initialState - 1);
  });

  it("should not decrement counter if counter is already 0", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.decrement();
    });

    expect(result.current.counter).toBe(0);
  });

  it("should reset counter to the initial state", () => {
    const initialState = 5;
    const { result } = renderHook(() => useCounter(initialState));

    act(() => {
      result.current.increment();
      result.current.reset();
    });

    expect(result.current.counter).toBe(initialState);
  });
});
