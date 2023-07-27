import Greeting from "./Components/Greeting/greeting";
// import Notifications from "./Components/Notifications/notification";
// import { useSelector } from "react-redux";
// import { useMemo } from "react";

const App = () => {
    // const common = useSelector(state => state.commonReducer)
    // const {notification} = common
    // const memorize_notification = useMemo(() => {
    //     return <Notifications />
    // },[notification])
    return (
        <div>
            <Greeting />
            {/*{memorize_notification}*/}
        </div>
    );
}

export default App;
