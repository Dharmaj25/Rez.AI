import Simple from "./professional/simple/Simple.jsx";

const TemplateRenderer = ({ slug, data = null, sections = [] }) => {
    const templates = {
        "simple": Simple
    };

    const TemplateDesign = templates[slug];

    if (!TemplateDesign) {
        return <div>No template found</div>; // Or return null;
    }

    return (
        <TemplateDesign data={data} sections={sections} />
    );
};

export default TemplateRenderer;
