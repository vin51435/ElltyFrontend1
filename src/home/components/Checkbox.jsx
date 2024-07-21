import React, { useState } from 'react';

const Checkbox = ({ pagesArr }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [checkedOptions, setCheckedOptions] = useState({});

  const handleMainCheckboxChange = (event) => {
    const checked = event.target.checked;
    setIsChecked(checked);
    setCheckedOptions(pagesArr.reduce((acc, option) => {
      acc[option] = checked;
      return acc;
    }, {}));
  };

  const handleOptionCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedOptions(prev => ({ ...prev, [name]: checked }));
  };
  return (
    <div>
      <div>
        <label className="form-control first-select">
          All pages
          <span className='checkbox_container'>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleMainCheckboxChange}
            />
          </span>
        </label>
      </div>
      <span className='page_selection_divider' />
      {pagesArr.map((option, index) => (
        <div key={index}>
          <label className="form-control">
            {option}
            <span className='checkbox_container'>
              <input
                type="checkbox"
                name={option}
                checked={checkedOptions[option] || false}
                onChange={handleOptionCheckboxChange}
              />
            </span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default Checkbox;