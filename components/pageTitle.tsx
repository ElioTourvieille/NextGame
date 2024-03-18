
const PageTitle = ({ title }:{ title: string }) => {
    return (
        <h1 className="text-4xl font-bold text-center my-10">
            {title}
        </h1>
    );
};

export default PageTitle;