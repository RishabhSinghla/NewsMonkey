import React from 'react'

const NewsItem = (props) => {
    let {title, description, imageUrl, newsUrl, author, date} = props;
    return (
        <div className="my-3">
            <div className="card">
                <img src={!imageUrl?"https://st1.bgr.in/wp-content/uploads/2021/08/Realme-C21Y-price-Rs-8999.jpg" : imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}...<span className="badge bg-secondary">New</span></h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small class="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
