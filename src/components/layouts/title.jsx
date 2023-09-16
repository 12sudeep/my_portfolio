const Title = ({ title, desc }) => {
    return (
        <div className="flex flex-col gap-4 mb-14">
            <h3 className="text-3xl md:text-4xl font-semibold uppercase text-white hover:text-cyan-400 tracking-wide">
                {title}
            </h3>
            <h1 className="text-xl md:text-2xl text-gray-400 my-3 capitalize">
                {desc}
            </h1>
        </div>
    )
}

export default Title;
