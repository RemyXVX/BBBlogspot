import NotLoginHomePage from "./NotLogInHomePage";
import Contact from "./contact/page";
import News from './news/page'
import Projects from "./projects/page";

interface HomePageProps {
  selectedPage: string;
}

const HomePage = ({ selectedPage }: HomePageProps) => {

  const renderPage = () => {
    switch (selectedPage) {
      case 'home':
        return <NotLoginHomePage />;
      case 'news':
        return <News />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <NotLoginHomePage />;
    }
  }

  return (
    <>
      <div className="py-8 px-4 h-auto md:h-screen">
        {renderPage()}
      </div>
    </>
  )
}

export default HomePage;