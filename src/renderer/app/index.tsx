import { FC } from 'react';
import ReactDOM from 'react-dom';

const App:FC = () => {
  return (
    <div>
      <div className="absolute inset-0 bg-white text-center h-full flex flex-col justify justify-center">IT WORKS</div>
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById('root'));