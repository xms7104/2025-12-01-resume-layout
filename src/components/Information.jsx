function Information(){
    const userInformation = [
        {title: '手機', contant: '0958119288'}, {title: 'Email', contant: 'xms881126@gmail.com'}
    ]

    function userInformationLayout(){
        return userInformation.map((item, index) => {
            let href = null;
            if (item.title === '手機') {
                href = `tel:${item.contant}`;
            } else if (item.title.toLowerCase() === 'email') {
                href = `mailto:${item.contant}`;
            }

            return(
                <div className="information_text" key={index}>
                    <p>{item.title}：</p>
                    <p className="information_href">{href ? (<a href={href}>{item.contant}</a>) : (item.contant)}</p>
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