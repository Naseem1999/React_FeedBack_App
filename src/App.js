
import Header from "./Components/Header";
import Feedbacklist from "./Components/Feedbacklist";
import FeedBackStats from "./Components/FeedBackStats";
import FeedbackForm from "./Components/FeedbackForm";
import AboutPage from "./Pages/AboutPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutIconLink from "./Components/AboutIconLink";
import { FeedbackProvider } from "./Components/Context/Feedbackcontext";

function App() {
 


 
  return (
    <FeedbackProvider>
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route exact path="/"  element={
            <>
            <FeedbackForm />
            <FeedBackStats  />
            <Feedbacklist    />
            </>
          }>
            
          </Route>
          <Route path="/about" element={<AboutPage/>}></Route>
        </Routes>
      <AboutIconLink/>
     
      </div>
    </Router>

    </FeedbackProvider>
  );
}

export default App;
