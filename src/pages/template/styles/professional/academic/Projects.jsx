const Projects = () => {
    return (
        <section>
            <h2 className="text-[20px] leading-none font-bold uppercase">
                Projects
            </h2>

            <div className="h-px bg-black w-full mt-1 mb-2"></div>

            <div className="mb-2">
                <p className="font-bold text-[18px]">"La Malinche" - Indigenous Roles in the Spanish Invasion of Mexico Research Project</p>
                <ul className="list-disc ml-6 mt-2 mb-4 text-[15px] leading-[1.45] font-normal text-gray-900">
                    <li >Awarded grant to follow the historical path of the Spanish invasion of Mexico to research the indigenous translator, La Malinche, and the often misunderstood role she played in the conquest. Created an indigenous-centered curriculum for public schools through this project.</li>
                    <li>Collaborated with local educators and historians to pilot the curriculum across multiple school districts, enriching historical literacy for over 500 public school students</li>
                    <li>Facilitated professional development workshops to train teachers on integrating indigenous perspectives and nuanced historical narratives into standard history lesson plans</li>
                </ul>
            </div>
            <div className="h-px bg-gray-200 w-full my-5"></div>
        </section>

    )
}

export default Projects;