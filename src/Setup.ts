import { Exchanger } from "./Exchanger";
import * _ from 'lodash';

initEventListener();

function initEventListener() {
  const btn: HTMLElement | null = document.getElementById("exchange");
  const resultText: HTMLElement | null = document.getElementById("result");

  const getCoin = (id: string): number => {
    const element: HTMLElement | null = document.getElementById(id);
    if (element !== null && element instanceof HTMLInputElement) {
      return element.valueAsNumber;
    } else {
      throw new Error("HTML Eleent is null or wrong type");
    }
  };

  if (btn !== null) {
    if (btn instanceof HTMLButtonElement) {
      btn.addEventListener<"click">("click", (event: MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        const ex: Exchanger = new Exchanger(
          getCoin("gold"),
          getCoin("silver"),
          getCoin("copper")
        );
        if (resultText !== null) {
          resultText.innerText = _.padStart(`${ex.toCopper()}`, 5, "-");
        }
      });
    } else {
      throw new Error(`HTML element is not a button`);
    }
  } else {
    throw new Error(`There is not such HTMLElement`);
  }
}
