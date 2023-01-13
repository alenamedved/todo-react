import React, { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import { TaskHeader } from './_taskHeader';

export const Task: FC = (props): ReactElement => {
  return (
    <Box
      display="flex"
      width="100%"
      flexDirection="column"
      justifyContent="space-around"
      mb={2}
      p={4}
      sx={{
        width: '100%',
        backgroundColor: 'background.paper',
        border: '1px solid',
        borderRadius: '8px',
        borderColor: 'error.light'
      }}
    >
       <TaskHeader />
    </Box>
  );
};
