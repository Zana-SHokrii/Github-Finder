import Spinner from "../layout/spinner"

function Result({ loading, users }) {
    
    if (loading) {
        return <Spinner />
    }
    else {
        return (
            <div className="result">
                {
                users.map(r => {
                    return (
                        <div className="user" key={r.login}>
                            <div className="image">
                                <a href={r.html_url} target="_blank">
                                    <img src={r.avatar_url} alt={r.login} />
                                    <span title="Hirable"></span>
                                </a>
                            </div>
                            <div className="data">
                                <a href={r.html_url} target="_blank">
                                    <a>{r.login}</a>
                                    <p>id {r.id}</p>
                                </a>
                            </div>
                        </div>
                    )
                })
                }
                
            </div>
        )
    }

}

export default Result