import { QUESTION_TYPES } from "./questions";
import { RadioCards, ButtonGroup, TextInputQuestion, SearchSelect, Dropdown } from "./QuestionTypes";

const componentMap = {
    [QUESTION_TYPES.RADIO_CARDS]: RadioCards,
    [QUESTION_TYPES.BUTTON_GROUP]: ButtonGroup,
    [QUESTION_TYPES.TEXT_INPUT]: TextInputQuestion,
    [QUESTION_TYPES.SEARCH_SELECT]: SearchSelect,
    [QUESTION_TYPES.DROPDOWN]: Dropdown,
};

const QuestionRenderer = ({ question, value, onChange }) => {
    const Component = componentMap[question.type];

    if (!Component) {
        console.warn(`No renderer registered for question type: ${question.type}`);
        return null;
    }

    return (
        <Component
            options={question.options}
            placeholder={question.placeholder}
            value={value}
            onChange={onChange}
        />
    );
};

export default QuestionRenderer;