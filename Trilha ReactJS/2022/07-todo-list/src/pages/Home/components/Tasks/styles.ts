import { styled } from "../../../../lib/stitches.config";

export const Container = styled('div', {
    marginTop: '5rem',
})

export const TaskProgress = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: '2rem',
    borderBottom: '1px solid $colors$gray-400',
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