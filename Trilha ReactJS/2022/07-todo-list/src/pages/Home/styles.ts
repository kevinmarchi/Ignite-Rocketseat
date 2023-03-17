import { styled } from "../../lib/stitches.config";

export const Container = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
})

export const ContentContainer = styled('div', {
    width: '56rem',

    '@media (max-width: 1100px)': {
        width: '30rem',
    },

    '@media (max-width: 600px)': {
        width: '15rem',
    },
})