import React, {useContext, useReducer} from 'react'

const Context = React.createContext()

export const useData = () => {
  return useContext(Context)
}

// const SHOW_ALERT = 'show'
// const HIDE_ALERT = 'hide'
const SET_FILTERS = 'setFilters'

const reducer = (state, action) => {
  switch (action.type) {
    // case SHOW_ALERT: return {...state, visible: true, text: action.text}
    // case HIDE_ALERT: return {...state, visible: false}
    case SET_FILTERS: return {...state, filters: action.newFilters}
    default: return state
  }
}

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    filters: {
        season: 'all seasons',
        color: 'all colors',
        price: 'cheap => expensive'
    },
  })

//   const show = text => dispatch({ type: SHOW_ALERT, text })
//   const hide = () => dispatch({ type: HIDE_ALERT })
  const setFilters = (newFilters) => dispatch({type: SET_FILTERS, newFilters})

  return (
    <Context.Provider value={{
    //   visible: state.visible,
    //   text: state.text,
    //   show, hide
    filters: state.filters,
    setFilters,
    }}>
        { children }
    </Context.Provider>
  )
}

// AlertContext = Context
//useAlert = useData
//AlertProvider = StatePrivider