export const ProfessionalSummary = ({ data }) => {
    const { pitch: summary = "" } = data?.career_target || {};

    if (!summary) return null;

    return (
        <section className="w-full mb-7">
            <h2 className="text-[20px] leading-none font-bold uppercase">
                Professional Summary
            </h2>

            <div className="w-full h-px bg-gray-400 mt-2 mb-3" />

            <p className="text-[14px] leading-[1.45] font-normal text-gray-900">
                {summary}
            </p>
        </section>
    );
};