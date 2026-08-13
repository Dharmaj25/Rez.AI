import Simple from "./styles/professional/simple/Simple";

const TemplateRenderer = ({ slug, data = null, sections = [] }) => {
    const templates = {
        "simple": Simple
    };

    const TemplateDesign = templates[slug];

    if (!TemplateDesign) {
        return <div>No template found</div>; 
    }

    return (
        <TemplateDesign data={data} sections={sections} />
    );
};

export default TemplateRenderer;