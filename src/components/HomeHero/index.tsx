import React from 'react';
import { FillBtn } from 'ui/Buttons/FillBtn';

export const HomeHero = () => {
  const a = '';
  return (
    <div>
      <div>
        <h1>Find true power in your data with Ensome</h1>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque lauda, totam rem aperiam, eaque ipsa quae ab
          illo inventore veritatis et quasi.
        </p>
      </div>
      <div>
        <FillBtn text="Learn more" />
        <img src="assets/images/heroes.png" alt="heroes" />
      </div>
    </div>
  );
};
