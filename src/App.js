import React, {useState} from "react";
import "./App.css";
import List from "./components/List";
import TodoForm from "./components/TodoForm";
import Modal from "./components/Modal";
import { createStore } from "redux";
import reducerItem from "./reducers/reducerItem";
import { Provider } from "react-redux";

const SAVED_ITEMS = "savedItem";

function persistState(state){ //save the state to localStorage when the state changes
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(state));
}
function loadState(){ //load the state from localStorage
    const actualState = localStorage.getItem(SAVED_ITEMS);
    if(actualState){
        return JSON.parse(actualState);
    } else{
        return [];
    }
}

const store = createStore(reducerItem, loadState()); // Creating a store with the reducerItem function and passing the current state of the store(loadState)
//Existe o loadState aí, pois você consegue colocar um estado inicial que tem "uma importância superior" ao estado iniciado no reducer(reducerItem). Isso se chama preloadedState, ele está passando um valor que ficará no lugar da lista vazia que é o listReducer.
//Esta é a razão para ter um default state lá no reducerItem.
//Let mais sobre isso em https://redux.js.org/usage/structuring-reducers/initializing-state

store.subscribe(()=>{persistState(store.getState())}); // Saving the state of the store in localStorage always when the state changes.

function App(){
    const [showModal, setShowModal] = useState(false);

    function onHideModal(){
        setShowModal(false);
    }

    return(
        <div className="container">
            <Provider store={store}>
                <header className="header">
                    <h1>Lista de Tarefas</h1>
                    <button onClick={()=>setShowModal(true)} className="btn-modal">+</button>
                </header>
                {/*<TodoForm onAddItem={onAddItem}/>  '{onAddItem}' is passed to the List component as a prop. From son to parent. */}
                <List/> {/* '{onDeleteItem}' is passed to the List component as a prop. From son to parent. */}
                <Modal showModal={showModal} onHideModal={onHideModal}><TodoForm onHideModal={onHideModal}/></Modal>
            </Provider>
        </div>
    )
}

export default App;