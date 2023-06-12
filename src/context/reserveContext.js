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
        message: '',
    })

    return (
        <ReserveContext.Provider
            value={{
                ...state,
                onSuccess: ({ message, bookingTimes }) => setState({ ...state, isLoading: false, message, bookingTimes }),
                onFetching: () => setState({ ...state, isLoading: true, message: '' })
            }}
        >
            {children}
        </ReserveContext.Provider>
    );
};

export const useReserveContext = () => useContext(ReserveContext);