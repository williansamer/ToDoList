import React, {useState, useEffect} from "react";
import "./App.css";
import List from "./components/List";
import TodoForm from "./components/TodoForm";
import Modal from "./components/Modal";
import Item from "./components/Items";
import { createStore } from "redux";
import reducerItem from "./reducers/reducerItem";
import { Provider } from "react-redux";

const SAVED_ITEMS = "savedItem";

const store = createStore(reducerItem);

function App(){

    const [showModal, setShowModal] = useState(false);
    //const [itens, setItens] = useState([]); //array of objects with the values of the input.
    
/* 
    useEffect(() =>{ //this useEffect is a hook that runs after the component is rendered because there is no dependency.
        const savedItens = JSON.parse(localStorage.getItem(SAVED_ITEMS));
        if(savedItens){
            setItens(savedItens);
        }
    }, []);

    useEffect(()=>{ //this useEffect is a hook that runs after the state is updated, because there is a dependency(itens).
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(itens));
    }, [itens]);

    function onAddItem(text){ //this function is called from the TodoForm component with the text value.
        let newItem = new Item(text); //creates a new Item object with the text value.

        setItens([...itens, newItem]); //the '...item' is used to spread the array and add the newItem value.
        onHideModal();
    }

    function onDeleteItem(item){
        let delItem = itens.filter((it) => it.id !== item.id); //filters the array and returns the item that is not the same as the item that is being deleted.
    
        setItens(delItem); //sets the new array.
    }

    function onDone(check){
        let doneItem = itens.map((it)=>{
            if(it.id === check.id){
                it.done = !it.done; //changes the done value of the item.
            }
            return it; //returns the item with the new done value to the array.
        })

        setItens(doneItem); //sets the new array.
    } */

    function onHideModal(){
        setShowModal(false);
    }

    return(
        <div className="container">
            <Provider store={store}>
                <header className="header">
                    <h1>Todo</h1>
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