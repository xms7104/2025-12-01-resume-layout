import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

function Experience(){
    const experienceInformation = [
        {company: '國立政治大學＿商學院', year: '2023/1 - 2025/11', title: '軟體工程師'},
        {company: '源目資訊有限公司', year: '2023/2 - 2024/2', title: '前端工程師'},
        {company: 'AppWorks School', year: '2022/8 - 2022/11', title: '前端工程師'},
        {company: '立達徵信社', year: '2022/2 - 2022/5', title: '助理工程師'},
        {company: '財團法人資訊工業策進會', year: '2020/3 - 2021/11', title: '助理工程師'}
    ]

    function experienceLayout(){
        return experienceInformation.map((item, index) => {
            return(
                <TimelineItem key={index}>
                    <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <div className="experience_list">
                            <p className="experience_text">{item.company}</p>
                            <p className="experience_text">{item.year}</p>
                            <p className="experience_text">{item.title}</p>
                        </div>
                    </TimelineContent>
                </TimelineItem>
            )
        })
    }

    return(
        <div className="information_detail_block">
            <p className="experience_title">經歷</p>
            <div className="experience_block">
            <Timeline
                sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                    },
                }}
            >
                {experienceLayout()}
                </Timeline>
            </div>
        </div>
    )
}

export default Experience