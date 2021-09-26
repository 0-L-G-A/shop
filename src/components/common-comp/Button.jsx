import React from 'react';
import Button from '@material-ui/core/Button';

function ShopButton({ clsName, val }) {
  return (
    <Button variant="contained" className={clsName}>
      {val}
    </Button>
  );
}

export default ShopButton;
