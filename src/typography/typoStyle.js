import { styled, Typography } from "@mui/material";

export const TypoHeading = styled(Typography)(({ theme, isPositionLeft = false }) => ({
    textAlign: isPositionLeft ? "left" : "center",
    textAlign: "center",
    position: "relative",
    paddingBottom: "10px",
}));

export const TypoTitle = styled(Typography)(({ theme }) => ({
    textAlign: "center"
}));

export const TypoParagraph = styled(Typography)(({ theme }) => ({
    textAlign: "center"
}));
