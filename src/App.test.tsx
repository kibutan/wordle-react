import { describe, expect, it } from "vitest";
import App from "./App";
import { useStore } from "./store";
import { render, screen } from "./test/test-utils";

describe("Simple working test", () => {
  it("the title is visible", () => {
    render(<App />);
    expect(screen.getByText(/Reacdle/i)).toBeInTheDocument();
  });

  it("shows empty state", () => {
    useStore.setState({ guesses: [] });
    render(<App />);

    expect(screen.queryByText("Game Over")).toBeNull();
    expect(document.querySelectorAll("main div")).toHaveLength(6);
  });
});
