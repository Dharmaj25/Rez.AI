const Header = ({ data }) => {

    const { first_name, last_name } = data?.personal || {}
    const { current_role, summary } = data?.professional || {}

    return (
        <section>
            <h1 className="text-4xl font-semibold">
                {first_name && `${first_name} `}
                {last_name && last_name}
            </h1>

            {current_role &&
                <h3 className="text-xl font-light">
                    Full Stack Developer
                </h3>
            }

            {summary &&
                <p className="text-[11px] mt-3">Passionate Full Stack Developer with 3+ years of experience building scalable and user-friendly web applications. Skilled in JavaScript, React, Node.js, and databases. Strong problem-solving abilities and a keen eye for clean, efficient code. Always eager to learn new technologies and contribute to impactful products.</p>
            }

        </section>
    )
}

export default Header;