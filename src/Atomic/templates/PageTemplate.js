import { Box } from "@mui/material";
import React from 'react';

function PageTemplate(props) {
    const { Body, Header, Drawer } = props;
    return (
        <Box minHeight={"100vh"}>
            <Drawer />
            <Header />
            {Body}
        </Box>
    )
}

export default React.memo(PageTemplate);