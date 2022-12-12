import About from "./components/about/about.component";
import Contact from "./components/contact/contact.component";
import BasicCard from "./components/cards-info/cards-info.component";
import ButtonAppBar from "./components/app-bar/app-bar.component";
import Services from "./components/services/services.component";
import { useRef } from "react";

const cardInfo = [
  {
    id: 1,
    icon: 'local_library',
    title: 'LEARN SYSTEMS THEORY',
    text: 'Family Systems Theory is rooted in eight concepts that see human behavior as stemming from the power of the system, which is composed of the members of a family structure and their various relationships, roles, and interactions. Expanding our understanding of how the emotional system guides our family, work, and other social systems unveils more effective options to counter issues we find problematic.'
  },
  {
    id: 2,
    icon: 'search',
    title: 'EXAMINE YOUR HISTORY',
    text: 'Many unhealthy symptoms can find their roots in our individual family systems. As we learns about systems theory, we will also explore our own family systems in an effort to increase objectivity and clarity and lower our emotional responses. This is also be effective when considering organizations: their beginnings and development over time, their leadership and contributions to its members’ well-being.'
  },
  {
    id: 3,
    icon: 'psychology',
    title: 'APPLY YOUR KNOWLEDGE',
    text: 'As we increase our knowledge of theory and awareness of ourselves, we discover that the options for our responses amid increased tension and anxiety become more numerous. We learn to cope more effectively with negative reactions from others as we seek to better ourselves; symptoms cause by anxiety and stress will lessen as we grow in confidence; and a desire to continue on the path of learning theory and our history will flourish as we recognize the freedom that knowledge brings.'
  },
  {
    id: 4,
    icon: 'groups',
    title: 'DIFFERENTIATE YOURSELF',
    text: 'Establishing a more differentiated self is our goal, as we seek to claim who we are and what we believe without swaying to the masses. Often our sense of self is poorly differentiated, highly influenced by the acceptance and approval we seek from others. We strive to decrease our dependence on the thinking of others around us as we strengthen our own voice, staying calm and clear headed in the midst of conflict, criticism and rejection.'
  },
]

const App = (props) => {

  const resultRef1 = useRef(null);
  const resultRef2 = useRef(null);
  const resultRef3 = useRef(null);

  return (
    <div>
      <ButtonAppBar resultRef1={resultRef1} resultRef2={resultRef2} resultRef3={resultRef3} />
      <About ref={resultRef1} />
      <BasicCard cardInfo={cardInfo}/>
      <Services ref={resultRef2} />
      <Contact  ref={resultRef3} />
    </div>
  );
}

export default App;
