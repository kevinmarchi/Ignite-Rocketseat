import { styled } from "../../../../../../lib/stitches.config";
import * as Checkbox from '@radix-ui/react-checkbox';

export const TaskListTable = styled('table', {
    width: '50%',
    borderCollapse: 'separate',
    borderSpacing: '0 0.5rem',
    marginTop: '1.5rem',

    'td': {
        padding: '1.25rem 0.5rem',
        backgroundColor: '$gray-500',

        '&:first-child': {
            'paddingLeft': '1rem',
            'borderTopLeftRadius': 6,
            'borderBottomLeftRadius': 6,
        },

        '&:last-child': {
            'paddingRight': '1rem',
            'borderTopRightRadius': 6,
            'borderBottomRightRadius': 6,
        }
    },

    '@media (max-width: 1100px)': {
        width: '90%',
    }
})

export const CheckboxContainer = styled(Checkbox.Root, {
    all: 'unset',
    width: '1rem',
    height: '1rem',
    
    borderRadius: 9999,
    lineHeight: 0,
    cursor: 'pointer',
    overflow: 'hidden',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid $blue',

    '&:hover': {
        border: '2px solid $blue-dark',
    },

    '&:hover[data-state="checked"]': {
        backgroundColor: '$purple',
        border: '2px solid $purple',
    },

    '&[data-state="checked"]': {
        backgroundColor: '$purple-dark',
        border: '2px solid $purple-dark',
    },
})

export const TrashButton = styled('button', {
    all: 'unset',
    color: '$gray-300',
    cursor: 'pointer',

    '&:hover': {
        color: '$danger',
    }
})

export const TaskText = styled('p', {
    variants: {
        complete: {
            true: {
                textDecoration: 'line-through',
                color: '$gray-300'
            },
        }
    }
})

export const PaginationContainer = styled('div', {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',

    '@media (max-width: 1100px)': {
        width: '90%',
    }
})

export const PaginationButtonContainer = styled('div', {
    display: 'flex',
    gap: '0.2rem',
});

export const PaginationButton = styled('button', {
    all: 'unset',
    cursor: 'pointer',
    backgroundColor: '$blue-dark',
    color: '$gray-100',
    fontWeight: 'bold',
    borderRadius: 4,

    display: 'flex',
    gap: '0.3rem',
    justifyContent: 'center',
    alignItems: 'center',

    transition: 'background-color 0.2s',

    '&:disabled': {
        backgroundColor: '$gray-300',
        cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
        backgroundColor: '$blue',
    }
})

export const PaginationText = styled('p', {
    fontSize: '0.8rem',
})