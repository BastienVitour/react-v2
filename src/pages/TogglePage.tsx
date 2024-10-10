import Toggle from "../components/Toggle/Toggle";
import { useReducer } from "react";

interface ToggleReducerAction {
    type: string;
    payload: any;
}

interface ToggleReducerState {
    variant: string;
    disabled: boolean;
    uncheckedBackgroundColor: string;
    checkedBackgroundColor: string;
    uncheckedForegroundColor: string;
    checkedForegroundColor: string;
}

const initialState: ToggleReducerState = {
    variant: "rounded",
    disabled: false,
    uncheckedBackgroundColor: "lightgrey",
    checkedBackgroundColor: "#2196F3",
    uncheckedForegroundColor: "white",
    checkedForegroundColor: "white"
}

function toggleReducer(state: ToggleReducerState, action: ToggleReducerAction) {
    switch(action.type) {
        case "SET_TOGGLE_VARIANT": 
            return {
                ...state,
                variant: action.payload
            };
        case "SET_TOGGLE_DISABLED":         
            return {
                ...state,
                disabled: action.payload
            };
        case "SET_TOGGLE_SIZE":         
            return {
                ...state,
                size: action.payload
            };
        case "SET_TOGGLE_UNCHECKED_BACKGROUND_COLOR":         
            return {
                ...state,
                uncheckedBackgroundColor: action.payload
            };
        case "SET_TOGGLE_CHECKED_BACKGROUND_COLOR":         
            return {
                ...state,
                checkedBackgroundColor: action.payload
            };
        case "SET_TOGGLE_UNCHECKED_FOREGROUND_COLOR":         
            return {
                ...state,
                uncheckedForegroundColor: action.payload
            };
        case "SET_TOGGLE_CHECKED_FOREGROUND_COLOR":         
            return {
                ...state,
                checkedForegroundColor: action.payload
            };
        default:
            throw new Error();
    }
}

export default function TogglePage() {

    const [state, dispatch] = useReducer(toggleReducer, initialState);

    return(

        <div>
            <Toggle 
                variant={state.variant}
                disabled={state.disabled}
                uncheckedBackgroundColor={state.uncheckedBackgroundColor}
                checkedBackgroundColor={state.checkedBackgroundColor}
                uncheckedForegroundColor={state.uncheckedForegroundColor}
                checkedForegroundColor={state.checkedForegroundColor}
            />
            <select defaultValue="rounded" onChange={(e) => dispatch({ type: "SET_TOGGLE_VARIANT", payload: e.target.value })}>
                <option value="rounded">Rounded</option>
                <option value="rectangular">Rectangular</option>
            </select>
            <input
                id="disabled-checkbox"
                name="disabled-checkbox" 
                type="checkbox" 
                onChange={(e) => dispatch({ type: "SET_TOGGLE_DISABLED", payload: e.target.checked })} 
            />
            <label htmlFor="unchecked-background-color">
                Unchecked background color
                <input defaultValue={state.uncheckedBackgroundColor} id="unchecked-background-color" type="color" onChange={(e) => dispatch({ type: "SET_TOGGLE_UNCHECKED_BACKGROUND_COLOR", payload: e.target.value })} />
            </label>
            <label htmlFor="checked-background-color">
                Checked background color
                <input defaultValue={state.checkedBackgroundColor} id="checked-background-color" type="color" onChange={(e) => dispatch({ type: "SET_TOGGLE_CHECKED_BACKGROUND_COLOR", payload: e.target.value })} />
            </label>
            <label htmlFor="unchecked-foreground-color">
                Unchecked foreground color
                <input defaultValue={state.uncheckedForegroundColor}id="unchecked-background-color" type="color" onChange={(e) => dispatch({ type: "SET_TOGGLE_UNCHECKED_FOREGROUND_COLOR", payload: e.target.value })} />
            </label>
            <label htmlFor="checked-foreground-color">
                Checked foreground color
                <input defaultValue={state.checkedForegroundColor} id="checked-foreground-color" type="color" onChange={(e) => dispatch({ type: "SET_TOGGLE_CHECKED_FOREGROUND_COLOR", payload: e.target.value })} />
            </label>
        </div>

    );

}