
const projects = [
    {
        id: 1,
        name: "OrgConnect",
        description:
        "A student organization management system for managing organizations, members, and events.",
    },
    {
        id: 2,
        name: "LibroLink",
        description:
        "A mobile application designed to help users discover books and manage their bookmarked titles.",
    },
    {
        id: 3,
        name: "J-Prints",
        description:
        "A service management system for handling printing services and printer repair requests.",
    },
];

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-gray-50 px-8 py-16">
        <div className="mx-auto max-w-4xl">
            <h1 className="text-3xl font-bold text-gray-900">
            My Projects
            </h1>

            <p className="mt-3 text-gray-600">
            Here are some of the projects I have worked on
            as an Information Technology student.
            </p>

            <ul className="mt-8 space-y-5">
            {projects.map((project) => (
                <li
                key={project.id}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
                >
                <h2 className="text-xl font-bold text-gray-800">
                    {project.name}
                </h2>

                <p className="mt-2 text-gray-600">
                    {project.description}
                </p>
                </li>
            ))}
            </ul>
        </div>
        </main>
    );
}
