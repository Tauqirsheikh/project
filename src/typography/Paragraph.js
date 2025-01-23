import React from 'react'
import { TypoParagraph } from './typoStyle'
import { Typography } from '@mui/material';

const Paragraph = ({ text, sx, className, startIcon = false, endIcon = false, ...rest }) => {
    return (
        <React.Fragment>
            <TypoParagraph {...rest} sx={sx} className={className} component="p" variant="body2">{startIcon && <Typography component="span">{startIcon}</Typography>}  {text} {endIcon && <Typography component="span">{endIcon}</Typography>} </TypoParagraph>
        </React.Fragment>
    )
}

export default Paragraph;