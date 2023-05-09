import { useContext } from "react";
import store from "../app/store"

const Child1OfChild2 = (props) => {
    const {daddyName} = props;
    const userContext = useContext(store.UserContext);

    return (
        <div>
            <div>Hello I'm Child1OfChild2 component.</div>
            <div>I will rename my grandpa: Parent component</div>
            {/* <div>My grandpa name: {daddyName}</div> */}
            <div>My grandpa name: {userContext[1].name}</div>
            <button
            type="button"
            className="py-2 px-5 rounded-pill"
            >
            Random name by id (2)
            </button>
        </div>
    );
}

export default Child1OfChild2;