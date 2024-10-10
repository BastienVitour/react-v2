import { useState } from "react";
import Select from "../components/Select/Select";

export default function SelectPage() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [size, setSize] = useState<string | undefined>(undefined);

  return (
    <>
      <div>
        <button onClick={() => setIsDisabled(!isDisabled)}>
          Toggle disabled
        </button>

        <div>
          <p>Sizes</p>
          <input
            name="radioSize"
            type="radio"
            onClick={() => setSize("xs")}
          />{" "}
          <label>xs</label>
          <input name="radioSize" type="radio" onClick={() => setSize("sm")} />
          <label>sm</label>
          <input name="radioSize" type="radio" onClick={() => setSize("md")} />
          <label>md</label>
          <input name="radioSize" type="radio" onClick={() => setSize("lg")} />
          <label>lg</label>
          <input name="radioSize" type="radio" onClick={() => setSize("xl")} />
          <label>xl</label>
        </div>
      </div>

      <Select name="testname" size={size} disabled={isDisabled}>
        <optgroup label="Please choose an option.">
          <option>option1</option>
          <option>option2</option>
          <option>option3</option>
        </optgroup>
      </Select>
    </>
  );
}
