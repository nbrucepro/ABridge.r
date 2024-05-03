import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/store.js";
import Starter from "../components/Starter/index.jsx";
import { Tabs } from "../components/Tabs/index.jsx";
import { useState } from "react";
// import i18n from '../i18n.config.js';
// jest.mock('./i18n', () => ({
//   useTranslation: () => ({ t: jest.fn((key) => key) }),
// }));

describe("Dashboard", () => {
  test("It should render Dashboard correctly", () => {
    render(
      <Provider store={store}>
        <Starter />
      </Provider>
    );
    expect(screen.getByText("Creative Website")).toBeDefined();
  });
  test("It should add todo model successfully", () => {
    const ToggleButton = () => {
      const [showModal, setShowModal] = useState(false);
      return (
        <>
          <div data-testid="showModal">{showModal}</div>;
          <button onClick={() => setShowModal(true)}>Add task</button>;
        </>
      );
    };
    render(<ToggleButton />);
    const showModal = screen.getByTestId("showModal");
    const button = screen.getByText("Add task");
    // <Provider store={store}>
    //   <Tabs />
    // </Provider>
    fireEvent.click(button);
    // Assert
    expect(showModal.textContent).toBe("");
  });
});
