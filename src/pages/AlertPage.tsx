import Alert from "../components/Alert/Alert";
import Button from "../components/Button/Button";

interface AlertReducerAction {
    type: string;
    payload: any;
}

interface AlertReducerState {
    text: string;
    variant: string;
    disabled: boolean;
    size: string;
}

const initialState: AlertReducerState = {
    text: "Button",
    variant: "primary",
    disabled: false,
    size: "md"
}

function alertReducer(state: AlertReducerState, action: AlertReducerAction) {
    switch(action.type) {
        case "SET_ALERT_TEXT":
            return {
                ...state,
                text: action.payload
            };
        case "SET_ALERT_VARIANT": 
            return {
                ...state,
                variant: action.payload
            };
        default:
            throw new Error();
    }
}

export default function AlertPage() {

    return(

        <>
            <Button>
                Show alert
            </Button>
            <Alert variant="secondary" verticalAlign="bottom" horizontalAlign="end">
                This is an alert
            </Alert>
        </>

    );

}