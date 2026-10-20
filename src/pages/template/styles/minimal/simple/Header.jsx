const Header = () => {
    return (
        <div className="flex flex-col gap-1">
            <div>
                <h1 className="text-3xl font-semibold text-left">Johnathan Alexander Carillo</h1>
                <h3 className="text-light text-lg text-left">Operations Manager</h3>
            </div>
            <div className="flex flex-row gap-3 text-lg text-blue-800">
                <span>+1-000-000</span>
                <span>johnathan@domain.com</span>
                <span>https://www.linkedin.com/johnathantestcv/</span>
                <span>Austin, Texas, USA</span>
            </div>
        </div>
    )
};

export default Header;