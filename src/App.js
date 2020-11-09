import React, { useState, useEffect, useRef } from 'react';
import FlashcardList from './FlashcardList';
import './app.css';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './NavigationBar';
import { Home } from './Home';
import { Learn } from './Learn';
import { NoMatch } from './NoMatch';
import Footer from './Footer';
import Todo from './Todo';



function App() {
  const [flashcards, setFlashcards] = useState([]);
  const [categories, setCategories] = useState([])

  const categoryEl= useRef()
  const amountEl = useRef()

  useEffect(() => {
    axios
    .get('https://opentdb.com/api_category.php')
    .then(res=> {
      setCategories(res.data.trivia_categories)
    })
  }, [])

  useEffect(() => {
    
  }, [])

  function decodeString(str) {
    const textArea = document.createElement('textarea')
    textArea.innerHTML= str
    return textArea.value
  }

  function handleSubmit(e) {
    e.preventDefault()
    axios
      .get('https://opentdb.com/api.php', {
        params: {
          amount: amountEl.current.value,
          category: categoryEl.current.value
        }
      })
      .then(res => {
        setFlashcards(res.data.results.map((questionItem, index) => {
        const answer = decodeString(questionItem.correct_answer)
        const options = [
          ...questionItem.incorrect_answers.map(a => decodeString(a)), 
          answer]
          return {
          id: `${index}-${Date.now()}`,
          question: decodeString(questionItem.question),
          answer: answer,
          options: options.sort(() => Math.random() - .5)
          }
        }))
      })
  }
  return (
    <>
    <React.Fragment>
      <Router>
        <NavigationBar />
      </Router>
    </React.Fragment>
    <form className ="search" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select id="category" ref={categoryEl}>
            {categories.map(category => {
              return <option value ={category.id} key={category.id}>{category.name}</option>
            })}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="amount">Number Of Questions</label>
        <input type="number" id="amount" min="1" step="1" defaultValue={10} ref={amountEl}/>
      </div>
      <div className="form-group">
        <button className="btn">Generate</button>
      </div>
    </form>
    <div className="container">
       <FlashcardList flashcards = {flashcards} />
    </div>
    <React.Fragment>
      <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={Learn} />
        <Route component={NoMatch} />
      </Switch>
        <Todo/>
        <div className="box">
    <h1>Looking for resources?</h1>
    <ul>
      <h2><a href="https://enlight.nyc/">Enlight</a></h2>
        <h2>Sports</h2>
        <h2>Politics</h2>
        <h2>History</h2>
      </ul>
  </div>
        <Footer/>
      </Router>
    </React.Fragment>
    </>
  );
}

export default App;
