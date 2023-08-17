const NotLoginHomePage = () => {
  return (
    <div className="pt-8 h-auto md:h-screen">
      <div className="px-4">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 xl:pl-32">
          Welcome!
        </h1>
        <hr className="m-1 border-2 w-1/3 border-slate-400 mb-2" />
        <p className="text-xs md:text-sm lg:text-base px-2 py-1">
          Currently, the website is under construction. If you're seeing this, it's probably because you're<br /> 
          not logged in. I haven't implemented that feature yet. I'm also working on adding daily posts<br /> 
          about what I'm working on, along with a ToDo list. It will be linked on the <a href="/projects" className="text-blue-500 underline">Projects</a><br /> 
          page. If you have any ideas or need an open-source application, feel free to submit a 'ticket'!
        </p>
      </div>
      <div className="px-4 py-4">
        <h2 className="text-lg md:text-xl pb-2">
          Things to know:
        </h2>
        <div>
          <span className="text-xs">
            <ol>
              Tech Stack
              (<span className="font-bold">Current</span>):
            </ol>
            <li>Next JS</li>
            <li>Tailwind</li>
            <li>MySQL/PostgreSQL</li>
            <li>Javascript</li>
          </span>
          <span>
            <ol>
              Exposure:
            </ol>
            <li>Python/Django</li>
            <li>React Native/Flutter</li>
            <li>Express/Feather</li>
            <li>ASP.Net/C#</li>
          </span>
          <span>
            <ol>
              Learning:
            </ol>
            <li className="italic">GO</li>
            <li>Java</li>
            <li>GraphQL</li>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NotLoginHomePage;
