export default function NavBar() {
    return (
    <div>
        <div className="flex justify-center">
            <div className="flex items-center justify-center h-14 w-72 bg-indigo-900 rounded-bl-full rounded-br-full" id="navbar-default">
                <ul className="flex items-center justify-center font-medium text-center p-8 md:p-0 mt-6 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 font-sans">
                    <li>
                    <a href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500" aria-current="page">Home</a>
                    </li>
                    <li>
                    <a href="./resume" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Resume</a>
                    </li>
                    <li>
                    <a href="./resume" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
    );
  }