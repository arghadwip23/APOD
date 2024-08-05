import React from 'react';
import Box from '@mui/material/Box';

export default function ResponsiveIframe(props) {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        maxWidth: '100%',
        '&::before': {
          content: '""',
          display: 'block',
          paddingTop: '56.25%', // 16:9 aspect ratio
        },
        '& iframe': {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 0,
        },
      }}
    >
      <iframe
        src={props.link}
        title="Responsive Iframe"
        allowFullScreen
      />
    </Box>
  );
}
