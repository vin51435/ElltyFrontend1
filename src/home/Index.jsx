import React from 'react';
import './Index.scss';
import Button from './components/Button';
import Checkbox from './components/Checkbox';

const Home = () => {
  const pagesArr = ['Page 1', 'Page 2', 'Page 3', 'Page 4',];
  return (
    <div className='main_container'>
      <div className='content_container'>
        <div className='page_selection'>
          <Checkbox pagesArr={pagesArr} />
          <span className='page_selection_divider' />
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Home;
