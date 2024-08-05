export default function NavBar() {
    return (
    <div>
        <div className="flex justify-center">
            <div className="flex items-center justify-center h-14 w-72 bg-indigo-900 rounded-bl-full rounded-br-full" id="navbar-default">
                <ul className="flex items-center justify-center font-medium text-center p-8 md:p-0 rounded-lg md:flex-row md:space-x-8 mt-0 font-sans">
                    <li>
                    <a href="/" className="block py-2 px-3 text-white rounded bg-transparent md:text-blue-700 md:p-0 dark:text-white dark:hover:text-blue-500" aria-current="page">Home</a>
                    </li>
                    <li>
                    <a href="./resume" className="block py-2 px-3 text-white rounded bg-transparent md:text-blue-700 md:p-0 dark:text-white dark:hover:text-blue-500">Resume</a>
                    </li>
                    <li>
                    <a href="/#ProjHead" className="block py-2 px-3 text-white rounded bg-transparent md:text-blue-700 md:p-0 dark:text-white dark:hover:text-blue-500">Projects</a>
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
    );
  }