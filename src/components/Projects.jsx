import Project from "./Project";

function projects() {
    return (
        <>
        <div className="min-h-screen">
            <h2 className="">Projects</h2>
            <Project className="p-4" title="Django Project" description="Example description about this project"/>
            <Project className="p-4" title="Meal Tracker" description="Example description about this project"/>
            <Project className="p-4" title="Inventory tracker?" description="Example description about this project"/>
            <Project className="p-4" title="Craigslist Redesign" description="Example description about this project"/>
        </div>
        </>
    );
}

export default projects;

