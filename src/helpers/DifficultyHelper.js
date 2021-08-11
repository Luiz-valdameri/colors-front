export default class DifficultyHelper {

    difficultyToNumber = (difficulty) => {
        switch (difficulty) {
            case 'easy':
                return 3;
            case 'medium':
                return 5;
            case 'hard':
                return 7;
            default:
                return 3;
        }
    }

}