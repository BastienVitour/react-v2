import Button from "../components/Button/Button";
import { useReducer } from "react";

interface ButtonReducerAction {
    type: string;
    payload: any;
}

interface ButtonReducerState {
    text: string;
    variant: string;
    disabled: boolean;
}

const initialState: ButtonReducerState = {
    text: "Button",
    variant: "primary",
    disabled: false
}

function buttonReducer(state: ButtonReducerState, action: ButtonReducerAction) {
    switch(action.type) {
        case "SET_BUTTON_TEXT":
            return {
                ...state,
                text: action.payload
            };
        case "SET_BUTTON_VARIANT": 
            return {
                ...state,
                variant: action.payload
            };
        case "SET_BUTTON_DISABLED":         
            return {
                ...state,
                disabled: action.payload
            };
        default:
            throw new Error();
    }
}

export default function ButtonPage() {

    const [state, dispatch] = useReducer(buttonReducer, initialState)

    return(
        <div>
            <Button text={state.text} variant={state.variant} disabled={state.disabled} />
            <input onChange={(e) => dispatch({ type: "SET_BUTTON_TEXT", payload: e.target.value })} />
            <select defaultValue="primary" onChange={(e) => dispatch({ type: "SET_BUTTON_VARIANT", payload: e.target.value })}>
                <option value="primary">Primary</option>
                <option value="secondary">Secondary</option>
                <option value="danger">Danger</option>
                <option value="success">Success</option>
                <option value="warning">Warning</option>
                <option value="info">Info</option>
            </select>
            <label htmlFor="disabled-checkbox">Disabled ?</label>
            <input name="disabled-checkbox" type="checkbox" onChange={(e) => dispatch({ type: "SET_BUTTON_DISABLED", payload: e.target.checked })} />
        </div>
    );

}