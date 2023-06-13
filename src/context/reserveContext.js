const { createContext, useContext, useState } = require("react");

const ReserveContext = createContext(undefined);

export const ReserveProvider = ({ children }) => {

    // initial all state
    const [state, setState] = useState({
        bookingTimes: [
            {
                date: "5/13",
                time: "17:00"
            },
            {
                date: "5/14",
                time: "19:00"
            }
        ],
        isLoading: false,
        isOpenDialog: false,
        message: '',
    })

    return (
        <ReserveContext.Provider
            value={{
                ...state,
                onSuccess: ({ bookingTimes, message }) => { console.log('book'); setState({ ...state, bookingTimes, message, isLoading: false, isOpenDialog: true, }); },
                onFetching: () => setState({ ...state, isLoading: true }),
                onOpenDialog: ({ message }) => { console.log('open'); setState({ ...state, isOpenDialog: true, message }); },
                onCloseDialog: () => setState({ ...state, isOpenDialog: false }),
            }}
        >
            {children}
        </ReserveContext.Provider>
    );
};

export const useReserveContext = () => useContext(ReserveContext);