function Skills(){
    const skillsInformation = [
        {'title': '網頁基礎（Web Fundamentals）', skills: 'HTML5、CSS3、Tailwind CSS、JavaScript、TypeScript、RWD'},
        {'title': '前端框架與函式庫（Frontend Frameworks & Libraries）', skills: 'React.js（Hooks、Context）、Next.js、React Router、Redux、Styled Components、Storybook、Marked'},
        {'title': 'API 技術（API & Data Communication）', skills: '前端：Fetch API  /  後端：RESTful API'},
        {'title': '後端與部署（Backend & Deployment）', skills: 'Node.js、Express.js、Web Hosting（FTP）、Vercel、Server Configuration、API Integration'},
        {'title': '資料庫與雲端服務（Database & Cloud Services）', skills: 'Firebase、Supabase、MySQL'},
        {'title': '跨平台開發（Cross-Platform Development）', skills: 'React Native'},
        {'title': '自動化與整合（Automation & Integration）', skills: 'n8n'},
        {'title': '開發工具（Development Tools）', skills: 'Webpack、NPM、Git & GitHub、ESLint、Prettier、Chrome DevTools、Google Analytics'},
        {'title': 'UI/UX 基礎（UI/UX Fundamentals）', skills: 'Wireframe、Prototype、User Flow、Figma'},
    ]

    function skillsDetail(){
        return skillsInformation.map((item, index) =>{
            return(
                <div className="skills_detail" key={index}>
                    <p className="skills_detail_title">{item.title}：</p>
                    <p>{item.skills}</p>
                </div>
            )
        })
    }
    

    return(
        <div className="skills_block">
            <p className="summery_skills_title">專業技能</p>
            <div>
                {skillsDetail()}
            </div>
        </div>
    )
}

export default Skills