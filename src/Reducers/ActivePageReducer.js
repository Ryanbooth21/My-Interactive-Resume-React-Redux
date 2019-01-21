export default function(state = '', action){
    switch(action.type){
        case 'WHO_I_AM':
        return {
            state: 'WhoIam'
        }

        case 'SKILLS':
        return {
            state: 'Skills'
        }

        case 'EDUCATION':
        return {
            state: 'Education'
        }

        case 'EXPERIENCE':
        return {
            state: 'Experience'
        }

        default:
        return state
    }
}