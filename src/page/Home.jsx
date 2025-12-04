import Information from "../components/Information";
import Experience from "../components/Experience";
import Summery from "../components/Summery";
import Skills from "../components/Skills";
import userImage from '../assets/userImage.webp';

function Home(){
    const isDesktop = useInLayout(960);

    return(
        <div className="container_background">
            <div className="container_block">
                <div className="information_block">
                    {!isDesktop && (
                        <div className="user_image">
                            <img src={userImage} alt='userImage' />
                        </div>
                    )}
                    <div className="not_pc_block">
                        <div className="user_image">
                            <img src={userImage} alt='userImage' />
                        </div>
                        {isDesktop && (
                            <div className="name_block">
                                <h1 className="name_text">謝旻珊</h1>
                                <Information />
                            </div>
                        )}
                    </div>
                    {isDesktop && (<Summery />)}
                    {!isDesktop && (<Information />)}
                    {!isDesktop && (<Experience />)}
                </div>
                <div className="summery_skills_block">
                    {!isDesktop && (<div className="name_block"><h1 className="name_text">謝旻珊</h1></div>)}
                    {!isDesktop && (<Summery />)}
                    {isDesktop && (<Experience />)}
                    <Skills />
                </div>
            </div>
        </div>
    )
}

export default Home