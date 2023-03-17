import { keyframes, styled } from "../../../../lib/stitches.config";

export const Container = styled('div', {
    marginTop: '5rem',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
})

export const TaskProgress = styled('div', {
    width: '50%',
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: '2rem',
    borderBottom: '1px solid $colors$gray-400',

    '@media (max-width: 1100px)': {
        width: '90%',
    }
})

export const TaskCounter = styled('label', {
    fontSize: '0.9rem',
    fontWeight:'bold',

    variants: {
        color: {
            blue: {
                color: '$blue',
            },
            purple: {
                color: '$purple',
            }
        }
    },

    'input': {
        width: '2rem',
        padding: '0.1rem 0.4rem',
        borderRadius: 9999,
        color: '$gray-200',
        backgroundColor: '$gray-400',
        border: 0,
        outline: 0,
        fontWeight: 'bold',
    }
})

export const TaskListEmpty = styled('div', {
    minHeight: 250,

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    color: '$gray-300',
})