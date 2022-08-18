export const transitionRight = {
    animation: 'transitionRight 1.5s',
    '@keyframes transitionRight': {
        '0%': {
            transform: 'translateX(30px)',
            opacity: 0
        },
        '100%': {
            transform: 'translateX(0px)',
            opacity: 1
        }
    }
}

export const transitionLeft = {
    animation: 'transitionLeft 1.5s',
    '@keyframes transitionLeft': {
        '0%': {
            transform: 'translateX(-30px)',
            opacity: 0
        },
        '100%': {
            transform: 'translateX(0px)',
            opacity: 1
        }
    }
}