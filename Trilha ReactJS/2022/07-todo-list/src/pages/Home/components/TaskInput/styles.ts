import { styled } from "../../../../lib/stitches.config";

export const Container = styled('div', {
    display: 'flex',
    gap: '1rem',
    marginTop: '-1.5rem',

    'input': {
        backgroundColor: '$gray-500',
        color: '$gray-300',
        padding: '0.9rem',
        width: '46rem',
        border: 0,
        borderRadius: 5,
    },

    'input:focus': {
        outline: '2px solid $colors$purple-dark',
        color: '$gray-100',
    },

    'button': {
        all: 'unset',
        cursor: 'pointer',
        backgroundColor: '$blue-dark',
        color: '$gray-100',
        padding: '1rem',
        borderRadius: 7,
        fontWeight: 'bold',

        display: 'flex',
        gap: '0.3rem',
        justifyContent: 'center',
        alignItems: 'center',

        transition: 'background-color 0.2s'
    },

    'button:hover': {
        backgroundColor: '$blue',
    }
})