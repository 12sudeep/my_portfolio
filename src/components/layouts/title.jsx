const Title = ({ title, desc }) => {
    return (
        <div className="flex flex-col gap-4 mb-14">
            <h3 className="text-sm uppercase text-white tracking-wide">
                {title}
            </h3>
            <h1>
                {desc}
            </h1>
        </div>
    )
}