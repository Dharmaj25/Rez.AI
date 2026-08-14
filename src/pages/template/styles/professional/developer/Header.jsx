const Header = () => {
    return (
        <section>
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-[48px] leading-none font-bold uppercase tracking-[1px] text-slate-700">Arjun Mehta</h1>
                    <h2 className="mt-2 text-[20px] leading-none font-normal text-gray-600">Software Engineer</h2>
                </div>

                <div className="text-right text-[15px] leading-[1.5] text-gray-700">
                    <p>(+91) 98765 43210</p>
                    <p>arjun.mehta.dev@gmail.com</p>
                    <p>linkedin.com/in/arjunmehta</p>
                    <p>github.com/arjunmehta</p>
                </div>
            </div>

            <div className="mt-3 mb-6 h-[3px] w-full bg-slate-800" />
        </section>
    );
};

export default Header;