import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';

function BtnHome() {

  return (
    <Tooltip title="Volver al Inicio">
      <IconButton>
        <HomeIcon color="action"/>
      </IconButton>
    </Tooltip>
  );
}

export default BtnHome