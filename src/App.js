import React, {useEffect, useState} from 'react';
import CardsList from "./components/CardsList";
import Button from "@mui/material/Button";
import starYellow from './assets/staryellow.png';
import starBlack from './assets/starwhite.png';
import {hideStarsAC, showAllAC, showStarsAC} from "./redux/cards-reducer";
import PostForm from "./components/PostForm";
import store from "./redux/redux-store";
import MyModal from "./components/ui/MyModal/MyModal";
import MyButton from "./components/ui/button/MyButton";


function App(props) {
    const [modal, setModal] = useState(false);

    function showStars() {
        props.store.dispatch(showStarsAC());
    }

    function showAll() {
        props.store.dispatch(showAllAC());
    }

    function hideStars() {
        props.store.dispatch(hideStarsAC());
    }

    return (
        <div className="App">
            <div className="container">
                <h2 className="title">Тренажер для запоминания слов</h2>
                <div className="form">
                    <MyButton onClick={() => setModal(true)}>
                        Добавить карточку
                    </MyButton>
                    <MyModal visible={modal} setVisible={setModal}>
                        <PostForm store={store} setVisible={setModal} />
                    </MyModal>
                    <hr/>
                    <div className="form__display">
                        <Button size="medium" onClick={() => showAll()} variant="outlined">Показать все</Button>
                        <div>
                            <Button size="medium" onClick={() => showStars()} variant="outlined">
                                <img src={starYellow} alt=""/>
                            </Button>
                            <Button size="medium" onClick={() => hideStars()} variant="outlined">
                                <img src={starBlack} alt=""/>
                            </Button>
                        </div>
                    </div>
                </div>
                <CardsList state={props.state} store={props.store}/>
            </div>
        </div>
    );
}

export default App;
