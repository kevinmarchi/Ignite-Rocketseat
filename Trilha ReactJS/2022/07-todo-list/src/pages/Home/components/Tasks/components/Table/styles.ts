import { styled } from "../../../../../../lib/stitches.config";
import * as Checkbox from '@radix-ui/react-checkbox';

export const Container = styled('div', {
    
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