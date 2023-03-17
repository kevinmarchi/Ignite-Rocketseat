import { styled } from "../../../../lib/stitches.config";

export const Container = styled('form', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    marginTop: '-1.5rem',

    'input': {
        backgroundColor: '$gray-500',
        color: '$gray-300',
        padding: '0.9rem',        
        border: 0,
        borderRadius: 5,
        width: '90%'
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

        transition: 'background-color 0.2s',
    },

    'button:hover': {
        backgroundColor: '$blue',
    },
})

export const VideoContainer = styled('div', {
    width: '100%',
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'center',
})