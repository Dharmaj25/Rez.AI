const Experience = () => {
    return (
        <section>
            <h2 className="text-[20px] leading-none font-bold uppercase">
                Experience
            </h2>

            <div className="h-px bg-black w-full mt-1 mb-2"></div>

            <div className="flex justify-between items-start">
                <div>
                    <p className="font-bold text-[18px] leading-none">
                        English/Reading Teacher
                    </p>
                    <p className="font-bold text-[15px] leading-none mt-1">
                        Company A
                    </p>
                </div>

                <p className="font-bold text-[15px] leading-none">
                    June 2020 - Present, New York, NY
                </p>
            </div>

            <ul className="list-disc ml-6 mt-2 mb-4 text-[15px] leading-[1.45] font-normal text-gray-900">
                <li>
                    Teaching 6th and 7th grade reading to students in the
                    building and students at home engaged in remote instruction
                    simultaneously with the use of Classroom of the Future
                    technologies.
                </li>

                <li>
                    Developed engaging curricula for remote learning,
                    traditional, and hybrid instruction using a flexible array
                    of tech tools and online learning platforms and programs
                    such as Google Classroom, Go-Formative, i-Ready, Coach
                    Digital, Colegia, Class Dojo, Nearpod, Flocabulary, Blooket,
                    Quizlet, Peardeck, Kahoot, among others.
                </li>

                <li>
                    Awarded Teacher of the Year for the 2020-2021 school year.
                </li>
            </ul>

            <div className="h-px bg-gray-200 w-full my-5"></div>

        </section>
    );
};

export default Experience;