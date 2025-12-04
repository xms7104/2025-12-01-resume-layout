function Information(){
    const userInformation = [
        {title: '手機', content: '0958119288'}, {title: 'Email', content: 'xms881126@gmail.com'}
    ]

    function userInformationLayout(){
        return userInformation.map((item, index) => {
            let href = null;
            if (item.title === '手機') {
                href = `tel:${item.content}`;
            } else if (item.title.toLowerCase() === 'email') {
                href = `mailto:${item.content}`;
            }

            return(
                <div className="information_text" key={index}>
                    <p>{item.title}：</p>
                    <p className="information_href">{href ? (<a href={href}>{item.content}</a>) : (item.content)}</p>
                </div>
            )
        })
    }

    return(
        <div className="information_detail_block">
            <p className="information_title">聯繫方式</p>
            {userInformationLayout()}
        </div>
    )
}

export default Information