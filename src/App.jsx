import './styles.css';
import './assets/fonts/fontFace.css';
import placeholder from './assets/images/placeholder.png';
import gif from './assets/images/gif.gif';
import { Greeting } from './components/greeting/Greeting';

export const App = () => {
  return (
    <>
      <Greeting />
      <img src={placeholder} />
      <img src={gif} />
    </>
  );
};
