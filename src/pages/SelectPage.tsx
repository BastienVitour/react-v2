import Select from "../components/Select/Select";

export default function SelectPage() {
  return (
    <>
      <Select name="testname" size="lg">
        <optgroup label="Please choose an option.">
          <option>option1</option>
          <option>option2</option>
          <option>option3</option>
        </optgroup>
      </Select>
    </>
  );
}
